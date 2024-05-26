const express = require('express'); 
const router = express.Router(); 
const auth = require('../middlewares/authMiddleware'); 

const {signup, login, getUser} = require('../controllers/authController'); 

router.post('/signup',signup);
router.post('/login',login);

router.get('/user', auth, (req, res) => {
    console.log(req.headers.authorization)
    res.json(req.user);
});

module.exports = router;

// module.exports = router; 
