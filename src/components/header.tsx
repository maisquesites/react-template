import { Link } from "react-router-dom";
import mqsLogo from "../assets/maisquesites.png";
import { routes } from "../routes";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between sticky top-0 bg-white">
      <h1>
        <Link to={routes.home.href}>
          <img src={mqsLogo} alt="Mais que Sites" width={100} />
        </Link>
      </h1>
      <nav className="flex gap-4">
        {Object.values(routes).map(route => (
          <Link
            key={route.href}
            to={route.href}
            className="font-bold hover:underline"
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
