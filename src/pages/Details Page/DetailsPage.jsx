import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./DetailsPage.styles.css";

import { Rate } from "antd";

const DetailsPage = () => {
  const { id } = useParams();

  const image_path = "https://image.tmdb.org/t/p/w500";

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [id]);

  const date = new Date(data.release_date);

  return (
    <div className="details-page">
      <div className="details-container">
        <div
          className="poster-container"
          style={{
            backgroundImage: `url(${image_path}${data.poster_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="info-container">
          <div className="title-rating">
            <div>
              {data.title} ({date.getFullYear()})
            </div>
            {/* <div>{data.vote_average}/10</div> */}
            <div>
              <Rate
                allowHalf
                disabled
                value={data.vote_average / 2}
                style={{ fontSize: "1rem", minWidth: "130px" }}
              />
            </div>
          </div>
          <div style={{ fontStyle: "italic", fontSize: "1.5rem" }}>
            {data.tagline}
          </div>
          <div
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
              textAlign: "justify",
              padding: "0 8px",
            }}
          >
            {data.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
