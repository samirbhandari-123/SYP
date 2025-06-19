
// import React, { useEffect, useState } from "react";
// import { fetchDepartments } from "../../../utils/EmployeeHelper";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const Edit = () => {
//     const [employee, setEmployee] = useState({
//         name: "",
//         maritalStatus: "",
//         designation: "",
//         salary: 0,
//         department: ""

//     }); 
//     const [departments, setDepartments] = useState(null); 
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         const getDepartments = async () => {
//             try {
//                 const departmentsData = await fetchDepartments();
//                 console.log("Fetched Departments:", departmentsData);
//                 setDepartments(Array.isArray(departmentsData) ? departmentsData : []);
//             } catch (error) {
//                 console.error("Error fetching departments:", error);
//             }
//         };
//         getDepartments();
//     }, []);

//     useEffect(() => {
//         const fetchEmployee = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:5000/api/employee/add`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${localStorage.getItem("token")}`,
//                         },
//                     }
//                 );
//                 if (response.data.success) {
//                     const employee = response.data.employee
//                     setEmployee((prevData) => ({ ...prevData, name: employee.userId, maritalStatus: employee.maritalStatus,
//                         designation: employee.designation, 
//                         salary: employee.salary, 
//                         department: employee.department 
//                      }));
//                 }
//             } catch (error) {
//                 if (error.response && error.response.data && !error.response.data.success) {
//                     alert(error.response.data.error);
//                 }
//             }
//         };

//         fetchEmployee();
//     }, [id]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEmployee((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         Object.keys(employee).forEach((key) => {
//             formData.append(key, employee[key]);
//         });

//         try {
//             const response = await axios.put(
//                 `http://localhost:5000/api/employee/${id}`,
//                 employee,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 }
//             );
//             if (response.data.success) {
//                 navigate("/admin-dashboard/employees");
//             }
//         } catch (error) {
//             if (error.response && error.response.data && !error.response.data.success) {
//                 alert(error.response.data.error);
//             }
//         }
//     };

//     return (
//         <>
//             {departments.length > 0 && employee.userId ? (
//                 <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
//                     <h2 className="text-2xl font-bold mb-6">Edit Employee</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {/* Name */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={employee.userId.name}
//                                     onChange={handleChange}
//                                     placeholder="Insert Name"
//                                     className="mt-1 p-2 block w-full border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>

//                             {/* Marital Status */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Marital Status</label>
//                                 <select
//                                     name="maritalStatus"
//                                     onChange={handleChange}
//                                     value={employee.maritalStatus}
//                                     className="mt-1 p-2 block w-full border-gray-300 rounded-md"
//                                     required
//                                 >
//                                     <option value="">Select Status</option>
//                                     <option value="single">Single</option>
//                                     <option value="married">Married</option>
//                                 </select>
//                             </div>

//                             {/* Designation */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Designation</label>
//                                 <input
//                                     type="text"
//                                     name="designation"
//                                     value={employee.designation}
//                                     onChange={handleChange}
//                                     placeholder="Designation"
//                                     className="mt-1 p-2 block w-full border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>

//                             {/* Department */}
//                             <div className="col-span-2">
//                                 <label className="block text-sm font-medium text-gray-700">Department</label>
//                                 <select
//                                     name="department"
//                                     onChange={handleChange}
//                                     value={employee.department}
//                                     className="mt-1 p-2 block w-full border-gray-300 rounded-md"
//                                     required
//                                 >
//                                     <option value="">Select Department</option>
//                                     {departments.length > 0 ? (
//                                         departments.map((dep) => (
//                                             <option key={dep._id} value={dep._id}>
//                                                 {dep.dep_name}
//                                             </option>
//                                         ))
//                                     ) : (
//                                         <option value="">No Departments Available</option>
//                                     )}
//                                 </select>
//                             </div>

//                             {/* Salary */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Salary</label>
//                                 <input
//                                     type="number"
//                                     name="salary"
//                                     onChange={handleChange}
//                                     value={employee.salary}
//                                     placeholder="Salary"
//                                     className="mt-1 p-2 block w-full border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
//                         >
//                             Edit Employee
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <div>Loading ....</div>
//             )}
//         </>
//     );
// };

// export default Edit;


import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../../utils/EmployeeHelper";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [employee, setEmployee] = useState({
        name: "",
        maritalStatus: "",
        designation: "",
        salary: 0,
        department: ""
    });

    const [departments, setDepartments] = useState([]); // Fix 1: Initialize as an empty array
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getDepartments = async () => {
            try {
                const departmentsData = await fetchDepartments();
                console.log("Fetched Departments:", departmentsData);
                setDepartments(Array.isArray(departmentsData) ? departmentsData : []);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };
        getDepartments();
    }, []);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/employee/${id}`, // Fix 2: Correct API endpoint
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                if (response.data.success) {
                    const employeeData = response.data.employee;
                    setEmployee({
                        name: employeeData.name, // Fix 3: Use employee.name instead of employee.userId.name
                        maritalStatus: employeeData.maritalStatus,
                        designation: employeeData.designation,
                        salary: employeeData.salary,
                        department: employeeData.department,
                    });
                }
            } catch (error) {
                console.error("Error fetching employee:", error);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:5000/api/employee/${id}`,
                employee, // Fix 4: No need to use FormData here unless uploading files
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (response.data.success) {
                navigate("/admin-dashboard/employees");
            }
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    return (
        <>
            {departments.length > 0 ? ( // Fix 1: departments is now always an array
                <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Edit Employee</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={employee.name} // Fix 3
                                    onChange={handleChange}
                                    placeholder="Insert Name"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Marital Status */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                                <select
                                    name="maritalStatus"
                                    onChange={handleChange}
                                    value={employee.maritalStatus}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </select>
                            </div>

                            {/* Designation */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={employee.designation}
                                    onChange={handleChange}
                                    placeholder="Designation"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            {/* Department */}
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Department</label>
                                <select
                                    name="department"
                                    onChange={handleChange}
                                    value={employee.department}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                                    required
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dep) => (
                                        <option key={dep._id} value={dep._id}>
                                            {dep.dep_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Salary */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Salary</label>
                                <input
                                    type="number"
                                    name="salary"
                                    onChange={handleChange}
                                    value={employee.salary}
                                    placeholder="Salary"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Edit Employee
                        </button>
                    </form>
                </div>
            ) : (
                <div>Loading ....</div>
            )}
        </>
    );
};

export default Edit;

