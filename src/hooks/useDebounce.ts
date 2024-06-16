import { useState, useEffect } from 'react';

function useDebounce(value: string, debounceTime: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debounceTime]);

  return debouncedValue;
}

export default useDebounce;