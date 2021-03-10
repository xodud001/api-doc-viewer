const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{ // localhost:3000/admin
    res.send('admin 이후 초기')
});

router.get('/api', (req, res) =>{
    res.render('admin/api.html', {
        message : '성현이 안녕~~~~~'
    }) 
});
router.get('/main', (req, res) =>{
    res.render('index.html');
});
router.get('/api/write', (req, res) =>{
    res.render('admin/write.html');
});
router.get('/api/1', (req, res) =>{
    res.send('api 1');
});

router.post('/api/write', (req, res) =>{
    res.send(req.body.name);
});

module.exports = router;