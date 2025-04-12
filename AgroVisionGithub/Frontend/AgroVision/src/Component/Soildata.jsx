import React, { useEffect, useState } from "react";
import soilCrops from "./soilCrops"; // Import soil-crop mapping

function Soildata() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchSoilData = async () => {
      let result = await fetch(
        `https://api.openepi.io/soil/type?lon=${localStorage.getItem(
          "lon"
        )}&lat=${localStorage.getItem("lat")}`
      );
      result = await result.json();
      console.log(result);
      setData(result);
    };

    fetchSoilData();
  }, []);

  const soilType = data?.properties?.most_probable_soil_type;
  const crops = soilType ? soilCrops[soilType] || [] : [];

  return (
    <div className="container my-4">
      <div className="text-center">
        <h1 className="mb-3">Soil Type</h1>
        {soilType ? (
          <span className="badge bg-success fs-4">{soilType}</span>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>

      <h2 className="mt-4">Suitable Crops:</h2>
      <div className="row mt-3">
        {crops.length > 0 ? (
          crops.map((crop, index) => (
            <div className="col-md-4 col-lg-3 mb-3" key={index}>
              <div className="card shadow-sm text-center">
                <img
                  src={crop.image}
                  className="card-img-top"
                  alt={crop.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{crop.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger">No crop recommendations available</p>
        )}
      </div>
    </div>
  );
}

export default Soildata;
