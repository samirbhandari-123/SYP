import Department from "../models/Department.js";

const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
        return res.status(200).json({success: true, departments})
    } catch(error) {
        console.log(error)
        return res.status(500).json({success: false, error: "get department server error"})
    }

}

const addDepartment = async (req, res) => {
    try {
        const {dep_name, description} = req.body;
        const newDep = new Department({
            dep_name,
            description
        })
        await newDep.save();
        console.log("Saved")
        return res.status(200).json({success: true, department: newDep})
    } catch(error) {
        console.log(`Error is ${error.error}`)
        return res.status(500).json({sucess: false, error: "add department server error"})
    }

}
const getDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const department = await Department.findById({_id: id})
        return res.status(200).json({success: true, department})
    } catch(error) {
        return res.status(500).json({success: false, error: "get department server error"})
    }

}

const updateDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const {dep_name, description} = req.body;
        const updateDep = await Department.findByIdAndUpdate({_id: id}, {
            dep_name,
            description
        })
        return res.status(200).json({success: true, updateDep})
    } catch(error) {
        return res.status(500).json({success: false, error: "edit department server error"})
    }
              
}

const deleteDepartment = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedep = await Department.findByIdAndDelete({_id: id})   
        return res.status(200).json({success: true, deletedep})
    } catch(error) {
        return res.status(500).json({success: false, error: "delete department server error"})
    }
              
}







export {addDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment}



// import Department from "../models/Department.js";

// const getDepartments = async (req, res) => {
//     try {
//         const departments = await Department.find();
//         return res.status(200).json({ success: true, departments });
//     } catch (error) {
//         console.error("Error in getDepartments:", error);
//         return res.status(500).json({ success: false, error: "get department server error" });
//     }
// };

// const addDepartment = async (req, res) => {
//     try {
//         const { dep_name, description } = req.body;

//         if (!dep_name || dep_name.trim() === "") {
//             return res.status(400).json({ success: false, error: "Department name is required" });
//         }

//         const newDep = new Department({ dep_name, description });
//         await newDep.save();
//         console.log("Saved");

//         return res.status(200).json({ success: true, department: newDep });
//     } catch (error) {
//         console.error("Error in addDepartment:", error);
//         return res.status(500).json({ success: false, error: "add department server error" });
//     }
// };

// const getDepartment = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const department = await Department.findById(id);
        
//         if (!department) {
//             return res.status(404).json({ success: false, error: "Department not found" });
//         }

//         return res.status(200).json({ success: true, department });
//     } catch (error) {
//         console.error("Error in getDepartment:", error);
//         return res.status(500).json({ success: false, error: "get department server error" });
//     }
// };

// const updateDepartment = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { dep_name, description } = req.body;

//         const updateDep = await Department.findByIdAndUpdate(
//             id,
//             { dep_name, description },
//             { new: true } // Ensures we return the updated document
//         );

//         if (!updateDep) {
//             return res.status(404).json({ success: false, error: "Department not found" });
//         }

//         return res.status(200).json({ success: true, updateDep });
//     } catch (error) {
//         console.error("Error in updateDepartment:", error);
//         return res.status(500).json({ success: false, error: "edit department server error" });
//     }
// };

// const deleteDepartment = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedep = await Department.findByIdAndDelete(id);

//         if (!deletedep) {
//             return res.status(404).json({ success: false, error: "Department not found" });
//         }

//         return res.status(200).json({ success: true, deletedep });
//     } catch (error) {
//         console.error("Error in deleteDepartment:", error);
//         return res.status(500).json({ success: false, error: "delete department server error" });
//     }
// };

// export { addDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment };













