import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import AppLayout from "./layout/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
