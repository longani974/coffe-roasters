import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

function Navigation() {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <Image
          layout="responsive"
          src="/images/logo.svg"
          width={163}
          height={18}
        />
      </div>
    </Link>
  );
}

export default Navigation;
