import { useEffect, useState } from "react";
import { News } from "../models/Interface";
import { fetchINDNews } from "../servises/USNewsApiService";
import "./FetchNews.css";
import SingleNewsCard from "./SingleNewsCard";

export default function FetchIndiaNews() {
  const [usNews, setUsNews] = useState<News[]>([]);

  useEffect(() => {
    fetchINDNews().then((res: any) => {
      console.log(res);
      setUsNews(res.articles);
    });
  }, []);

  //   const fetchUsNews = (e: any): void => {
  //     fetchUSNews().then((data) => setUsNews(data.articles));
  //   };
  //   const fetchIndNews = (e: any): void => {
  //     fetchINDNews().then((res) => setUsNews(res.articles));
  //   };
  //   const fetchdNewsByPub = (e: any): void => {
  //     getNewsByPub().then((res) => setNews(res.sources));
  //   };

  return (
    <>
      <div className="newscontainer">
        <div className="row">
          {usNews.map((value, index) => (
            <SingleNewsCard key={index} singleNewsCard={value} />
          ))}
        </div>
      </div>
    </>
  );
}
