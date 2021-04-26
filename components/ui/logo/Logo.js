import Image from 'next/image';
import styles from './Logo.module.css';

function Navigation() {
  return (
    <div className={styles.logo}>
      <Image
        layout="responsive"
        src="/images/logo.svg"
        width={163}
        height={18}
      />
    </div>
  );
}

export default Navigation;
