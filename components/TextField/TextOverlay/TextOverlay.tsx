'use client';
import { getTextData } from '@/services/getTextData';
import React, { useEffect, useState } from 'react';
import './TextBox.scss';

const TextOverlay = () => {
  const [textValue, setTextValue] = useState<string>();

  useEffect(() => {
    const setInitialData = async () => {
      const text = await getTextData();
      setTextValue(text);
    };

    setInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <textarea
      className="h-[80%] w-[80%] absolute z-10 text-overlay"
      value={textValue}
      readOnly={true}
    ></textarea>
  );
};

export default TextOverlay;
