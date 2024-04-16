const pool = require('../database.js'); // Import your database connection pool
const express = require('express');
const router = express.Router();

// Create a new collaborative project
router.post('/collaborative-projects', async (req, res) => {
  const { title, description, created_by, created_at } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO CollaborativeProjects (title, description, created_by, created_at) VALUES (?, ?, ?, ?)', [title, description, created_by, created_at]);
    res.send('Collaborative project created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get collaborative project details by ID
router.get('/collaborative-projects/:id', async (req, res) => {
  const projectId = req.params.id;
  try {
    const [result] = await pool.query('SELECT * FROM CollaborativeProjects WHERE project_id = ?', [projectId]);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update collaborative project details
router.put('/collaborative-projects/:id', async (req, res) => {
  const projectId = req.params.id;
  const { title, description } = req.body;
  try {
    const [result] = await pool.query('UPDATE CollaborativeProjects SET title = ?, description = ? WHERE project_id = ?', [title, description, projectId]);
    res.send('Collaborative project details updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a collaborative project
router.delete('/collaborative-projects/:id', async (req, res) => {
  const projectId = req.params.id;
  try {
    const [result] = await pool.query('DELETE FROM CollaborativeProjects WHERE project_id = ?', [projectId]);
    res.send('Collaborative project deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
