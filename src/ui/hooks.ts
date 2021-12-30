import { useState } from 'react';

export function useQuery() {
  const [query, setQuery] = useState<string>('');

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return {
    query,
    onChange: handleChange,
  };
}

