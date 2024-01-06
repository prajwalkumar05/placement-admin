import React, { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const UserManagment = ({ id, placedStu }) => {
  const { document } = useCollection("users");
  console.log(document);

  console.log(document);

  const [students, setStudents] = useState(null);
  const [newStudentsInput, setNewStudentsInput] = useState("");
  const [topperStudents, setTopperStudents] = useState([]);
  const [topper, setTopper] = useState(null);

  console.log(topperStudents);

  const handleAddStudents = () => {
    const newStudents = newStudentsInput
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .map((line) => {
        const [name, marks] = line.split(",");
        return {
          id: Date.now(),
          name: name.trim(),
          marks: parseInt(marks.trim()),
        };
      });

    if (newStudents.length > 0) {
      setStudents((prevStudents) => [...prevStudents, ...newStudents]);
      setNewStudentsInput("");
    }
  };

  const handleSelectTopper = (student) => {
    setTopper(student);
  };

  const handleAddTopper = () => {
    if (topper) {
      setTopperStudents((prevTopperStudents) => [
        ...prevTopperStudents,
        topper,
      ]);
      setTopper(null);
    }
  };

  const handleRemoveStudent = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );
  };

  const handleRemoveTopperStudent = (studentId) => {
    setTopperStudents((prevTopperStudents) =>
      prevTopperStudents.filter((student) => student.id !== studentId)
    );
  };

  const handleSubmit = async () => {
    const noteRef = doc(db, "companys", id);
    await updateDoc(noteRef, {
      placedStu: [...placedStu, ...topperStudents],
    });
  };

  return (
    <div className="max-w mx-28 mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">College Management</h2>

      <h3 className="text-xl font-bold mt-4 mb-2">All Students</h3>
      <ul>
        {document &&
          document.map((student) => (
            <li
              key={student.id}
              className="flex justify-between p-3 bg-gray-100 rounded mb-2"
            >
              <span>
                {student.registerNumber}{" "}
                <span className="mx-8 font-medium">{student.name}</span>
              </span>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleSelectTopper(student)}
                  className={`${
                    topper && topper.id === student.id
                      ? "bg-green-500"
                      : "bg-gray-500"
                  } text-white px-4 py-1 rounded focus:outline-none`}
                >
                  Placed
                </button>
              </div>
            </li>
          ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Placed Students</h3>
        {topper ? (
          <>
            <p>{topper.name} is placed for this company</p>
            <button
              onClick={handleAddTopper}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none"
            >
              Add
            </button>
          </>
        ) : (
          <p>No one Selected</p>
        )}
      </div>

      <h3 className="text-xl font-bold mt-4 mb-2">Placed Students</h3>
      <ul>
        {topperStudents.map((topperStudent) => (
          <li
            key={topperStudent.id}
            className="flex justify-between p-3 bg-green-100 rounded mb-2"
          >
            <span>{topperStudent.name}</span>
            <button
              onClick={() => handleRemoveTopperStudent(topperStudent.id)}
              className="bg-red-500 text-white px-4 py-1 rounded focus:outline-none"
            >
              Remove
            </button>
          </li>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-1 mb-8 rounded focus:outline-none"
        >
          Add Placed Students
        </button>


        
        <h2 className="text-2xl font-bold mb-4">Placed Students</h2>

        {placedStu &&
          placedStu.map((item, i) => {
            return (
              <li
                key={item.id}
                className="flex justify-between p-3 bg-green-100 rounded mb-2"
              >
                <span>{item.name}</span>
                
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UserManagment;
