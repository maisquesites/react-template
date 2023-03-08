import { Link, useRouteError } from "react-router-dom";
import { routes } from "../routes";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-1 p-4">
      <h2 className="font-bold text-2xl">{error.status}</h2>
      <p className="text-xl">{error.statusText ?? error.message}</p>
      <Link
        to={routes.home.href}
        className="text-sky-600 font-bold hover:underline mt-4"
      >
        {routes.home.label}
      </Link>
    </div>
  );
}
