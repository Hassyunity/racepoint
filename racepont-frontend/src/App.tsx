import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Profil from "./components/pages/pilotes/Profil";
import DriverDetail from "./components/pages/pilotes/DriverDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/pilotes" element={<Profil />} />
        <Route path="/pilotes/:id" element={<DriverDetail />} />
      </Routes>
    </>
  );
}

export default App;
