import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TrackComplaint = () => {
  const [searchType, setSearchType] = useState("id");
  const [complaintId, setComplaintId] = useState("");
  const [complaintData, setComplaintData] = useState(null);

  const handleTrack = () => {
    if (complaintId === "COMP-2023-12345") {
      setComplaintData({
        id: "COMP-2023-12345",
        issue: "Water Supply Issue",
        department: "Water Supply",
        submittedOn: "15 Mar 2024, 10:30 AM",
        assignedTo: "Mr. Rajesh Patel, Water Department",
        status: "In Progress",
        complainant: "Amit Shah",
        contact: "+91 98765 43210",
        notification: "SMS, Email",
        description:
          "No water supply in our area for the last 3 days. The entire street is affected.",
        timeline: [
          { title: "Complaint Registered", date: "15 Mar 2024, 10:30 AM", status: "done" },
          { title: "Complaint Assigned", date: "15 Mar 2024, 11:45 AM", status: "done" },
          { title: "In Progress", date: "16 Mar 2024, 09:15 AM", status: "ongoing" },
        ],
      });
    } else {
      alert("No complaint found for the given ID.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex items-center text-sm mb-4">
          <NavLink to="/" className="text-gray-600 hover:text-gray-800 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </NavLink>
        </div>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800">Track Your Complaint</h2>
          <p className="text-gray-600 text-sm mb-6">Enter your complaint ID or mobile number to track the status.</p>

          <div className="flex border-b mb-4">
            <button className={`px-4 py-2 text-sm font-medium ${searchType === "id" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`} onClick={() => setSearchType("id")}>Track by Complaint ID</button>
            <button className={`px-4 py-2 text-sm font-medium ${searchType === "mobile" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`} onClick={() => setSearchType("mobile")}>Track by Mobile Number</button>
          </div>

          <div className="flex items-center gap-4">
            <input type="text" placeholder={searchType === "id" ? "Enter Complaint ID" : "Enter Mobile Number"} className="input-field" value={complaintId} onChange={(e) => setComplaintId(e.target.value)} />
            <button className="btn-primary" onClick={handleTrack}>Track</button>
          </div>

          {complaintData && (
            <div className="mt-6 p-6 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800">{complaintData.issue}</h3>
              <p className="text-gray-600 text-sm">Complaint ID: {complaintData.id}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <p><strong>Department:</strong> {complaintData.department}</p>
                  <p><strong>Submitted On:</strong> {complaintData.submittedOn}</p>
                  <p><strong>Assigned To:</strong> {complaintData.assignedTo}</p>
                </div>
                <div>
                  <p><strong>Complainant:</strong> {complaintData.complainant}</p>
                  <p><strong>Contact:</strong> {complaintData.contact}</p>
                  <p><strong>Notification:</strong> {complaintData.notification}</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white border rounded-lg">
                <h4 className="font-semibold text-lg">Complaint Description</h4>
                <p className="text-gray-600 text-sm">{complaintData.description}</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg">Complaint Timeline</h4>
                <div className="mt-2 border-l-2 border-gray-300 pl-4">
                  {complaintData.timeline.map((event, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center">
                        <span className={`w-4 h-4 rounded-full inline-block mr-3 ${event.status === "done" ? "bg-green-500" : "bg-blue-500"}`}></span>
                        <h5 className="font-medium">{event.title}</h5>
                      </div>
                      <p className="text-gray-500 text-sm ml-7">{event.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end mt-6 gap-4">
                <button className="btn-secondary">Provide Feedback</button>
                <button className="btn-danger">Escalate Complaint</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TrackComplaint;