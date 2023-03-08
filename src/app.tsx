import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2 p-4">
      <Outlet />
    </div>
  );
}
