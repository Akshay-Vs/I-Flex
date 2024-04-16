'use client';
import React, { useRef, useState } from 'react';
import './TextBox.scss';
import handleKeyDown from '@/utils/keyDownHandler';
import { useTextData } from '@/hooks/useTextData';

const TextBox: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textValue, setTextValue] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('text-[#FAFAFA]');
  const textData = useTextData();

  const crossCheck = (text: string) => {
    const currentIndex = textValue.length;
    const currentChar = text.charAt(currentIndex);
    const expectedChar = textData.charAt(currentIndex);

    if (currentChar === expectedChar) {
      setTextValue(text);
      setTextColor('text-[#FAFAFA]');
    } else {
      setTextColor('text-red-400');
      setTimeout(() => setTextColor('text-red-400'), 100);
      setTimeout(() => setTextColor('text-[#FAFAFA]'), 200);
      setTimeout(() => setTextColor('text-red-400'), 300);
      setTimeout(() => setTextColor('text-[#FAFAFA]'), 400);
    }
  };

  return (
    <div className="h-[80%] w-[80%] absolute z-20">
      <textarea
        ref={textareaRef}
        className={`textbox__textarea ${textColor}`}
        value={textValue}
        autoCorrect="off"
        autoFocus={true}
        spellCheck={false}
        onKeyDown={(e) => handleKeyDown(e, textareaRef)}
        onChange={(e) => {
          crossCheck(e.target.value);
        }}
      />
    </div>
  );
};

export default TextBox;
