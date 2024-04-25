const  express =require('express');
const { getProject,deleteproject,createProject,getProjects } = require('../controllers/projectController.js');


const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await getProject(req.params.id);
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const {created_by,title,description,created_at,github_repository } = req.body;
    await createProject(created_by,title,description,created_at,github_repository );
    res.status(201).send('Project created');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteproject(id);
    res.send('project deleted');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
