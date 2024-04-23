const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/users', searchController.searchUsers);
router.get('/projects', searchController.searchProjects);
router.get('/hackathons', searchController.searchHackathons);
router.get('/interests', searchController.searchInterests);
router.get('/expert-tags', searchController.searchExpertTags);

module.exports = router;