"use client"
import React, { createContext, useContext, useState } from 'react';

const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(false);

  const toggleFocus = () => {
    setIsFocused((prev) => !prev);
  };

  return (
    <FocusContext.Provider value={{ isFocused, toggleFocus, handleFocus }}>
      {children}
    </FocusContext.Provider>
  );
};

export const useFocus = () => useContext(FocusContext);