import express from 'express';
import passport from 'passport';


const router = express.Router();


router.get("/google", passport.authenticate("google", {scope:['profile', 'email']}));

router.get('/google/callback', passport.authenticate('google', {failureRedirect: "/"}),
(req, res) =>{
    res.redirect('http://localhost:5173')
});

router.get('/logout', (req, res, next)=>{
    req.logout((err) =>{
        if (err) return next(err)
            res.redirect('http://localhost:5173')
    })
})

export default router