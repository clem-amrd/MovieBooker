import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();
  console.log(user);
  if (!user?.access_token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}