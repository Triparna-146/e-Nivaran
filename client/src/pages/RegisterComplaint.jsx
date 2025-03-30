import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";
import Header from "../components/Header";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Mobile Number is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  address: Yup.string().required("Address is required"),
  department: Yup.string().required("Please select a department"),
  category: Yup.string().required("Please select a category"),
  subject: Yup.string().required("Subject is required"),
  description: Yup.string().min(10, "Description must be at least 10 characters").required("Description is required"),
  location: Yup.string().required("Location is required"),
  file: Yup.mixed().test("fileSize", "File is too large (Max: 2MB)", (value) => {
    return !value || (value && value[0]?.size <= 2 * 1024 * 1024);
  }),
  declaration: Yup.boolean().oneOf([true], "You must accept the declaration"),
});

const RegisterComplaint = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
    const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    console.log("CLOUDINARY_URL", CLOUDINARY_URL);
    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      setFileUrl(response.data.secure_url);
      alert("File uploaded successfully!");
      console.log("fileUrl", response.data.secure_url);
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      alert("Failed to upload file.");
    } finally {
      setUploading(false);
    }
  };


  const onSubmit = (data) => {
    const finalData = { ...data, fileUrl: fileUrl || "" }; // If no file, set fileUrl to ""
    console.log("Complaint Data Submitted:", finalData);
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Personal Information */}
            <h3 className="text-xl font-semibold text-gray-600">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="text-md font-semibold text-gray-700">Full Name *</label>
                <input type="text" {...register("fullName")} placeholder="Enter your full name" className="input-field"/>
                <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
              </div>
              <div>
                <label htmlFor="mobileNumber" className="text-md font-semibold text-gray-700">Mobile Number *</label>
                <input type="tel" {...register("mobileNumber")} placeholder="Enter your mobile number" className="input-field " />
                <p className="text-red-500 text-sm">{errors.mobileNumber?.message}</p>
              </div>
              <div>
                <label htmlFor="email" className="text-md font-semibold text-gray-700">Email *</label>
                <input type="email" {...register("email")} placeholder="Enter your email address" className="input-field " />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>
            </div>
            <div>
              <label htmlFor="address" className="text-md font-semibold text-gray-700">Address *</label>
              <textarea {...register("address")} placeholder="Enter your address" className="input-field w-full h-20 resize-none"></textarea>
              <p className="text-red-500 text-sm">{errors.address?.message}</p>
            </div>

            {/* Complaint Details */}
            <h3 className="text-xl font-semibold text-gray-600">Complaint Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="text-md font-semibold text-gray-700">Department *</label>
                <select {...register("department")} className="input-field ">
                  <option value="">Select Department</option>
                  <option value="electricity">Electricity</option>
                  <option value="water">Water Supply</option>
                  <option value="sanitation">Sanitation</option>
                </select>
                <p className="text-red-500 text-sm">{errors.department?.message}</p>
              </div>
              <div>
                <label htmlFor="category" className="text-md font-semibold text-gray-700">Category *</label>
                <select {...register("category")} className="input-field ">
                  <option value="">Select Category *</option>
                  <option value="power_cut">Power Cut</option>
                  <option value="leakage">Water Leakage</option>
                  <option value="garbage">Garbage Issue</option>
                </select>
                <p className="text-red-500 text-sm">{errors.category?.message}</p>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-md font-semibold text-gray-700">Subject *</label>
              <input type="text" {...register("subject")} placeholder="Breif subject of your complaint" className="input-field " />
              <p className="text-red-500 text-sm">{errors.subject?.message}</p>
            </div>
            <div>
              <label htmlFor="description" className="text-md font-semibold text-gray-700">Complaint Description *</label>
              <textarea {...register("description")} placeholder="Detailed description of your complaint" className="input-field w-full h-32 resize-none "></textarea>
              <p className="text-red-500 text-sm">{errors.description?.message}</p>
            </div>
            <div className="mb-5">
              <label htmlFor="location" className="text-md font-semibold text-gray-700">Complaint location *</label>
              <input type="text" {...register("location")} placeholder="Enter location related to the complaint" className="input-field" />
              <p className="text-red-500 text-sm">{errors.location?.message}</p>
            </div>

            {/* File Upload */}
            <h3 className="text-xl font-semibold text-gray-600">Upload Supporting Documents (Optional)</h3>
            <label className="border-dashed border-2 border-gray-300 p-4 rounded-lg flex flex-col items-center cursor-pointer">
              <FaCloudUploadAlt className="text-gray-500 text-3xl" />
              <p className="text-gray-500 mt-2">
                {uploading ? "Uploading..." : fileUrl ? "File Uploaded!" : "Drag and drop or click to upload"}
              </p>
              <input type="file" className="hidden" accept=".jpg,.png,.pdf" onChange={handleFileUpload} />
            </label>
            {fileUrl && <p className="text-green-600 text-sm">File uploaded successfully! ✅</p>}

             {/* Terms & Updates */}
             <div className="mt-4">
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("declaration")} />
                <span>I hereby declare that the information provided is true and correct to the best of my knowledge. *</span>
              </label>
              <p className="text-red-500 text-sm">{errors.declaration?.message}</p>

              <label className="flex items-start gap-2 text-sm mt-2">
                <input type="checkbox" {...register("updates")} />
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
