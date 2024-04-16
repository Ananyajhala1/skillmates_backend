const express = require('express');
const router = express.Router();
const roadmapController = require('../controllers/roadmapsController');

// Create a new roadmap
router.post('/:userId/roadmaps', async (req, res) => {
  const userId = req.params.userId;
  const { title, description, created_at } = req.body;
  try {
    const result = await roadmapController.createRoadmap(userId, title, description, created_at);
    res.send('Roadmap created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get roadmap details by ID
router.get('/:userId/roadmaps/:id', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  try {
    const result = await roadmapController.getRoadmapById(userId, roadmapId);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update roadmap details
router.put('/:userId/roadmaps/:id', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  const { title, description } = req.body;
  try {
    const result = await roadmapController.updateRoadmap(userId, roadmapId, title, description);
    res.send('Roadmap details updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a roadmap
router.delete('/:userId/roadmaps/:id', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  try {
    const result = await roadmapController.deleteRoadmap(userId, roadmapId);
    res.send('Roadmap deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get items within a roadmap
router.get('/:userId/roadmaps/:id/items', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  try {
    const result = await roadmapController.getRoadmapItems(userId, roadmapId);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add an item to a roadmap
router.post('/:userId/roadmaps/:id/items', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  const { title, description, order_index } = req.body;
  try {
    const result = await roadmapController.addRoadmapItem(userId, roadmapId, title, description, order_index);
    res.send('Item added to roadmap successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update an item within a roadmap
router.put('/:userId/roadmaps/:id/items/:itemId', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  const itemId = req.params.itemId;
  const { title, description, order_index } = req.body;
  try {
    const result = await roadmapController.updateRoadmapItem(userId, roadmapId, itemId, title, description, order_index);
    res.send('Item within roadmap updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete an item from a roadmap
router.delete('/:userId/roadmaps/:id/items/:itemId', async (req, res) => {
  const userId = req.params.userId;
  const roadmapId = req.params.id;
  const itemId = req.params.itemId;
  try {
    const result = await roadmapController.deleteRoadmapItem(userId, roadmapId, itemId);
    res.send('Item deleted from roadmap successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;