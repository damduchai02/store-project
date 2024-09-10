import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from 'react-icons/lu';

async function CartButton() {
  // temp
  const numItemsInCart = 9; // await
  return (
    <Button
      asChild
      size='icon'
      variant='outline'
      className='relative flex items-center justify-center'
    >
      <Link href='/cart'>
        <LuShoppingCart />
        <span className='absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
