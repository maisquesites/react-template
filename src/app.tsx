import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
        <Outlet />
      </div>
    </div>
  );
}
