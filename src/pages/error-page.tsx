import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-1 p-4">
      <h2 className="font-bold text-2xl">{error.status}</h2>
      <p className="text-xl">{error.statusText ?? error.message}</p>
      <Link to="/" className="text-sky-600 hover:underline mt-4">
        Home
      </Link>
    </div>
  );
}
