import { Routes, Route } from "react-router";

import FetchGames from "../components/FetchGame/FetchGame";
import FetchBosses from "../components/FetchBosses/FetchBosses";
import FetchCharacters from "../components/FetchCharacters/FetchCharacters";
import FetchMonster from "../components/FetchMonster/FetchMonster";
import FetchDungeons from "../components/FetchDungeons/FetchDungeons";
import FetchItems from "../components/FetchItems/FetchItems";
import FetchPlaces from "../components/FetchPlaces/FetchPlaces";
import Connect from "../components/Connect/Connect";
import Home from "../pages/Home";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";



export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/games" element={<FetchGames />} />
      <Route path="/bosses" element={<FetchBosses />} />
      <Route path="/characters" element={<FetchCharacters />} />
      <Route path="/monsters" element={<FetchMonster />} />
      <Route path="/dungeons" element={<FetchDungeons />} />
      <Route path="/items" element={<FetchItems />} />
      <Route path="/places" element={<FetchPlaces />} />
    </Routes>
  );
}