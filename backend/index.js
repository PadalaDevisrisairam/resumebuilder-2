const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('i am the backend and i am running buddy you dont worry')
})

app.use('/api',require("./Routes/Router"));
app.use('/api',require("./Routes/loginroute"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})