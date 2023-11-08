import { useSearchParams as useParams } from 'react-router-dom';

export const useSearchParams = (paramsField: string) => {
  const [searchParams, setSearchParams] = useParams();
  const currentParam = searchParams.get(paramsField);

  const setParam = (value: string) => {
    if (!value) {
      searchParams.delete(paramsField);
      setSearchParams(searchParams);
      return;
    }

    searchParams.set(paramsField, value);
    setSearchParams(searchParams);
  };

  return { currentParam, setParam };
};
