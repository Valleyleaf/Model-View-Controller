const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes');

// router.use('/users', userRoutes);
// router.use('/blogposts', blogPostRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;


//This Index is responsible for managing all of my other routes. In my other routes,
//I will have what needs to be rendered.
