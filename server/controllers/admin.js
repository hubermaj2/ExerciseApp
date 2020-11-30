/* B"H

*/

const express = require('express');
const admin = require('../models/admin');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        comments.getAll().then(x=> res.send( x ) ) 
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        comments.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        admin.submitbackend(
            req.body.exercisename, 
            req.body.type,
            req.body.musclegroup
            //req.body.Post_id, 
            //req.body.Owner_id, 
        ).then(x => {
            res.send( x );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        comments.update( req.params.id,
            req.body.Text, 
            req.body.Post_id, 
            req.body.Owner_id, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        comments.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;