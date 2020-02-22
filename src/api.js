import { Router, json } from 'express';
const router = Router();

router.post('/login/:id', (req, res)=> {
    res.send({
        id: req.params.id
    })
})



export  {router as api, json}