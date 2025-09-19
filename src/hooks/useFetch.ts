import { useCallback, useEffect, useState } from 'react';

const useFetch = <T = unknown | null>(url: string) => {
  const api_url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const fetcher = useCallback(async () => {
    if (!url) {
      return setError('Your api endpoint not found');
    }
    setLoading(true);

    try {
      const res = await fetch(`${api_url}/${url}`);
      if (!res.ok)
        throw new Error('Failed to fetch data: API endpoint may be incorrect or unavailable.');
      const result: T = await res.json();
      setData(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [url, api_url]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { data, loading, error, fetcher };
};

export default useFetch;
