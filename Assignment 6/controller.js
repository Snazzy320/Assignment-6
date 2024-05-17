
const Employees  = require("./Model/EmployeeModel")



const handleGetEmployeeRequest = async (req, res)=>{

    const employees = await Employees.find()
   
    return res.status(200).json({
        message: "successfull",
        count: employees.length,
        employees
        })
}


const handlePostRequest = async (req, res)=>{

    console.log(req.body);

    // Destructurig

    const { Name, Department, jobtitle, Email, Phone,  Location, Image  } = req.body

    const newEmployee = new Employees({ Name, Department, jobtitle, Email, Phone,  Location, Image })

    await newEmployee.save()

        return res.status(200).json({
            message: "succesfull",
            employee: newEmployee
       }) 
}


const handleEditEmpoyeeRequest = async (req, res)=>{

    const { id } = req.params

    const {Name, Department, jobtitle, Email, Phone,  Location, Image } = req.body

    const editedEmployee = await Employees.findByIdAndUpdate(

        id,

        {Name, Department, jobtitle, Email, Phone,  Location, Image},

        {new: true}
    )
    
    return res.status(200).json({
        message: "successfull",
        employee: editedEmployee
    })
    
}


const deleteEmployee = async (req, res)=>{

    const { id } = req.params

    const deletedEmployee = await Employees.findByIdAndDelete(id)

    return res.status(200).json({message: "Deleted Successfully"}) 
}


const getOneEmployee = async(req,res)=>{

    try {

        const { id } = req.params

        const employee = await Employees.findById(id)

        return res.status(200).json({
            message:"successfull",
            employee
        })
        
    } catch (error) {

        return res.status(500).json({message: error.message})

    }
}

module.exports = {
    handlePostRequest,
    handleGetEmployeeRequest,
    deleteEmployee,
    handleEditEmpoyeeRequest,
    getOneEmployee
}
