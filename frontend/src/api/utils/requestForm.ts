import { api } from '@/api/axiosConfig/axiosConfig';
import { ResultAsync } from 'neverthrow';
import { z } from 'zod';

type TProps<T> = {
  method: 'get' | 'post' | 'delete' | 'patch';
  url: string;
  params?: unknown;
  zod?: z.ZodType<T>;
};

export const requestForm = async <T>({
  method,
  url,
  params,
  zod,
}: TProps<T>): Promise<T> => {
  const config = method === 'get' ? { params } : { data: params };

  return ResultAsync.fromPromise(
    api.request({ method, url, ...config }),
    (err) => (err instanceof Error ? err : new Error(String(err))),
  )
    .map((res) => res.data)
    .match(
      (data) => (zod ? zod.parse(data) : data),
      (err) => {
        throw err;
      },
    );
};
