const express = require('express');
const router = express.Router();
const getMostActiveUser = require('../controllers/activityController.js')
router.get('/mostactiveuser', async (req, res) => {
    try {
      const user =await getMostActiveUser.getMostActiveUser();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;