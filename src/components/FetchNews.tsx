import { useEffect, useState } from "react";
import { News } from "../models/Interface";
import { fetchUSNews } from "../servises/USNewsApiService";
import "./FetchNews.css";
import SingleNewsCard from "./SingleNewsCard";

export default function FetchNews() {
  const [usNews, setUsNews] = useState<News[]>([]);

  useEffect(() => {
    fetchUSNews().then((res: any) => {
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
      {/* <div className="container">
        <div className="row">
          <div className="col-41">
            <button onClick={fetchUsNews}>Fetch US News</button>

            <button onClick={fetchIndNews}>Fetch India News</button>
            <button onClick={fetchdNewsByPub}>Fetch News By Country</button>
          </div>
        </div>
      </div> */}
      <div className="newscontainer">
        <div className="row">
          {/* <h2>Top Headlines....</h2> */}
          {usNews.map((value, index) => (
            <SingleNewsCard key={index} singleNewsCard={value} />
          ))}
        </div>
      </div>
      <div className="warning">It is Paid......</div>
      {/* <div className="newscontainerCountry">
        <div className="row">
          {news.map((value, index) => (
            <NewsCard key={index} NewsCard={value} />
          ))}
        </div>
      </div> */}
    </>
  );
}
