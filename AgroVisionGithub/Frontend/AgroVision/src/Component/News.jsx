import React, { useEffect, useState } from "react";

function News() {
  const [data, setData] = useState([]);

  const result = async () => {
    let response = await fetch(
      `https://api.mediastack.com/v1/news?access_key=b5a144bf02185c7a69f1ad41deba3e7d&keywords=agriculture&countries=in`
    );
    response = await response.json();
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    result();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Latest Agriculture News</h1>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {item.image && (
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="News Thumbnail"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="text-muted">Source: {item.source}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
