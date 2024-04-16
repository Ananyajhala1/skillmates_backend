const pool = require('../database');

async function createHackathonTeam(name, hackathonName, description, createdBy, createdAt) {
    try {
        const [result] = await pool.query('INSERT INTO HackathonTeams (team_name, hackathon_name, description, created_by, created_at) VALUES (?, ?, ?, ?, ?)', [name, hackathonName, description, createdBy, createdAt]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
}

async function getHackathonTeamById(id) {
    try {
        const [result] = await pool.query('SELECT * FROM HackathonTeams WHERE team_id = ?', [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateHackathonTeam(id, name, description) {
    try {
        await pool.query('UPDATE HackathonTeams SET team_name = ?, description = ? WHERE team_id = ?', [name, description, id]);
    } catch (error) {
        throw error;
    }
}

async function deleteHackathonTeam(id) {
    try {
        await pool.query('DELETE FROM HackathonTeams WHERE team_id = ?', [id]);
    } catch (error) {
        throw error;
    }
}

async function getHackathonTeamMembers(teamId) {
    try {
        const [result] = await pool.query('SELECT * FROM UserHackathonTeams WHERE team_id = ?', [teamId]);
        return result;
    } catch (error) {
        throw error;
    }
}

async function addMemberToHackathonTeam(userId, teamId, joinDate) {
    try {
        await pool.query('INSERT INTO UserHackathonTeams (user_id, team_id, join_date) VALUES (?, ?, ?)', [userId, teamId, joinDate]);
    } catch (error) {
        throw error;
    }
}

async function removeMemberFromHackathonTeam(userId, teamId) {
    try {
        await pool.query('DELETE FROM UserHackathonTeams WHERE user_id = ? AND team_id = ?', [userId, teamId]);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createHackathonTeam,
    getHackathonTeamById,
    updateHackathonTeam,
    deleteHackathonTeam,
    getHackathonTeamMembers,
    addMemberToHackathonTeam,
    removeMemberFromHackathonTeam
};
