//

import { Route, Routes } from "react-router-dom";
import FetchIndiaNews from "./FetchIndiaNews";
import FetchNews from "./FetchNews";
import FetchNewsByPublication from "./FetchNewsByPublication";
import FetchUsGNews from "./FetchUsGNews";

export default function NavPage() {
  return (
    <div>
      <Routes>
        <Route path="/usGnews" element={<FetchUsGNews />} />
        <Route path="/us" element={<FetchNews />} />
        <Route path="/in" element={<FetchIndiaNews />} />
        <Route path="/publication" element={<FetchNewsByPublication />} />
      </Routes>
    </div>
  );
}
