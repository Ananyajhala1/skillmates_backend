const  express =require('express');

const {addConnection,getConnectionsByUser, removeConnection,} = require('../controllers/UserConnectionController.js');

const router = express.Router();
// Add a connection between two users
router.get('/', async (req, res) => {
    try {
        const { user_id, connected_user_id } = req.body;
        
        // Validate the input
        if (!user_id || !connected_user_id) {
            return res.status(400).json({ error: 'User IDs are required' });
        }

        // Add the connection
        const result = await addConnection(user_id, connected_user_id);
        res.status(201).json({ message: 'Connection added successfully', connection_id: result.insertId });
    } catch (error) {
        console.error('Error adding connection:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all connections for a specific user
router.get('/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;
        
        // Validate the input
        if (!user_id) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Retrieve connections
        const connections = await getConnectionsByUser(user_id);
        res.status(200).json(connections);
    } catch (error) {
        console.error('Error retrieving connections:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Remove a connection between two users
router.delete('/', async (req, res) => {
    try {
        const { user_id, connected_user_id } = req.body;
        
        // Validate the input
        if (!user_id || !connected_user_id) {
            return res.status(400).json({ error: 'User IDs are required' });
        }

        // Remove the connection
        const result = await removeConnection(user_id, connected_user_id);
        
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Connection removed successfully' });
        } else {
            res.status(404).json({ error: 'Connection not found' });
        }
    } catch (error) {
        console.error('Error removing connection:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
