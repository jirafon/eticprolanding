import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QUESTIONS = [
  {
    id: 'q1',
    value: 25,
    type: 'yesno',
    scoring: { yes: 25, no: 0 },
  },
  {
    id: 'q2',
    value: 10,
    type: 'yesno',
    scoring: { yes: 10, no: 0 },
  },
  {
    id: 'q3',
    value: 10,
    type: 'scale',
    scoring: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10 },
  },
  {
    id: 'q4',
    value: 10,
    type: 'scale',
    scoring: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10 },
  },
  {
    id: 'q5',
    value: 10,
    type: 'scale',
    scoring: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10 },
  },
];

const TOTAL_POSSIBLE = QUESTIONS.reduce((acc, q) => acc + q.value, 0);

const STEP_INFO = 0;
const STEP_QUIZ_START = 1;
const STEP_RESULTS = STEP_QUIZ_START + QUESTIONS.length;

const getScoreLabel = (t, pct) => {
  if (pct >= 80) {
    return {
      label: t('readinessQuiz.scoreStates.excellent.label'),
      color: 'text-green-600',
      bg: 'bg-green-100',
      desc: t('readinessQuiz.scoreStates.excellent.description'),
    };
  }
  if (pct >= 50) {
    return {
      label: t('readinessQuiz.scoreStates.progress.label'),
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
      desc: t('readinessQuiz.scoreStates.progress.description'),
    };
  }
  return {
    label: t('readinessQuiz.scoreStates.improve.label'),
    color: 'text-red-600',
    bg: 'bg-red-100',
    desc: t('readinessQuiz.scoreStates.improve.description'),
  };
};

const ReadinessQuizModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(STEP_INFO);
  const [formData, setFormData] = useState({ nombre: '', cargo: '', empresa: '', correo: '', telefono: '' });
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [sending, setSending] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  if (!isOpen) return null;

  const handleFormChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    setStep(STEP_QUIZ_START);
  };

  const handleAnswer = (qId, value) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const currentQuestion = step >= STEP_QUIZ_START && step < STEP_RESULTS ? QUESTIONS[step - STEP_QUIZ_START] : null;
  const currentQuestionText = currentQuestion ? t(`readinessQuiz.questions.${currentQuestion.id}.question`) : '';
  const currentQuestionSubtitle = currentQuestion && currentQuestion.type === 'scale'
    ? t(`readinessQuiz.questions.${currentQuestion.id}.subtitle`)
    : '';

  const getAnswerLabel = (value) => {
    if (value === 'yes') return t('readinessQuiz.answers.yes');
    if (value === 'no') return t('readinessQuiz.answers.no');
    if (value === undefined || value === null) return t('readinessQuiz.answers.unanswered');
    return String(value);
  };

  const handleNext = () => {
    if (step < STEP_RESULTS - 1) {
      setStep(step + 1);
    } else {
      // last question → calculate and go to results
      let total = 0;
      QUESTIONS.forEach((q) => {
        const ans = answers[q.id];
        if (ans !== undefined && q.scoring[ans] !== undefined) {
          total += q.scoring[ans];
        }
      });
      setScore(total);
      setStep(STEP_RESULTS);
    }
  };

  const handlePrev = () => {
    if (step > STEP_INFO) setStep(step - 1);
  };

  const handleContactMe = async () => {
    setSending(true);
    const pct = ((score / TOTAL_POSSIBLE) * 100).toFixed(1);
    let emailBody = `<h2>${t('readinessQuiz.email.requestTitle')}</h2>`;
    emailBody += `<p><strong>${t('readinessQuiz.form.nameLabel')}:</strong> ${formData.nombre}</p>`;
    emailBody += `<p><strong>${t('readinessQuiz.form.roleLabel')}:</strong> ${formData.cargo}</p>`;
    emailBody += `<p><strong>${t('readinessQuiz.form.companyLabel')}:</strong> ${formData.empresa}</p>`;
    emailBody += `<p><strong>${t('readinessQuiz.form.emailLabel')}:</strong> ${formData.correo}</p>`;
    emailBody += `<p><strong>${t('readinessQuiz.form.phoneLabel')}:</strong> ${formData.telefono}</p>`;
    emailBody += `<br/><h3>${t('readinessQuiz.email.resultsTitle')}</h3>`;
    emailBody += `<p><strong>${t('readinessQuiz.email.scoreLabel')}:</strong> ${score} / ${TOTAL_POSSIBLE} ${t('readinessQuiz.results.pointsSuffix')} (${pct}%)</p>`;
    emailBody += `<ul>`;
    QUESTIONS.forEach((q) => {
      emailBody += `<li><strong>${t(`readinessQuiz.questions.${q.id}.question`)}:</strong> ${getAnswerLabel(answers[q.id])}</li>`;
    });
    emailBody += `</ul>`;

    try {
      await fetch('https://vault-server-u5xa.onrender.com/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emails: ['chaquin@gmail.com'],
          emailTemplate: emailBody,
          subject: `${t('readinessQuiz.email.subject')} - ${formData.empresa} (${pct}%)`,
        }),
      });
    } catch (err) {
      console.error('Error sending email:', err);
    }
    setSending(false);
    setContactSent(true);
  };

  const handleClose = () => {
    setStep(STEP_INFO);
    setFormData({ nombre: '', cargo: '', empresa: '', correo: '', telefono: '' });
    setAnswers({});
    setScore(null);
    setContactSent(false);
    onClose();
  };

  const scoreLabel = score !== null ? getScoreLabel(t, (score / TOTAL_POSSIBLE) * 100) : null;
  const progress = step === STEP_INFO ? 0 : step === STEP_RESULTS ? 100 : Math.round(((step - STEP_QUIZ_START) / QUESTIONS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 px-6 pt-6 pb-4 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl leading-none hover:opacity-70 transition-opacity"
            aria-label={t('readinessQuiz.actions.close')}
          >
            &times;
          </button>
          <div className="inline-flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold mb-2">
            {t('readinessQuiz.badge')}
          </div>
          <h2 className="text-2xl font-bold">{t('readinessQuiz.title')}</h2>
          <p className="text-blue-100 text-sm mt-1">{t('readinessQuiz.subtitle')}</p>
          {/* Progress bar */}
          {step !== STEP_INFO && (
            <div className="mt-4 bg-white bg-opacity-30 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Step 0: Personal Info */}
          {step === STEP_INFO && (
            <form onSubmit={handleInfoSubmit} className="space-y-3">
              <p className="text-gray-600 text-sm mb-4">{t('readinessQuiz.form.description')}</p>
              {[
                { name: 'nombre', placeholder: t('readinessQuiz.form.namePlaceholder'), type: 'text' },
                { name: 'cargo', placeholder: t('readinessQuiz.form.rolePlaceholder'), type: 'text' },
                { name: 'empresa', placeholder: t('readinessQuiz.form.companyPlaceholder'), type: 'text' },
                { name: 'correo', placeholder: t('readinessQuiz.form.emailPlaceholder'), type: 'email' },
                { name: 'telefono', placeholder: t('readinessQuiz.form.phonePlaceholder'), type: 'tel' },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleFormChange}
                  required
                  className="block w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
              <button
                type="submit"
                className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
              >
                {t('readinessQuiz.actions.start')}
              </button>
            </form>
          )}

          {/* Steps 1-N: Quiz Questions */}
          {currentQuestion && (
            <div>
              <div className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">
                {t('readinessQuiz.progress.questionOf', {
                  current: step - STEP_QUIZ_START + 1,
                  total: QUESTIONS.length,
                })}
              </div>
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                {t('readinessQuiz.progress.value', { value: currentQuestion.value })}
              </div>
              <h3 className="text-gray-800 font-semibold text-base mb-1 leading-snug">{currentQuestionText}</h3>
              {currentQuestionSubtitle && (
                <p className="text-gray-500 text-xs mb-4">{currentQuestionSubtitle}</p>
              )}

              {currentQuestion.type === 'yesno' && (
                <div className="flex gap-3 mb-6 mt-4">
                  {[
                    { value: 'yes', label: t('readinessQuiz.answers.yes'), icon: '✓' },
                    { value: 'no', label: t('readinessQuiz.answers.no'), icon: '✗' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                      className={`flex-1 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-150 ${
                        answers[currentQuestion.id] === opt.value
                          ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                          : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {`${opt.icon} ${opt.label}`}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'scale' && (
                <div className="flex gap-2 mb-6 mt-4 justify-between">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => handleAnswer(currentQuestion.id, n)}
                      className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all duration-150 ${
                        answers[currentQuestion.id] === n
                          ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                          : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
              {currentQuestion.type === 'scale' && (
                <div className="flex justify-between text-xs text-gray-400 mb-4 -mt-3 px-1">
                  <span>{t('readinessQuiz.scale.min')}</span>
                  <span>{t('readinessQuiz.scale.max')}</span>
                </div>
              )}

              <div className="flex justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  {t('readinessQuiz.actions.previous')}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={answers[currentQuestion.id] === undefined}
                  className={`flex-1 py-2.5 rounded-xl text-white font-semibold text-sm transition-colors duration-200 ${
                    answers[currentQuestion.id] !== undefined
                      ? 'bg-blue-700 hover:bg-blue-800'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  {step === STEP_RESULTS - 1 ? t('readinessQuiz.actions.viewResults') : t('readinessQuiz.actions.next')}
                </button>
              </div>
            </div>
          )}

          {/* Results Step */}
          {step === STEP_RESULTS && scoreLabel && (
            <div className="text-center">
              {contactSent ? (
                <div className="py-4">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('readinessQuiz.results.sentTitle')}</h3>
                  <p className="text-gray-700 text-sm font-semibold mb-2">
                    {t('readinessQuiz.results.totalScoring')}: {score} / {TOTAL_POSSIBLE} {t('readinessQuiz.results.pointsSuffix')} ({((score / TOTAL_POSSIBLE) * 100).toFixed(0)}%)
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    {t('readinessQuiz.results.sentDescription')}
                  </p>
                  <button
                    onClick={handleClose}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    {t('readinessQuiz.actions.close')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{t('readinessQuiz.results.totalScoring')}</div>
                  <div className={`inline-flex flex-col items-center justify-center w-28 h-28 rounded-full ${scoreLabel.bg} mb-4`}>
                    <span className={`text-3xl font-extrabold ${scoreLabel.color}`}>{score}</span>
                    <span className="text-xs text-gray-500">/ {TOTAL_POSSIBLE} {t('readinessQuiz.results.pointsSuffix')}</span>
                  </div>
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-2 ${scoreLabel.bg} ${scoreLabel.color}`}>
                    {scoreLabel.label}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {t('readinessQuiz.results.compliancePercent', {
                      percent: ((score / TOTAL_POSSIBLE) * 100).toFixed(0),
                    })}
                  </div>
                  <p className="text-gray-600 text-sm mb-5">{scoreLabel.desc}</p>

                  {/* Score breakdown */}
                  <div className="bg-gray-50 rounded-xl p-3 mb-5 text-left space-y-1.5">
                    {QUESTIONS.map((q) => {
                      const ans = answers[q.id];
                      const pts = ans !== undefined && q.scoring[ans] !== undefined ? q.scoring[ans] : 0;
                      return (
                        <div key={q.id} className="flex justify-between text-xs text-gray-600">
                          <span className="truncate pr-2 flex-1">{t(`readinessQuiz.questions.${q.id}.question`)}</span>
                          <span className="font-semibold text-blue-700 whitespace-nowrap">{pts}/{q.value} {t('readinessQuiz.results.pointsSuffix')}</span>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleContactMe}
                    disabled={sending}
                    className={`w-full py-3 rounded-xl text-white font-bold text-base transition-colors duration-200 mb-3 ${
                      sending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
                    }`}
                  >
                    {sending ? t('readinessQuiz.actions.sending') : t('readinessQuiz.actions.contactMe')}
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition-colors"
                  >
                    {t('readinessQuiz.actions.close')}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadinessQuizModal;
