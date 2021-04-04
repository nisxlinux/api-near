__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Ls BOT',
            namaowner: 'Near',
            instagram: '@_l_.lawliet_',
            youtube : 'near ngab'
        }
    }
    res.json(config)
})

module.exports = router
