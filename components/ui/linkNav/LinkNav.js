import Link from 'next/link';

function LinkNav() {
  return (
    <ul>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/mes-projets">
        <li>About Us</li>
      </Link>
      <Link href="/a-propos">
        <li>Create Your Plan</li>
      </Link>
    </ul>
  );
}

export default LinkNav;
