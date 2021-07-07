require("dotenv").config();
const jt = require('./middlewares/authentication')
const express = require("express");
const app = express();

const projectRoute = require('./routes/projects/index');
// const projectRoutes = require("./routes/projects/route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/project', jt.authenticateToken, projectRoute)


app.post('/login', (req, res) => {
  //Authenticate User

  const username = req.body.username
  const user = { name: username }

  if(username !== process.env.name){ 
     res.status('401').json({ message: 'Incorrect credentials'}) 
  } else {

     const accessToken = jt.generateAccessToken(user)
  
     res.json({ accessToken: accessToken})
     console.log(accessToken)
  }

})


const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, console.log(`Server running on port ${PORT} thru clean arch`));

app.use(async (req, res) => {
    res.status(404).send("Route unavailable.");
  });
  module.exports = app;
  module.exports = server;