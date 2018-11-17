import Link from "next/link";

const Home = () => (
  <div>
  <h1>Welcome!</h1>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <br />
    <Link href="/login">Log In</Link>
  </div>
)

export default Home