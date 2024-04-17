const pool = require('../database');

async function createCollaborativeProject(title, description, createdBy, createdAt) {
    try {
        const [result] = await pool.query('INSERT INTO CollaborativeProjects (title, description, created_by, created_at) VALUES (?, ?, ?, ?)', [title, description, createdBy, createdAt]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

async function getCollaborativeProjectById(id) {
    try {
        const [result] = await pool.query('SELECT * FROM CollaborativeProjects WHERE project_id = ?', [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateCollaborativeProject(id, title, description) {
    try {
        await pool.query('UPDATE CollaborativeProjects SET title = ?, description = ? WHERE project_id = ?', [title, description, id]);
    } catch (error) {
        throw error;
    }
}

async function deleteCollaborativeProject(id) {
    try {
        await pool.query('DELETE FROM CollaborativeProjects WHERE project_id = ?', [id]);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCollaborativeProject,
    getCollaborativeProjectById,
    updateCollaborativeProject,
    deleteCollaborativeProject
};
