import { useState } from 'react';

export function useSearchQuery() {
  const [query, setQuery] = useState<string>('');

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return {
    query,
    onChange: handleChange,
  };
}

