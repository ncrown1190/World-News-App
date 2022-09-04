//

import { Route, Routes } from "react-router-dom";
import FetchIndiaNews from "./FetchIndiaNews";
import FetchNews from "./FetchNews";
import FetchNewsByPublication from "./FetchNewsByPublication";

export default function NavPage() {
  return (
    <div>
      <Routes>
        <Route path="/us" element={<FetchNews />} />
        <Route path="/in" element={<FetchIndiaNews />} />
        <Route path="/publication" element={<FetchNewsByPublication />} />
      </Routes>
    </div>
  );
}
