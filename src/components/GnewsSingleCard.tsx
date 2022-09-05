import { GNews } from "../models/UsGnews";
import "./SingleNewsCard.css";

interface Props {
  singleGNewsCard: GNews;
}

export default function SingleNewsCard({ singleGNewsCard }: Props) {
  return (
    <div className="col-4">
      <div className="card">
        {/* <h2>Top Headlines....</h2> */}
        <img src={singleGNewsCard.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>{singleGNewsCard.publishedAt}</h4>
          <h5 className="card-title">{singleGNewsCard.title}</h5>
          <p className="card-text">{singleGNewsCard.description}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={singleGNewsCard.url}
            className="btn btn-primary"
          >
            More Detail...
          </a>
        </div>
      </div>
    </div>
  );
}
