import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

function FavoriteToggleButton({ productId }: { productId: string }) {
  console.log(productId);
  return (
    <Button size='icon' variant='outline' className='cursor-pointer p-2'>
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
