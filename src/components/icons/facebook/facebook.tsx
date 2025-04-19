import FaceBook from './facebook-edit.svg';
import FaceBookLight from './facebook-light.svg';

export default function Facebook() {
  return (
    <>
      <img src={FaceBookLight} alt='logo facebook light theme' className='hidden dark:block' />
      <img src={FaceBook} alt='logo facebook dark theme' className='block dark:hidden' />
    </>
  );
}
