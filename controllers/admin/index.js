const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');


router.get('/', (req,res) => {
    res.send('admin app');
});

router.get('/api', ctrl.get_api );

router.get('/api/write', ctrl.get_api_write );

router.post('/api/write', ctrl.post_api_write );

module.exports = router;
