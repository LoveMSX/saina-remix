/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CSSProperties } from "react";
import type { FieldConfig } from "../../interfaces/components/form";

const defaultStyle = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
    marginBottom: "1.25rem"
  },
  label: {
    marginBottom: "0.375rem",
    color: "#1f2937",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    fontWeight: 600,
    letterSpacing: '0.3px'
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#1f2937",
    backgroundColor: "#f9fafb",
    backgroundImage: "none",
    border: "1.5px solid #e5e7eb",
    borderRadius: "0.75rem",
    transition: "all 0.2s ease-in-out",
    outline: "none"
  },
  inputFocus: {
    borderColor: "#0ea5e9",
    boxShadow: "0 0 0 3px rgba(14, 165, 233, 0.1)",
    backgroundColor: "#ffffff"
  },
  inputError: {
    borderColor: "#ef4444",
    boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)"
  },
  inputDisabled: {
    backgroundColor: "#f3f4f6",
    opacity: "1",
    cursor: "not-allowed",
    color: "#9ca3af"
  },
  textarea: {
    display: "block",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#1f2937",
    backgroundColor: "#f9fafb",
    backgroundImage: "none",
    border: "1.5px solid #e5e7eb",
    borderRadius: "0.75rem",
    transition: "all 0.2s ease-in-out",
    outline: "none",
    resize: "vertical" as const,
    minHeight: "calc(1.5em + 1.5rem + 2px)"
  },
  select: {
    display: "block",
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#1f2937",
    backgroundColor: "#f9fafb",
    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.75rem center",
    backgroundSize: "16px 12px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "0.75rem",
    transition: "all 0.2s ease-in-out",
    outline: "none",
    appearance: "none" as const,
    paddingRight: "2.5rem"
  },
  checkbox: {
    width: "1.25rem",
    height: "1.25rem",
    marginTop: "0.125rem",
    verticalAlign: "top",
    backgroundColor: "#fff",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    border: "1.5px solid #d1d5db",
    appearance: "none" as const,
    borderRadius: "0.375rem",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out"
  },
  radio: {
    width: "1.25rem",
    height: "1.25rem",
    marginTop: "0.125rem",
    verticalAlign: "top",
    backgroundColor: "#fff",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    border: "1.5px solid #d1d5db",
    appearance: "none" as const,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out"
  },
  errorText: {
    width: "100%",
    marginTop: "0.375rem",
    fontSize: "0.875rem",
    color: "#ef4444",
    fontWeight: 500
  },
  requiredAsterisk: {
    color: "#ef4444",
    marginLeft: "0.25rem",
    fontWeight: 700
  },
  checkboxLabel: {
    marginLeft: "0.75rem",
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#1f2937",
    cursor: "pointer"
  },
  radioContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem"
  },
  radioItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem"
  }
};

const Input = <T extends Record<string, any>>({
  field,
  value,
  error,
  touched,
  inputStyle,
  labelStyle,
  onChange,
  onBlur
}: {
  field: FieldConfig<T>;
  value: any;
  error?: string;
  touched?: boolean;
  onChange: (value: any) => void;
  inputStyle? : CSSProperties,
  labelStyle? : CSSProperties,
  onBlur: () => void;
}) => {
  const getInputStyle = () => {
    let style = { ...defaultStyle.input, ...inputStyle || {} };
    
    if (error && touched) {
      style = { ...style, ...defaultStyle.inputError };
    }
    
    if (field.disabled) {
      style = { ...style, ...defaultStyle.inputDisabled };
    }
    
    return style;
  };

  const getTextareaStyle = () => {
    let style = { ...defaultStyle.textarea};
    
    if (error && touched) {
      style = { ...style, ...defaultStyle.inputError };
    }
    
    if (field.disabled) {
      style = { ...style, ...defaultStyle.inputDisabled };
    }
    
    return style;
  };

  const getSelectStyle = () => {
    let style = { ...defaultStyle.select };
    
    if (error && touched) {
      style = { ...style, ...defaultStyle.inputError };
    }
    
    if (field.disabled) {
      style = { ...style, ...defaultStyle.inputDisabled };
    }
    
    return style;
  };

  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            style={getTextareaStyle()}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={field.placeholder}
            required={field.required}
            disabled={field.disabled}
          />
        );

      case 'select':
        return (
          <select
            style={getSelectStyle()}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            required={field.required}
            disabled={field.disabled}
          >
            <option value="">{field.placeholder || 'Sélectionnez...'}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              style={defaultStyle.checkbox}
              checked={value || false}
              onChange={(e) => onChange(e.target.checked)}
              onBlur={onBlur}
              disabled={field.disabled}
            />
            <label style={defaultStyle.checkboxLabel}>{field.label}</label>
          </div>
        );

      case 'radio':
        return (
          <div style={defaultStyle.radioContainer}>
            {field.options?.map((option) => (
              <div key={option.value} style={defaultStyle.radioItem}>
                <input
                  type="radio"
                  style={defaultStyle.radio}
                  name={field.name as string}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  onBlur={onBlur}
                  disabled={field.disabled}
                />
                <label style={defaultStyle.checkboxLabel}>{option.label}</label>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <input
            type={field.type}
            style={getInputStyle()}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={field.placeholder}
            required={field.required}
            disabled={field.disabled}
          />
        );
    }
  };

  return (
    <div style={defaultStyle.container}>
      {field.type !== 'checkbox' && (
        <label style={{...defaultStyle.label, ...labelStyle}}>
          {field.label}
          {field.required && <span style={defaultStyle.requiredAsterisk}>*</span>}
        </label>
      )}
      <div>
        {renderInput()}
      </div>
      {error && touched && (
        <p style={defaultStyle.errorText}>
          <span>⚠️ {error}</span>
        </p>
      )}
    </div>
  );
}

export default Input;