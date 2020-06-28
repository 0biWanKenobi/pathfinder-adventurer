const { Router, json } = require('express');
const router = Router();

router.post('/login/:id', (req, res)=> {
    console.log('testing server side requests')
    res.send({       
        id: req.params.id
    })
})




module.exports.api = router;
module.exports.json = json;