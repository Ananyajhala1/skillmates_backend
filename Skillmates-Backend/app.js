const express = require('express');



const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// routes
app.use('/users',require('./routes/User'));
app.use('/projects', require('./routes/Project'));
app.use('/posts', require('./routes/Post'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
