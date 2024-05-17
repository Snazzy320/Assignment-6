const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const fxn = require('./controller')
const mongoose = require("mongoose")




mongoose.connect(process.env.MONGODB_URL,)
.then(()=> console.log("Mongodb connected"))




const app = express()

// middleware

app.use(express.json())

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log(`server started running...${PORT}`);
})



app.get("/employee", fxn.handleGetEmployeeRequest)

app.get("/get-employee/:id", fxn.getOneEmployee)
   
app.post("/add-employee", fxn.handlePostRequest )

app.put("/Edit-employee/:id", fxn.handleEditEmpoyeeRequest )

app.delete("/delete-employee/:id", fxn.deleteEmployee )