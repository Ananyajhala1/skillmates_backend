const  express =require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser, UpdateProfilePic, updateBio,getExpert_tags, CreateExpert_tags } = require('../controllers/UserController.js');


const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { username, password, github_username, email , profilePicture} = req.body;
    await createUser(username, password, github_username, email,profilePicture);
    res.status(201).send('User created');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    await updateUser(id, username, email);
    res.send('User updated');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.send('User deleted');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile picture by ID
router.put('/:id/profile_pic', async (req, res) => {
  try {
    const { id } = req.params;
    const { profile_pic } = req.body;
    await UpdateProfilePic(id, profile_pic);
    res.send('Profile picture updated');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user bio by ID
router.put('/:id/bio', async (req, res) => {
  try {
    const { id } = req.params;
    const { bio } = req.body;
    await updateBio(id, bio);
    res.send('Bio updated');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// get all expert tags for a user
router.get('/:id/expert_tags', async (req, res) => {
  try {
    const { id } = req.params;
    const expert_tags =await getExpert_tags(id);
    res.json(expert_tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create expert tags for a user by ID

router.post('/:id/expert_tags', async (req, res) => {
  try {
    const { id } = req.params;
    const {tag_name} = req.body;
    await CreateExpert_tags(id,tag_name);
    res.status(201).send('Expert tags created');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;