import React, { useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { useRef } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import { ToastContainer, toast } from 'react-toastify';



const StudentDetailsForm =  () => {
  const { addDocument, response } = useFirestore("companys");

  const [formData, setFormData] = useState({
    // ...initial form data properties
    name: "",
    role: "",
    location: "",
    companyDetails: "",
    requirements: "",
    link:"",
    date:null
  });

  const [logo,setLogo] = useState(null)

  const handleFile = (e) =>{
    const readFile = e.target.files[0]
    setLogo(readFile)
  }

  const notify = () => toast("Added successfull");

  
  

  

  

  const [newIngredient, setNewIngredient] = useState('')
  const [skillSet, setSkillSet] = useState([])
  const ingredientInput = useRef(null)



  const handleAdd = (e) => {
      e.preventDefault()
      const ing = newIngredient
      console.log(ing)

      if(ing && !skillSet.includes(ing)){
        setSkillSet(prevIngredients => [...prevIngredients, ing])
      }
      setNewIngredient('')
      ingredientInput.current.focus()
  }


  const [salary, setSalary] = useState("Option 1");
  const [employeType, setEmployeType] = useState("Option 1");
  const [backLog, setBackLog] = useState("Option 1");

  const SalaryRangeOption = ["0-5k", "5k-20k", "20k-40k","40k-70k","70k-1lpa","1lpa-4lpa","4lpa-8lpa","8lap+"];
  const employmentType = ["Internship", "Full-Time", "Internship + Full-Time"];
  const backLogOption = ["No", "Yes",];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageRef = ref(
      storage,
      `images/${logo.name}}`
    );
    await uploadBytes(imageRef, logo);
    const downloadUrl = await getDownloadURL(imageRef);

    // Handle form submission logic here (e.g., send data to server, validation, etc.)
    console.log("Form Data:", formData);
    addDocument({
      ...formData,
      skillSet,
      salary,
      employeType,
      backLog,
      downloadUrl,
      apply:false,
      usersApply:[],
      msg:[],
      placedStu:[],

    });

    notify()


    setFormData(
      {
        // ...initial form data properties
        name: "",
        role: "",
        location: "",
        companyDetails: "",
        requirements: "",
        link:"",
      }
    )
    setBackLog("")
    setEmployeType("")
    setSalary("")
    setSkillSet([])

    console.log(formData)


    
  };

  return (
    <div className="container mx-auto p-4 w-full">
      <h2 className="text-3xl font-semibold mb-6">Add company</h2>
      <form className="max-w-full bg-white p-6 rounded-lg shadow-md">
        {/* Form content */}
        {/* ... */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Company Name
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter Company Name"
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
              Logo
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3 bg-slate-00"
              id="name"
              type="file"
              placeholder="Enter your name"
              name="logo"
              // value={logo}
              onChange={handleFile}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Website Link
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3 bg-slate-00"
              id="name"
              type="text"
              placeholder="Enter Website link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
            />
          </div>

          <div className=" ">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="select"
            >
              Salary Range
            </label>
            <select
              className="border border-gray-300 rounded w-full py-2 px-3 "
              id="select"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              {SalaryRangeOption.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Role
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter Role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              location
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Enter Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-4"
              htmlFor="name"
            >
              Last Date
            </label>
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              id="name"
              type="date"
              placeholder="Enter date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="select"
            >
              Allow Backlog
            </label>
            <select
              className="border border-gray-300 rounded w-full py-2 px-3"
              id="select"
              value={backLog}
              onChange={(e) => setBackLog(e.target.value)}
            >
              {backLogOption.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 mt-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="select"
            >
              Employment type
            </label>
            <select
              className="border border-gray-300 rounded w-full py-2 px-3"
              id="select"
              value={employeType}
              onChange={(e) => setEmployeType(e.target.value)}
            >
              {employmentType.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Add more input fields with borders */}
        </div>

        <div className="w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Company Details
          </label>
          <textarea
            className="input-field border border-gray-300 rounded w-full py-2 px-3"
            id="name"
            type="text"
            placeholder="Enter Company Details"
            name="companyDetails"
            value={formData.companyDetails}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Job Description
          </label>
          <textarea
            className="input-field border border-gray-300 rounded w-full py-2 px-3"
            id="name"
            type="text"
            placeholder="Enter job Description"
            name="requirements"
            value={formData.requirements}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full">
        <label>
          <span>Skill Required:</span>
          <div className="ingredients">
            <input
              className="input-field border border-gray-300 rounded w-full py-2 px-3"
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          All Skills:{" "}
          {skillSet.map((i) => (
            <span key={i} class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-4 py-2 rounded dark:bg-blue-900 dark:text-blue-300">{i}</span>
          ))}
        </p>
        </div>

        

        <div className="flex items-center justify-center mt-6">
          <button onClick={handleSubmit} className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
