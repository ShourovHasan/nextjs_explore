import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link href="/about">
          <h2>Go to About Page</h2>
      </Link>
      <Link href="/profile">
        <h2>Go to profile Page</h2>
      </Link>
    </div>
  );
};
export default Home;
