import style from '../styles/Navbar.module.css'
import Icon from './Elements/Icon';

import logo from '../assets/logo2.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

      <div className={style.navbar}>
        
        <a href="/"> <img src={logo} className={style.img} /> </a>
        <input className={style.inputSearch} type="search" placeholder="Search" />

        <div>
          {/* <button className={style.btn} type="button"  >
            <Icon name="close" /> 
          </button> */}

          <button className={style.btn} type="button" onClick={() => navigate('/Login')} >
            <Icon name="person" /> 
          </button>
        </div>

      </div>
    </>
  );  
}