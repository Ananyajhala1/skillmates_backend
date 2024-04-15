const pool = require('../database.js'); 
async function addConnection(user_id, connected_user_id) {
    try {
        // Inserting a new connection into UserConnections table
        const [rows] = await pool.query(
            `INSERT INTO UserConnections (user_id, connected_user_id) VALUES (?, ?)`,
            [user_id, connected_user_id]
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getConnectionsByUser(user_id) {
    try {
        // Retrieve all connections for a user
        const [rows] = await pool.query(
            `SELECT * FROM UserConnections WHERE user_id = ?`,
            [user_id]
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function removeConnection(user_id, connected_user_id) {
    try {
        // Removing a connection
        const [rows] = await pool.query(
            `DELETE FROM UserConnections WHERE user_id = ? AND connected_user_id = ?`,
            [user_id, connected_user_id]
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    addConnection,
    getConnectionsByUser,
    removeConnection,
};
