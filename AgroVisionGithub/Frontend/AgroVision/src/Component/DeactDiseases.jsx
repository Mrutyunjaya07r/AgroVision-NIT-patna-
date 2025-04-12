import React, { useState, useEffect } from "react";

const DeactDiseases = () => {
  const [formData, setFormData] = useState({
    image: "",
    application_used_image_gallery: "false",
    crop: "",
    latitude: "",
    longitude: "",
    application_id: "",
    application_end_user_id: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("disease");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem("plantixFormData", JSON.stringify(updatedData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      image: formData.image,
      application_used_image_gallery: false,
      crop: formData.crop,
      latitude: formData.latitude,
      longitude: formData.longitude,
      application_id: formData.application_id,
      application_end_user_id: formData.application_end_user_id,
    };

    try {
       
     alert('healty crop')
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Diseases Deaction</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}:</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DeactDiseases;
