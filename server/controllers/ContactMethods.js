/* B"H

*/

const express = require('express');
const cm = require('../models/ContactMethods.js');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        cm.getAll().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        cm.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/exists', (req, res, next) => {
        cm.exists(req).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        cm.search().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/gettypes', (req, res, next) => {
        cm.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        cm.add(
            req.body.Type,
            req.body.Value, 
            req.body.User_id,
        ).then(newCM => {
            res.send( newCM );
        }).catch(next)
    })
    .post('/update', (req, res, next) => {
        cm.update(
            req.body.id,
            req.body.Type, 
            req.body.Value, 
            req.body.IsPrimary,
            req.body.CanSpam,
            req.body.User_id
        ).then(newUser => {
            res.send( { ...newUser, Password: undefined } );
        }).catch(next)
    })
    .post('/remove', (req, res, next) => {
        cm.remove(
            req.body.id
        ).then(newUser => {
            res.send( { ...newUser, Password: undefined } );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        users.update( req.params.id,
            req.body.FirstName,
            req.body.LastName, 
            req.body.DOB, 
            req.body.Password, 
            users.Types.USER
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        users.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;