import logoGoogle from '../assets/icon.svg';
import logoFacebook from '../assets/logo-facebook.svg';
import logoInstagram from '../assets/logo-instagram.svg';
import logoTwitter from '../assets/logo-twitter.svg';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className='flex justify-center md:justify-between items-center h-44 px-4'>
      <img src={logo} alt="Logo" className='' />

      <div className='hidden md:flex items-center gap-4'>
        <span className='bg-white/20 p-2 rounded-full border border-white'>
          <img src={logoGoogle} alt="Google" className='w-6 h-6' />
        </span>
        <span className='bg-white/20 p-2 rounded-full border border-white'>
          <img src={logoFacebook} alt="Facebook" className='w-6 h-6' />
        </span>
        <span className='bg-white/20 p-2 rounded-full border border-white'>
          <img src={logoInstagram} alt="Instagram" className='w-6 h-6' />
        </span>
        <span className='bg-white/20 p-2 rounded-full border border-white'>
          <img src={logoTwitter} alt="Twitter" className='w-6 h-6' />
        </span>
      </div>
    </header>
  );
}
