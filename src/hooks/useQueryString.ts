import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export interface QueryStringOptions {
  paginationReset: {
    query: string
  }
}
const useQueryString = (options?:QueryStringOptions)=>{
  const [state,setState] = useState<string|null>(null)
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()

  const shouldResetPagination = ()=> options?.paginationReset;
  const resetPagination = (params:URLSearchParams)=>{
    const key = options?.paginationReset.query ?? 'page';
    if(params.has(key) && params.get(key) !== '1'){
      params.set(key,'1');
    }
  }

  useEffect(()=>{
    if(state != null) router.push(pathname+'?'+`${state}`)
  },[state])

  const setQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      if(value!='-'){
        params.set(name, value);
      }

      if(shouldResetPagination()){
        resetPagination(params)
      }
      setState(params.toString());
    },
    [searchParams],
  );

  const resetQueryString = ()=>{
    router.push(pathname);
  }

  return [setQueryString,resetQueryString];
}

export default useQueryString;
