const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const cors=require('cors')
const PORT=process.env.PORT|| 5000
const umodel=require('./config/user')
const rmodel=require('./config/register')


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/auth",{ useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('connected database')).catch(()=> console.log("disconnected"))



app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
      const user = new rmodel({ username, password, email });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
      console.log('Registered successfully');
  } catch (error) {
      res.status(400).json({ error: 'Error registering user' });
  }
});+

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await rmodel.findOne({ username });

  if (user && user.password === password) {
      // Successful login
    //  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    //  res.json({ token });
     res.status(200).send({message:"successfully"})
      console.log('Login successful');
  } else {
      // Invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
  }
});




// app.post('/api/register', async(req, res) => {
//     const { username, password,email } = req.body;
//  //  const hashedPassword = await bcrypt.hash(password, 10);
//    // const user = new rmodel({ username, password: hashedPassword ,email});
//     try { 
//       const user = new rmodel({ username, password ,email});
//       await user.save();
//       res.status(201).json({ message: 'User registered successfully' });
//       console.log('register successfully')
//     } catch (error) {
//       res.status(400).json({ error: 'Error registering user' });
//     }
//   });
  
//   app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await rmodel.findOne({ username });
    
//     if(user && await bcrypt.compare(password, user.password)) {
//       // Successful login
//       const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
//       res.json({ token });
//       console.log('login successfully')
//     } else {
//       // Invalid credentials
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   });
  





app.listen(PORT,()=> console.log(`the server is running ....${PORT}`))
