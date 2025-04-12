import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Diseases() {
    let navigate=useNavigate();
    const [formData, setFormData] = useState({
        image: '',
        crop: '',
        latitude: '',
        longitude: '',
        application_id: '',
        application_end_user_id: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let result = await fetch('http://localhost:8080/desease', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            result = await result.json();
            alert('Submitted successfully!');

            // Store data in localStorage
            localStorage.setItem("disease", JSON.stringify(formData));
            navigate('/deactdiseases')

            console.log('API Response:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Diseases</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                        <div className="mb-3">
                            <label className="form-label">Image URL:</label>
                            <input type="text" name="image" className="form-control" value={formData.image} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Crop Type:</label>
                            <input type="text" name="crop" className="form-control" value={formData.crop} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Latitude:</label>
                            <input type="text" name="latitude" className="form-control" value={formData.latitude} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Longitude:</label>
                            <input type="text" name="longitude" className="form-control" value={formData.longitude} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Application ID:</label>
                            <input type="text" name="application_id" className="form-control" value={formData.application_id} onChange={handleChange} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Application User ID:</label>
                            <input type="text" name="application_end_user_id" className="form-control" value={formData.application_end_user_id} onChange={handleChange} required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Diseases;
