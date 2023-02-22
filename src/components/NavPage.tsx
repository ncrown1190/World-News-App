//

import { Route, Routes } from "react-router-dom";
import FetchIndGNews from "./FetchIndGNews";
import FetchIndiaNews from "./FetchIndiaNews";
import FetchNews from "./FetchNews";
import FetchNewsByPublication from "./FetchNewsByPublication";
import FetchUsGNews from "./FetchUsGNews";

export default function NavPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FetchUsGNews />} />
        <Route path="/inGnews" element={<FetchIndGNews />} />
        <Route path="/us" element={<FetchNews />} />
        <Route path="/in" element={<FetchIndiaNews />} />
        <Route path="/publication" element={<FetchNewsByPublication />} />
      </Routes>
    </div>
  );
}
