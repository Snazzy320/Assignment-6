
const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({

    Name: {type: String, require},

    Department: {type: String, require},

    Jobtitle: {type: String,},

    Email: {type: String, require},

    Phone: {type: Number, require},

    Location: {type: String, require },

    Image: {type: String, default: ""}

})

const Employee = new mongoose.model("Employee", employeeSchema)

module.exports = Employee
