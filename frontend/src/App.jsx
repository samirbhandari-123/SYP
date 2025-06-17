import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from './pages/AdminDashboard'; // Correct import without .jsx
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from './utils/RoleBaseRoutes';
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartmentList from "./components/dashboard/department/DepartmentList";
import AddDepartment from "./components/dashboard/department/AddDepartment";
import EditDepartment from "./components/dashboard/department/EditDepartment";
import List from "./components/dashboard/employee/List";
import Add from "./components/dashboard/employee/Add";
import View from "./components/dashboard/employee/View";
import Edit from "./components/dashboard/employee/Edit";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin"]}>
            <AdminDashboard />
                </RoleBaseRoutes>
             </PrivateRoutes>

          }>
            <Route index element={<AdminSummary />}></Route>

            <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route>
            <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
            <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>


            <Route path="/admin-dashboard/employees" element={<List />}></Route>
            <Route path="/admin-dashboard/add-employee" element={<Add />}></Route>
            <Route path="/admin-dashboard/employees/:id" element={<View />}></Route>
            <Route path="/admin-dashboard/employees/edit/:id" element={<Edit />}></Route>




          </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
      
      </Routes>
    </BrowserRouter>   
  );
}

export default App;



