import { useSearchParams } from 'react-router';
import { ProductsResponse } from '../interfaces/productsResponse';
import productsServices from '../services/actions';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  // const categoryFilter = searchParams.get('category');
  useEffect(() => {
    const pageParams = searchParams.get('page');
    const limitParams = searchParams.get('limit');
    if (pageParams) {
      setPage(Number(+pageParams));
    }
    if (limitParams) {
      setLimit(Number(+limitParams));
    }
  }, [searchParams]);

  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['products', { page, limit }],
    queryFn: () => productsServices.getAllProducts(page, limit),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const safeData = data as ProductsResponse | undefined;

  return {
    products: safeData?.products,
    meta: safeData?.meta,
    isLoading,
    error,
    refetch,
    isFetching,
  };
};
