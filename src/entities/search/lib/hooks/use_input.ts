import {
  ChangeEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';

export function useSearch(
  initialValue: string = ''
) {
  const [value, setValue] =
    useState<string>(initialValue);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return useMemo(
    () => ({
      value,
      onChange,
    }),
    []
  );
}
