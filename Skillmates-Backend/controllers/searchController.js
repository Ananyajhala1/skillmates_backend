const pool = require('../database');

async function searchUsers(req, res) {
    const { query } = req.query;
    try {
        const [result] = await pool.query('SELECT * FROM User WHERE username LIKE ?', [`%${query}%`]);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function searchProjects(req, res) {
    const { query } = req.query;
    try {
        const [result] = await pool.query('SELECT * FROM Project WHERE title LIKE ? OR description LIKE ?', [`%${query}%`, `%${query}%`]);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function searchHackathons(req, res) {
    const { query } = req.query;
    try {
        const [result] = await pool.query('SELECT * FROM Hackathon WHERE name LIKE ? OR description LIKE ?', [`%${query}%`, `%${query}%`]);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function searchInterests(req, res) {
    const { query } = req.query;
    try {
        const [result] = await pool.query('SELECT * FROM Interests WHERE interest_name LIKE ?', [`%${query}%`]);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function searchExpertTags(req, res) {
    const { query } = req.query;
    try {
        const [result] = await pool.query('SELECT * FROM ExpertTags WHERE tag_name LIKE ?', [`%${query}%`]);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    searchUsers,
    searchProjects,
    searchHackathons,
    searchInterests,
    searchExpertTags
};
