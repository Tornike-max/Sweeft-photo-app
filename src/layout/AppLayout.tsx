import { Outlet } from "react-router-dom";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center flex-col gap-2">
          <Navbar />
          <Search />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
