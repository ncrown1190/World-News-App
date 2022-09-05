import { useEffect, useState } from "react";
import { fetchGIndNews } from "../servises/USNewsApiService";
import GnewsSingleCard from "./GnewsSingleCard";

export default function FetchUsGNews() {
  const [gnews, setGnews] = useState([]);

  useEffect(() => {
    fetchGIndNews().then((res: any) => {
      console.log(res);
      setGnews(res.articles);
    });
  }, []);

  return (
    <div>
      <div className="newscontainer">
        <div className="row">
          {/* <h2>Top Headlines....</h2> */}
          {gnews.map((value, index) => (
            <GnewsSingleCard key={index} singleGNewsCard={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
