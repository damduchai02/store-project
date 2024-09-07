'use client';

import { Skeleton } from '../ui/skeleton';
import { Card, CardContent } from '../ui/card';
import { useParams, useSearchParams } from 'next/navigation';

function LoadingContainer() {
  const searchParams = useSearchParams();
  const params = useParams();

  const layout = searchParams.get('layout');

  if (layout === 'list')
    return (
      <div className='grid grid-cols-1 gap-4 pt-12'>
        {Array.from({ length: 3 }, (_, i) => {
          return <LoadingProductList key={i} />;
        })}
      </div>
    );

  if (params.id) return <LoadingSingleProduct />;

  return (
    <div className='grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: 3 }, (_, i) => {
        return <LoadingProductGrid key={i} />;
      })}
    </div>
  );
}

function LoadingProductGrid() {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='mt-4 h-4 w-3/4' />
        <Skeleton className='mt-4 h-4 w-1/4' />
      </CardContent>
    </Card>
  );
}

function LoadingProductList() {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='mt-4 h-4 w-3/4' />
        <Skeleton className='mt-4 h-4 w-1/4' />
      </CardContent>
    </Card>
  );
}
function LoadingSingleProduct() {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='h-80 w-full' />
      </CardContent>
    </Card>
  );
}

export default LoadingContainer;
