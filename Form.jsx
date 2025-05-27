import React, { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/enquiries", formData);
      alert("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>College Admission Enquiry</h2>
      <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} /><br />
      <input type="tel" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} /><br />
      <input type="text" name="course" placeholder="Course Interested" required value={formData.course} onChange={handleChange} /><br />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
