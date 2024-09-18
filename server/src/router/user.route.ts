import express from 'express'

const router = express.Router();

router.get('/', (req, res) =>{
    if(req.isAuthenticated()){
        res.json(req.user)
    }else{
        res.status(401).json({
            error: 'UnAuthorized'
        })
    }
})

export default router