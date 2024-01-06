import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import Rootlayout from './layout/Rootlayout';
import StudentDetailsForm from './pages/StudentDetailsForm';
import AddCompany from './pages/AddCompany';
import ListStudents from './pages/ListStudents';
import Home from './pages/Home';
import CompanyList from './pages/CompanyList';
import CompnayDetails from './pages/CompanyDetails';
import StudentDetails from './pages/StudentDetails';


// layouts and pages


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="/" element={<Home />}  />
      <Route path="/student" element={<StudentDetailsForm />}  />
      <Route path="/company" element={<AddCompany />}  />
      <Route path="/Studentlist" element={<ListStudents />}  />
      <Route path="/companylist" element={<CompanyList />}  />
      <Route path="/companyDetails/:id" element={<CompnayDetails />} /> 
      <Route path="/sd/:id" element={<StudentDetails />} /> 
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
