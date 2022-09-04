import { useState } from "react";
import { NewsPub } from "../models/NewsPub";
import "./NewsCard.css";

interface Props {
  NewsCard: NewsPub;
}

export default function NewsCard({ NewsCard }: Props) {
  return (
    <div className="col-4">
      <div className="card">
        <h2>{NewsCard.name}</h2>
        <h3>Country: {NewsCard.country.toUpperCase()}</h3>
        <div className="card-body">
          <h5 className="card-title">
            Language: {NewsCard.language.toUpperCase()}
          </h5>
          <p className="card-text">{NewsCard.description}</p>
          <a target="_blank" href={NewsCard.url} className="btn btn-primary">
            More Detail...
          </a>
        </div>
      </div>
    </div>
  );
}
