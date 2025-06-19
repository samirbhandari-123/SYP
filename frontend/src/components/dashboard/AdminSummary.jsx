import React from 'react'
import { FaUsers } from 'react-icons/fa'
import SummaryCard from './SummaryCard'
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { FaTimesCircle  } from "react-icons/fa";



const AdminSummary = () => {
  return (
    <div>
      
        <h3 className='text-3xl font-bold'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <SummaryCard icon={<FaUsers />} text="Total Employees" number={13} color="bg-teal-600"/>
            <SummaryCard icon={<FaBuilding />} text="Total Department" number={5}  color="bg-yellow-600"/>
            <SummaryCard icon={<FaMoneyBillWave />} text="Monthly Salary" number="$650"  color="bg-green-600"/>
        </div>
        <div className="mt-12">
        <h4 className="text-center text-3xl font-bold">Leave Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SummaryCard icon={<FaFileAlt />} text="Leave Applied" number={4} color="bg-teal-600"/>
            <SummaryCard icon={<FaCheckCircle />} text="Leave Approved" number={5}  color="bg-green-600"/>
            <SummaryCard icon={<FaHourglassHalf />} text="Leave Pending" number={4}  color="bg-yellow-600"/>
            <SummaryCard icon={<FaTimesCircle />} text="Leave Rejected" number={1} color="bg-red-600"/>
        </div>
        </div>

    </div>
  )
}

export default AdminSummary

