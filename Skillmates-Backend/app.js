const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods

};

app.use(cors(corsOptions));


// routes
app.use('/users',require('./routes/User'));
app.use('/users',require('./routes/roadmap'));
app.use('/projects', require('./routes/Project'));
app.use('/posts', require('./routes/Post'));
app.use('/connections', require('./routes/UserConnetions'));
app.use('/hackathons', require('./routes/hackathon'));
app.use('/collabprojects', require('./routes/collabproject'));
app.use('/activity', require('./routes/activity'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
