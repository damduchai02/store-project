import Logo from './Logo';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import CartButton from './CartButton';
import NavSearch from './NavSearch';
import Container from '../global/Container';
import { Suspense } from 'react';

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between'>
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className='flex items-center gap-4'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
