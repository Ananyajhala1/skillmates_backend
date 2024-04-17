const express = require('express');
const router = express.Router();
const collaborativeProjectController = require('../controllers/collaborativeProjectsController');

router.post('/', async (req, res) => {
    const { title, description, created_by, created_at } = req.body;
    try {
        const projectId = await collaborativeProjectController.createCollaborativeProject(title, description, created_by, created_at);
        res.status(201).json({ projectId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        const project = await collaborativeProjectController.getCollaborativeProjectById(projectId);
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.put('/:id', async (req, res) => {
    const projectId = req.params.id;
    const { title, description } = req.body;
    try {
        await collaborativeProjectController.updateCollaborativeProject(projectId, title, description);
        res.send('Collaborative project details updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        await collaborativeProjectController.deleteCollaborativeProject(projectId);
        res.send('Collaborative project deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
