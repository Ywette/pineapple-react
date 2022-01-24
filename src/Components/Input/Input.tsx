import React from 'react';

interface InputProps {
  id?:string,
  className: string,
  type: string,
  name: string,
  placeholder?: string,
  value?: string,
  autocomplete?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type, name, placeholder, value, onChange, autocomplete, className, id,
}: InputProps) => (
  <input
    autoComplete={autocomplete}
    className={className}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    id={id}
  />
);

export default Input;
