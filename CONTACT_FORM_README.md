# Formulario de Contacto Moderno - Eticpro

## 🎯 Características

El nuevo formulario de contacto incluye las siguientes características modernas y elegantes:

### ✨ Diseño y UX
- **Diseño moderno y elegante** con gradientes y sombras
- **Animaciones suaves** en todos los elementos interactivos
- **Responsive design** que se adapta a todos los dispositivos
- **Iconos intuitivos** para cada campo del formulario
- **Estados visuales claros** (focus, error, éxito)

### 🔧 Funcionalidades
- **Validación en tiempo real** con mensajes de error claros
- **Estados de carga** con spinner animado
- **Confirmación de envío** con mensaje de éxito
- **Campos opcionales** para empresa e industria
- **Auto-reset** del formulario después del envío

### 🎨 Elementos Visuales
- **Gradientes modernos** en botones y fondos
- **Efectos hover** con transformaciones suaves
- **Colores consistentes** con la marca Eticpro
- **Tipografía clara** y legible
- **Espaciado optimizado** para mejor legibilidad

## 📁 Archivos Creados

1. **`src/components/ContactForm.jsx`** - Componente principal del formulario
2. **`src/pages/ContactPage.jsx`** - Página de ejemplo para mostrar el formulario
3. **`CONTACT_FORM_README.md`** - Este archivo de documentación

## 🚀 Cómo Usar

### 1. Importar el Componente
```jsx
import ContactForm from './components/ContactForm';
```

### 2. Usar en tu Página
```jsx
function MiPagina() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
```

### 3. Personalizar (Opcional)
El formulario está diseñado para ser completamente funcional sin configuración adicional, pero puedes personalizar:

- **Colores**: Modifica las clases de Tailwind CSS
- **Campos**: Edita el array `inputFields` en el componente
- **Validación**: Modifica la función `validateForm`
- **Envío**: Reemplaza la simulación con tu API real

## 📋 Campos del Formulario

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| Nombre | Text | ✅ | Nombre completo del usuario |
| Email | Email | ✅ | Dirección de correo electrónico |
| Teléfono | Tel | ✅ | Número de teléfono |
| Empresa | Text | ❌ | Nombre de la empresa (opcional) |
| Industria | Text | ❌ | Tipo de industria (opcional) |
| Mensaje | Textarea | ✅ | Descripción del proyecto |

## 🎭 Estados del Formulario

### 1. **Estado Inicial**
- Formulario limpio con placeholders informativos
- Botón "Enviar Mensaje" habilitado

### 2. **Estado de Validación**
- Errores mostrados en tiempo real
- Campos con error tienen borde rojo
- Campos válidos tienen borde verde

### 3. **Estado de Envío**
- Botón muestra spinner y "Enviando mensaje..."
- Formulario deshabilitado durante el envío

### 4. **Estado de Éxito**
- Mensaje de confirmación con icono de check
- Información de contacto adicional
- Auto-reset después de 3 segundos

## 🎨 Personalización

### Cambiar Colores
```jsx
// En el componente ContactForm.jsx
// Busca las clases de Tailwind y modifica:
// from-blue-600 to-blue-700 → from-[tu-color] to-[tu-color]
```

### Agregar Campos
```jsx
// En el array inputFields, agrega:
{
  field: 'nuevoCampo',
  icon: faNuevoIcono,
  placeholder: 'Nuevo campo',
  type: 'text',
  required: false
}
```

### Modificar Validación
```jsx
// En la función validateForm, agrega:
if (!formData.nuevoCampo.trim()) {
  newErrors.nuevoCampo = 'El nuevo campo es requerido';
}
```

## 🔗 Integración con API

Para conectar con una API real, reemplaza la simulación en `handleSubmit`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
    } else {
      // Manejar error
    }
  } catch (error) {
    // Manejar error
  } finally {
    setIsSubmitting(false);
  }
};
```

## 📱 Responsive Design

El formulario está optimizado para:
- **Desktop**: Layout de 2 columnas para campos
- **Tablet**: Layout adaptativo
- **Mobile**: Layout de 1 columna, botones optimizados

## ♿ Accesibilidad

- **Navegación por teclado** completamente funcional
- **Screen readers** compatibles
- **Contraste de colores** optimizado
- **Focus visible** en todos los elementos interactivos
- **Reduced motion** respetado para usuarios sensibles

## 🎯 Próximos Pasos

1. **Integrar con API real** para envío de emails
2. **Agregar reCAPTCHA** para seguridad
3. **Implementar tracking** de conversiones
4. **Agregar notificaciones** push
5. **Integrar con CRM** (Salesforce, HubSpot, etc.)

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo en hello@eticpro.com 