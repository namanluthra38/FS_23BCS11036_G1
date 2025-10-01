import React, { useState } from "react";

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current form data to submissions
    setSubmissions([...submissions, formData]);
    // Reset form
    setFormData({name: "", email: "", course: ""});
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-12 ">
      <form onSubmit={handleSubmit} className="mb-8 bg-white rounded-xl shadow p-6 border border-red-100">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-red-700">Course Registration</h2>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-red-300 rounded-lg px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-red-300 rounded-lg px-4 py-2 bg-white transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="course" className="block mb-2 font-semibold text-gray-700">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            className="w-full border border-red-300 rounded-lg px-4 py-2 "
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-2 rounded-full shadow-lg font-bold text-lg "
          >
            Submit
          </button>
        </div>
      </form>

      {submissions.length > 0 && (
        <div className="overflow-auto mt-8">
          <table className="min-w-full bg-white shadow rounded-xl border border-red-100">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Course</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="border-b bg-gray-100">
                  <td className="py-2 px-4">{submission.name}</td>
                  <td className="py-2 px-4">{submission.email}</td>
                  <td className="py-2 px-4">{submission.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
