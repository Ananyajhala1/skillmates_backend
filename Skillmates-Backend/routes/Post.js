const  express =require('express');
const {getPost,getPosts,createPost,deletePost,updatePost,UpdateUpVotes } = require('../controllers/postController.js');


const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await getPost(req.params.id);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    console.log("hi");
    const {description,title,image,created_by } = req.body;
    console.log(req.body);
    // console.log(description);
    await createPost(description,title,image,created_by);
    res.status(201).send('Post created');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {description,title,image } = req.body;
    await updatePost(id, description, title, image);

    res.send('Post updated');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    res.send('Post deleted');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.put('/:id/upvotes', async (req, res) => {
  try {
    const { id } = req.params;
    await UpdateUpVotes(id, upvotes);
    res.send('Upvotes updated');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
