import React, { useState } from "react";
import {useSignup} from '../hooks/useSignup'
import { ToastContainer, toast } from 'react-toastify';

const StudentDetailsForm = () => {

  

  const {signup} =useSignup()

  const [formData, setFormData] = useState({
    // ...initial form data properties
    name: "",
    age: "",
    gmailId: "",
    registerNumber: "",
    tenthMarks: "",
    pucMarks: "",
    degreeMarks: "",
    fatherName: "",
    motherName: "",
    address: "",
    password:"",
    course:"",
    batch:"",
  });
  const [profile,setProfile] = useState(null)

  const notify = () => toast("Added successfull");

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFile = (e) =>{
    const readFile = e.target.files[0]
    setProfile(readFile)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server, validation, etc.)
    console.log("Form Data:", formData);
    signup(formData.gmailId,formData.password,formData.name,profile,formData)

    notify()

    setFormData({
      // ...initial form data properties
      name: "",
      age: "",
      gmailId: "",
      registerNumber: "",
      tenthMarks: "",
      pucMarks: "",
      degreeMarks: "",
      fatherName: "",
      motherName: "",
      address: "",
      password:"",
      course:"",
      batch:"",
    })
  };

  return (
    <div className="container mx-auto p-4 w-full">
      <h2 className="text-3xl font-semibold mb-6">Student Details</h2>
      <form className="max-w-full bg-white p-6 rounded-lg shadow-md">
        {/* Form content */}
        {/* ... */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter Student name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Age
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter Student Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Gmail ID
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student Gmail-ID"
              name="gmailId"
              value={formData.gmailId}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
             Register Number
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student Register-no"
              name="registerNumber"
              value={formData.registerNumber}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              10th Marks
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student 10th marks"
              name="tenthMarks"
              value={formData.tenthMarks}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              PucMarks
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student 12th marks"
              name="pucMarks"
              value={formData.pucMarks}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              DegreeMarks
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student Degree marks"
              name="degreeMarks"
              value={formData.degreeMarks}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              FatherName
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student fathername"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            > 
              MotherName
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student mothername"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Address
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Password
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Student Profile Pic
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="file"
              placeholder="Enter student password"
              name="profile"
              onChange={handleFile}
              // value={formData.password}
              // onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Course
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student 12th marks"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Batch
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter student 12th marks"
              name="batch"
              value={formData.batch}
              onChange={handleInputChange}
            />
          </div>

          

          {/* Add more input fields with borders */}
        </div>
        <div className="flex items-center justify-center mt-6">
          <button onClick={handleSubmit} className="button border p-2 px-12" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
