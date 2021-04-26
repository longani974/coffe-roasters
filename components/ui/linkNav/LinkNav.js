import Link from 'next/link';

function LinkNav() {
  return (
    <ul>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/about-us">
        <li>About Us</li>
      </Link>
      <Link href="/subscribe">
        <li>Create Your Plan</li>
      </Link>
    </ul>
  );
}

export default LinkNav;
