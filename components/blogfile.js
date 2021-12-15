import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav p-3 border bottom">
      <Link href="/" passHref>
        <h2 className="pointed">News Today</h2>
      </Link>

      <Link href="/blog" passHref>
        <h2 className="m-3 ms-6 pointed lead my-auto">Biography</h2>
      </Link>
    </nav>
  );
};
export default Nav;
