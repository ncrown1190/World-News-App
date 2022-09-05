import { useEffect, useState } from "react";
import { NewsPub } from "../models/NewsPub";
import { getNewsByPub } from "../servises/USNewsApiService";
import "./FetchNewsByPublication.css";
import NewsCard from "./NewsCard";

export default function FetchNews() {
  const [news, setNews] = useState<NewsPub[]>([]);

  useEffect(() => {
    getNewsByPub().then((res: any) => {
      console.log(res);
      setNews(res.sources);
    });
  }, []);

  //   const fetchdNewsByPub = (e: any): void => {
  //     getNewsByPub().then((res) => setNews(res.sources));
  //   };

  return (
    <>
      <div className="newscontainerPublication">
        <div className="row">
          {news.map((value, index) => (
            <NewsCard key={index} NewsCard={value} />
          ))}
        </div>
      </div>
      <div className="warning">It is Paid......</div>
    </>
  );
}
