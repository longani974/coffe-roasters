import LinkNav from '../linkNav/LinkNav';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <LinkNav />
    </div>
  );
}

export default NavBar;
