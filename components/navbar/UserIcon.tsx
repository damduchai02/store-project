import { LuUser2 } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <Image
        src={profileImage}
        alt='profile image'
        width={24}
        height={24}
        className='h-6 w-6 rounded-full object-cover'
      />
    );
  return <LuUser2 className='h-6 w-6 rounded-full bg-primary text-white' />;
}

export default UserIcon;
