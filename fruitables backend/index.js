require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8800
const cors = require('cors')
const bodyParser = require('body-parser')
const { Contact, Product, User } = require("./conn")
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}))

app.get('/product/alldata', async (req, res) => {
  let data = await Product.find()
  res.status(200).json({ data: data });
})

app.post('/contact/insert', async (req, res) => {
  const data = req.body;
  // console.log(data)
  // insert data in data base
  const newContact = await Contact.create(data);
  const saveContact = await newContact.save()
  res.json({ data: "", message: "Data inserted successfully" })
})
app.post('/checkout/insert', (req, res) => {
  const data = req.body;
  console.log(data)
  // const newContact  = await Contact.create(data);
  // const saveContact = await newContact.save()
  res.json({ data: "", message: "Data inserted successfully" })
})
app.post('/val/insert', async (req, res) => {
  const data = req.body;
  console.log(data)
  let data1 = await Product.find({ fName: data["name"] })
  // const newContact  = await Contact.create(data);
  // const saveContact = await newContact.save()
  res.json({ data: data1, message: "Data inserted successfully " })
})

app.post('/Signup/user', async (req, res) => {
  const data = req.body;
  const existinguser = await User.findOne({email:data["email"]})
if(existinguser){
  return res.json({message:"User already exist"})
}

  console.log(data);
  if(data["password"]!=data["confirmpassword"]){
    return res.json({message:"password do not match"})
  }

  const newuser = await User.create(data);
  const saveUser = await newuser.save()
  res.json({ data: " ", message: "user signup successfully" })
})

app.post('/SignIn/user', async(req, res) => {
  const data = req.body;
  console.log(data);
  const existinguser = await User.findOne({email:data["email"],password:data["password"]})
  if(existinguser){
    return res.json({data:existinguser, message:"user login successsfully"})
  }
  
  res.json({ message: "user credentials invalid" })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})