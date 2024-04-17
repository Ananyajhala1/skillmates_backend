const express = require('express');
const router = express.Router();
const hackathonTeamController = require('../controllers/hackathonTeamController');

router.post('/', async (req, res) => {
    const { team_name, hackathon_name, description, created_by, created_at } = req.body;
    try {
        const teamId = await hackathonTeamController.createHackathonTeam(team_name, hackathon_name, description, created_by, created_at);
        res.status(201).json({ teamId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    const teamId = req.params.id;
    try {
        const team = await hackathonTeamController.getHackathonTeamById(teamId);
        res.json(team);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.put('/:id', async (req, res) => {
    const teamId = req.params.id;
    const { team_name, description } = req.body;
    try {
        await hackathonTeamController.updateHackathonTeam(teamId, team_name, description);
        res.send('Hackathon team details updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    const teamId = req.params.id;
    try {
        await hackathonTeamController.deleteHackathonTeam(teamId);
        res.send('Hackathon team deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id/members', async (req, res) => {
    const teamId = req.params.id;
    try {
        const members = await hackathonTeamController.getHackathonTeamMembers(teamId);
        res.json(members);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/:id/members', async (req, res) => {
    const teamId = req.params.id;
    const { userId, joinDate } = req.body;
    try {
        await hackathonTeamController.addMemberToHackathonTeam(userId, teamId, joinDate);
        res.send('Member added to hackathon team successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id/members/:userId', async (req, res) => {
    const teamId = req.params.id;
    const userId = req.params.userId;
    try {
        await hackathonTeamController.removeMemberFromHackathonTeam(userId, teamId);
        res.send('Member removed from hackathon team successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
