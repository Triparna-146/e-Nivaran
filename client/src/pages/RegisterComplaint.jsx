import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Header from "../components/Header";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const RegisterComplaint = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    department: "",
    category: "",
    subject: "",
    description: "",
    location: "",
    file: null,
    declaration: false,
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("You must accept the declaration to submit the complaint.");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Complaint submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex items-center text-sm mb-4">
          <NavLink to="/" className="text-gray-600 hover:text-gray-800 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </NavLink>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800">Register a New Complaint</h2>
          <p className="text-gray-600 text-sm mb-6">Fill in the details below to register your complaint. Fields marked with * are required.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" placeholder="Full Name *" required className="input-field" onChange={handleChange} />
              <input type="tel" name="mobileNumber" placeholder="Mobile Number *" required className="input-field" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" className="input-field" onChange={handleChange} />
            </div>
            <textarea name="address" placeholder="Address *" required className="input-field" onChange={handleChange}></textarea>

            {/* Complaint Details */}
            <h3 className="text-lg font-semibold text-gray-700">Complaint Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="department" required className="input-field" onChange={handleChange}>
                <option value="">Select Department *</option>
                <option value="electricity">Electricity</option>
                <option value="water">Water Supply</option>
                <option value="sanitation">Sanitation</option>
              </select>
              <select name="category" required className="input-field" onChange={handleChange}>
                <option value="">Select Category *</option>
                <option value="power_cut">Power Cut</option>
                <option value="leakage">Water Leakage</option>
                <option value="garbage">Garbage Issue</option>
              </select>
            </div>
            <input type="text" name="subject" placeholder="Subject *" required className="input-field" onChange={handleChange} />
            <textarea name="description" placeholder="Complaint Description *" required className="input-field" onChange={handleChange}></textarea>
            <input type="text" name="location" placeholder="Complaint Location" className="input-field" onChange={handleChange} />

            {/* File Upload */}
            <h3 className="text-lg font-semibold text-gray-700">Supporting Documents (Optional)</h3>
            <label className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex flex-col items-center cursor-pointer">
              <FaCloudUploadAlt className="text-gray-500 text-3xl" />
              <p className="text-gray-500 mt-2">{formData.file ? formData.file.name : "Drag and drop or click to upload"}</p>
              <input type="file" name="file" className="hidden" accept=".jpg,.png,.pdf" onChange={handleChange} />
            </label>

            {/* Terms & Updates */}
            <div className="mt-4">
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" name="declaration" className="mt-1" required onChange={handleChange} />
                <span>
                  I hereby declare that the information provided is true and correct to the best of my knowledge. *
                </span>
              </label>
              <label className="flex items-start gap-2 text-sm mt-2">
                <input type="checkbox" name="updates" className="mt-1" onChange={handleChange} />
                <span>I would like to receive updates about my complaint via SMS, Email, and WhatsApp.</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button type="button" className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100">Cancel</button>
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit Complaint</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplaint;
