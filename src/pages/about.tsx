import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <p className="font-bold text-xl">About</p>
      <Link to="/" className="text-sky-600 hover:underline">
        Home
      </Link>
    </>
  );
}
