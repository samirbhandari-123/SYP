// import React, {useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { EmployeeButtons } from '../../../utils/EmployeeHelper'
// import DataTable from 'react-data-table-component'
// import axios from 'axios'







// const List = () => {
//     const [employees, setEmployees] = useState([])
//     const [depLoading, setEmpLoading] = useState(false)
//     useEffect(() => {
//         const fetchEmployees = async () => {
//             setEmpLoading(true)
//           try {
//             const response = await axios.get(
//               "http://localhost:5000/api/employee",
//               {
//                 headers: {
//                   Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//               }
//             );
//               if (response.data.success) {
//                 let sno = 1;
//                 const data = await response.data.employees.map((emp) => ({
//                     _id: emp.id,
//                     sno: sno++,
//                     dep_name : emp.department.dep_name,
//                     name: emp.userId.name,
//                     dob: new Date(emp.dob).toDateString(),
//                     profileImage: emp.userID.profileImage,

//                     action: (<EmployeeButtons Id={emp._id} />),      //Id={dep}
//                   }));
//                 setEmployees(data)
//               }
//           } catch(error) {
//             if(error.response && !error.response.data.success) {
//               alert(error.response.data.error)
//             }
//           } finally {
//             setEmpLoading(false)
//           }
//         };
    
//         fetchEmployees();
//         }, []);

  
//   return (
//     <div className='p-6'>
//         <div className="text-center">
//         <h3 className="text-2xl font-bold">Manage Employee</h3>
//       </div>
//       <div className="flex justify-between items-center">
//       <input
//        type="text" 
//        placeholder="Search by Emplyee ID"
//        className="px-4 py-0.5 boarder"
//        />
//      <Link 
//      to="/admin-dashboard/add-employee" 
//      className="px-4 py-1 bg-teal-600 rounded text-white"
//      >
//       Add New Employee
//      </Link>

//       </div>
//       <div>
//         <DataTable colums={columns} data={employees}/>
//       </div>
        
//     </div>
//   )
// }

// export default List


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { columns, EmployeeButtons } from "../../../utils/EmployeeHelper.jsx";
import DataTable from 'react-data-table-component';
import axios from 'axios'; // Make sure to import axios


const List = () => {
    const [employees, setEmployees] = useState([]);
    const [empLoading, setEmpLoading] = useState(false);
    

    useEffect(() => {
        const fetchEmployees = async () => {
            setEmpLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/api/employee",
                    {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log(response.data.success)

                if (response.data.success) {
                    let sno = 1;
                    const data = response.data.employees.map((emp) => ({
                        _id: emp.id,
                        sno: sno++,
                        dep_name: emp.department.dep_name,
                        name: emp.userId.name,
                        dob: new Date(emp.dob).toLocalDateString(),
                        profileImage: <img width={40} className='rounded-fully' src={`http://localhost:5000/${emp.userId.profileImage}`} />,
                        action: (<EmployeeButtons Id={emp._id} />),
                    }));
                    setEmployees(data);
                    
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error);
                }
            } finally {
                setEmpLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    // Define the columns for the DataTable
    const columns = [
        {
            name: 'S.No',
            selector: 'sno',
            sortable: true,
        },
        {
            name: 'Department',
            selector: 'dep_name',
            sortable: true,
        },
        {
            name: 'Employee Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Date of Birth',
            selector: 'dob',
            sortable: true,
        },
        {
            name: 'Profile Image',
            selector: 'profileImage',
            cell: row => <img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px' }} />,
        },
        {
            name: 'Actions',
            selector: 'action',
            cell: row => row.action,
        },
    ];

    return (
        <div className='p-6'>
            <div className="text-center">
                <h3 className="text-2xl font-bold">Manage Employee</h3>
            </div>
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search by Employee ID"
                    className="px-4 py-0.5 border"
                   
                />
                <Link 
                    to="/admin-dashboard/add-employee" 
                    className="px-4 py-1 bg-teal-600 rounded text-white"
                >
                    Add New Employee
                </Link>
            </div>
            <div>
                <DataTable columns={columns} data={employees} pagination/>
            </div>
        </div>
    );
}

export default List;