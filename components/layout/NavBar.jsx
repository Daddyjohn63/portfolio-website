import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul className="flex gap-6 capitalize">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
