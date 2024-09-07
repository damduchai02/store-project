import { formatCurrency } from '@/utils/format';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@prisma/client';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className='mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;
        return (
          <article key={productId} className='group relative'>
            <Link href={`/products/${productId}`}>
              <Card className='transform transition-shadow duration-500 group-hover:shadow-xl'>
                <CardContent className='grid gap-y-4 p-8 md:grid-cols-3'>
                  <div className='relative h-64 overflow-hidden rounded md:h-48 md:w-48'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                      priority
                      className='w-full transform rounded object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  </div>

                  <div>
                    <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                    <h4 className='text-muted-foreground'>{company}</h4>
                  </div>
                  <p className='text-lg text-muted-foreground md:ml-auto'>
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute bottom-8 right-8 z-[1]'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
