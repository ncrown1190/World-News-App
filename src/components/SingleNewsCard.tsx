import { News } from "../models/Interface";
import "./SingleNewsCard.css";

interface Props {
  singleNewsCard: News;
}

export default function SingleNewsCard({ singleNewsCard }: Props) {
  return (
    <div className="col-4">
      <div className="card">
        {/* <h2>Top Headlines....</h2> */}
        <img
          src={singleNewsCard.urlToImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{singleNewsCard.title}</h5>
          <p className="card-text">{singleNewsCard.description}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={singleNewsCard.url}
            className="btn btn-primary"
          >
            More Detail...
          </a>
        </div>
      </div>
    </div>
  );
}
