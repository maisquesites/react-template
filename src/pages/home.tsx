import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p className="font-bold text-xl">Home</p>
      <Link to="/about" className="text-sky-600 hover:underline">
        About
      </Link>
    </>
  );
}
