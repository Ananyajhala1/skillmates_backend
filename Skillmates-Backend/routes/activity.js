const express = require('express');
const router = express.Router();
const getMostActiveUser = require('../controllers/activityController.js')
const getMostPopularProject = require('../controllers/activityController.js')
const getMostPopularStudyGroup = require('../controllers/activityController.js')
router.get('/mostactiveuser', async (req, res) => {
    try {
      const user =await getMostActiveUser.getMostActiveUser();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.get('/mostPopularProject', async (req, res) => {
    try {
      const user =await getMostPopularProject.getMostPopularProject();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  router.get('/mostPopularStudygroup', async (req, res) => {
    try {
      const user =await getMostPopularStudyGroup.getMostPopularStudyGroup();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });




module.exports = router;