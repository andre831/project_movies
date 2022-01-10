import { Link } from 'react-router-dom';
import './style.min.css'

function Logo() {
  return (
    <Link className='logo' href="/">Play<span>Me</span></Link>           
  );
}

export default Logo;