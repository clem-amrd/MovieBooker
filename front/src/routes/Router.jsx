import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./PrivateRoute";
import AuthRegister from "../pages/auth/Register";
import AuthLogin from "../pages/auth/Login";
import HomePage from "../pages/HomePage";
import Movies from "../pages/movies/Movies";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}