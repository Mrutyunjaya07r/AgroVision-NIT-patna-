import React, { useEffect, useState } from 'react';

function Weather() {
    const [data, setData] = useState({});
    const [rain, setRain] = useState([]);

    const weatherdata = async () => {
        let result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("Address")}&appid=edde7fec2090b109f39ea3975daa74fc&units=metric`
        );
        result = await result.json();
        setData(result.main);
    };

    const rainPrediction = async () => {
        let result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${localStorage.getItem("lat")}&longitude=${localStorage.getItem("lon")}&hourly=precipitation_probability`);
        result = await result.json();
        setRain(result.hourly.precipitation_probability.slice(0, 24)); // Get only the first 24 hours
    };

    useEffect(() => {
        weatherdata();
        rainPrediction();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center text-black mb-4">Weather in {localStorage.getItem("Address") || "Bhubaneswar"}</h1>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <div className="card shadow text-center bg-primary text-white">
                        <div className="card-body">
                            <h5 className="card-title">🌡 Temperature</h5>
                            <p className="card-text fs-4">{data.temp}°C</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow text-center bg-danger text-white">
                        <div className="card-body">
                            <h5 className="card-title">📈 Max Temp</h5>
                            <p className="card-text fs-4">{data.temp_max}°C</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow text-center bg-info text-white">
                        <div className="card-body">
                            <h5 className="card-title">📉 Min Temp</h5>
                            <p className="card-text fs-4">{data.temp_min}°C</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow text-center bg-success text-white">
                        <div className="card-body">
                            <h5 className="card-title">💧 Humidity</h5>
                            <p className="card-text fs-4">{data.humidity}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-center mt-4">🌧 24-Hour Rain Prediction</h2>
            <div className="row mt-3">
                {rain.length > 0 ? rain.map((probability, index) => (
                    <div key={index} className="col-md-2 mb-3">
                        <div className="card shadow text-center">
                            <div className="card-body">
                                <h5 className="card-title">Hour {index + 1}</h5>
                                <p className="card-text fs-5">{probability}%</p>
                            </div>
                        </div>
                    </div>
                )) : <p className="text-center">Loading rain predictions...</p>}
            </div>
        </div>
    );
}

export default Weather;