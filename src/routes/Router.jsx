import { Routes, Route } from "react-router";

import FetchGames from "../components/FetchGame/FetchGame";
import FetchBosses from "../components/FetchBosses/FetchBosses";
import FetchCharacters from "../components/FetchCharacters/FetchCharacters";
import FetchMonster from "../components/FetchMonster/FetchMonster";
import Home from "../pages/Home";
import Connect from "../components/Connect/Connect";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
// import ProtectedRoute from "../auth/ProtectedRoute";


export default function Router() {

  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/games" element={<FetchGames />} />
      <Route path="/bosses" element={<FetchBosses />} />
      <Route path="/characters" element={<FetchCharacters />} />
      <Route path="/monsters" element={<FetchMonster />} />
    </Routes>
  );
}