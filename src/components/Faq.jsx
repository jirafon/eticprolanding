import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sections = [
    {
      title: t('faq.question1'),
      content: t('faq.question1Content'),
    },
    {
      title: t('faq.question2'),
      content: t('faq.question2Content'),
    },
    {
      title: t('faq.question3'),
      content: t('faq.question3Content'),
    },
    {
      title: t('faq.question4'),
      content: t('faq.question4Content'),
    },
  ];

  return (
    <section id="FAQ" className="relative">
    <div style={{ backgroundColor: 'rgb(236, 253, 255)', padding: '16px' }}>
        <h6 className=' text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{t('faq.title')}</h6>

    <div className='max-w-[1240px] mx-auto text-left'>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '16px',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
            maxWidth: '800px',
            margin: '0 auto',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'left' }}>
            <Typography
              variant="h6"
              onClick={() => handleToggle(index)}
              style={{
                cursor: 'pointer',
                margin: 0,
                fontWeight: 'bold',
              }}
            >
              {section.title}
            </Typography>
            <IconButton
              onClick={() => handleToggle(index)}
              style={{ marginLeft: 'auto' }}
            >
              {expandedIndex === index ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </IconButton>
          </div>
          {expandedIndex === index && (
            <div
              dangerouslySetInnerHTML={{ __html: section.content }}
              style={{ marginTop: '16px' }}
            />
          )}
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

export default FAQSection;
