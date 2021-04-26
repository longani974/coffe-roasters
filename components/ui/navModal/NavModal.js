import LinkNav from '../linkNav/LinkNav';
import styles from './NavModal.module.css';

function NavModal(props) {
  const { burgerIsActive, toggleBurgerIsActive } = props;

  return (
    <div
      onClick={toggleBurgerIsActive}
      className={styles.navModal}
      style={{ '--modalPosition': `${burgerIsActive ? '0vw' : '-80vw'}` }}
    >
      <LinkNav />
    </div>
  );
}

export default NavModal;
