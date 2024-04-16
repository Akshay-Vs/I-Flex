import { useEffect, useState } from 'react';
import { getTextData } from '@/services/getTextData';

export const useTextData = () => {
  const [textData, setTextData] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      const text = await getTextData();
      setTextData(text);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return textData;
};
