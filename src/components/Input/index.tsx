import React, { useEffect, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps {
  name:string; 
  placeholder:string;
}


export const Input = ({name,placeholder, ...rest}:InputProps) => {
  
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  },[fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return(
    
    <Container isFilled={isFilled} isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        placeholder={placeholder}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
}

