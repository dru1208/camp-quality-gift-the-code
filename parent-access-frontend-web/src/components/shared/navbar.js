import Link from 'next/link';

const NavBar = () => (
  <div>
    <Link href="/home">
      <a>Home</a>
    </Link>{" "}
    <Link href="/register_camp">
      <a>Register to Camp</a>
    </Link>{" "}
    <Link href="/camper_profile">
      <a>Camper Profile</a>
    </Link>{" "}
    <Link href="/health">
      <a>Health</a>
    </Link>{" "}
    <Link href="/docs">
      <a>Docs</a>
    </Link>{" "}
    <Link href="/settings">
      <a>Settings</a>
    </Link>{" "}
  </div>
);

export default NavBar;