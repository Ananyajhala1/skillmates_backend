const pool = require('../database.js');

// Create a new roadmap
async function createRoadmap(userId, title, description, created_at) {
  try {
    const [result] = await pool.query('INSERT INTO Roadmaps (title, description, created_by, created_at) VALUES (?, ?, ?, ?)', [title, description, userId, created_at]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get roadmap details by ID
async function getRoadmapById(userId, roadmapId) {
  try {
    const [result] = await pool.query('SELECT * FROM Roadmaps WHERE roadmap_id = ? AND created_by = ?', [roadmapId, userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Update roadmap details
async function updateRoadmap(userId, roadmapId, title, description) {
  try {
    const [result] = await pool.query('UPDATE Roadmaps SET title = ?, description = ? WHERE roadmap_id = ? AND created_by = ?', [title, description, roadmapId, userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete a roadmap
async function deleteRoadmap(userId, roadmapId) {
  try {
    const [result] = await pool.query('DELETE FROM Roadmaps WHERE roadmap_id = ? AND created_by = ?', [roadmapId, userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Get items within a roadmap
async function getRoadmapItems(userId, roadmapId) {
  try {
    const [result] = await pool.query('SELECT * FROM RoadmapItems WHERE roadmap_id = ? AND created_by = ?', [roadmapId, userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Add an item to a roadmap
async function addRoadmapItem(userId, roadmapId, title, description, order_index) {
  try {
    const [result] = await pool.query('INSERT INTO RoadmapItems (roadmap_id, title, description, order_index) VALUES (?, ?, ?, ?)', [roadmapId, title, description, order_index]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Update an item within a roadmap
async function updateRoadmapItem(userId, roadmapId, itemId, title, description, order_index) {
  try {
    const [result] = await pool.query('UPDATE RoadmapItems SET title = ?, description = ?, order_index = ? WHERE roadmap_id = ? AND item_id = ? AND created_by = ?', [title, description, order_index, roadmapId, itemId, userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Delete an item from a roadmap
async function deleteRoadmapItem(userId, roadmapId, itemId) {
  try {
    const [result] = await pool.query('DELETE FROM RoadmapItems WHERE roadmap_id = ? AND item_id = ? AND created_by = ?', [roadmapId, itemId, userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  createRoadmap,
  getRoadmapById,
  updateRoadmap,
  deleteRoadmap,
  getRoadmapItems,
  addRoadmapItem,
  updateRoadmapItem,
  deleteRoadmapItem
};
