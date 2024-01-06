import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

    const notify = () => toast("Wow so easy!");

  return (
   
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Placement Portal Admin</h1>

        <p className="text-gray-600 mb-6">
          Manage student placements, company interactions, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-500 p-4 text-white rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Total Students</h2>
            <p className="text-2xl">2000</p>
          </div>

          <div className="bg-green-500 p-4 text-white rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Total Companies</h2>
            <p className="text-2xl">50</p>
          </div>

          <div className="bg-yellow-500 p-4 text-white rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Placements This Year</h2>
            <p className="text-2xl">120</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-600">
          A placement is a period of work experience which is an integrated and assessed part of a student's degree, so they're different to an internship, which is extra-curricular. Placements require students to apply their learning from the course in the workplace and apply learning from the workplace in the course.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home