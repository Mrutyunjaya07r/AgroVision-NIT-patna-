import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(to right, #003366, #00509E)",
        color: "white",
        padding: "40px 0",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Weather Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <h5 className="card-title">🌦 Weather</h5>
                <p className="card-text">Get real-time weather updates.</p>
                <button className="btn btn-primary"><Link to='/weather' style={{color:"white",textDecoration:"none"}}>Check Weather</Link></button>
              </div>
            </div>
          </div>

          {/* Soil Detection Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <h5 className="card-title">🌱 Soil Detection</h5>
                <p className="card-text">Analyze soil health for better farming.</p>
                <button className="btn btn-success"><Link to='/soil' style={{color:"white",textDecoration:"none"}}>Soil Data</Link></button>
              </div>
            </div>
          </div>

          {/* Government Schemes Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <h5 className="card-title">🏛 Govt Schemes</h5>
                <p className="card-text">Explore agricultural schemes & subsidies.</p>
                <button className="btn btn-warning"><Link style={{color:"white",textDecoration:"none"}} to='/govschema'>View Schemes</Link></button>
              </div>
            </div>
          </div>

          {/* Mandi (Market Prices) Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <h5 className="card-title">📉 Mandi Prices</h5>
                <p className="card-text">Get the latest crop market prices.</p>
                <button className="btn btn-info"><Link to='/mandi' style={{color:"white",textDecoration:"none"}}>Cheack Mandi price</Link></button>
              </div>
            </div>
          </div>

          {/* Disease Detection Section */}
          <div className="col-md-12 mb-4">
            <div className="card shadow-lg border-0 rounded">
              <div className="card-body text-center">
                <h5 className="card-title">🦠 Disease Detection</h5>
                <p className="card-text">Identify plant diseases and get solutions.</p>
                <button className="btn btn-danger"><Link style={{color:"white",textDecoration:"none"}} to='/deasese'>Detect Disease</Link></button>
              </div>
            </div>
          </div>
          {/* News*/}
          <div className="col-md-12 mb-4">
            <div className="card shadow-lg border-0 rounded">  
              <div className="card-body text-center">
                <h5 className="card-title">News</h5>
                <p className="card-text">Get News upon what happen in agriculture feilds.</p>
                <button className="btn btn-primary"><Link style={{color:"white",textDecoration:"none"}} to='/news'>News</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
