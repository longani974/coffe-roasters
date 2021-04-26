import Image from 'next/image';
import { useState } from 'react';
import Burger from '../ui/burger/Burger';
import Logo from '../ui/logo/Logo';
import NavBar from '../ui/navBar/NavBar';
import NavModal from '../ui/navModal/NavModal';
import styles from './Navigation.module.css';

function Navigation() {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  function toggleBurgerIsActive() {
    setBurgerIsActive((prevState) => !prevState);
  }
  return (
    <nav className={styles.nav}>
      <Logo />
      <div></div>
      <NavBar />
      <Burger
        burgerIsActive={burgerIsActive}
        toggleBurgerIsActive={toggleBurgerIsActive}
      />
      <NavModal
        burgerIsActive={burgerIsActive}
        toggleBurgerIsActive={toggleBurgerIsActive}
      />
    </nav>
  );
}

export default Navigation;
