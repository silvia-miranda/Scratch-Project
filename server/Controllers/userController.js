const db = require('../models/userInfoModels');
//const { ResolvePlugin } = require('webpack')
const userController = {};

// The model represents any data that may be seen / used / processed, such as data from a database (more on this later!)
// The view represents the application’s UI which renders the data from the model in a user-friendly interface
// The controller represents the connection between the model and the view, handling any processing of information back and forth
/*
Controllers Needed:
    1. CreateUser (Register)
    2. Login
    3. Edit Profile
    4. Delete Profile
    5. Search
*/

/*
CREATE TABLE user_info (
    id SERIAL PRIMARY KEY,
    username varchar(255),
    password varchar(255),
    name varchar(255),
    home varchar(255),
    email varchar(255),
    type varchar(255)
)
;

dummy instance: 
{"username": "test", "password": "test2", "name": "t1", "home": "home1", }
*/

userController.getProfile = (req, res, next) => {
    console.log("Inside userController.getProfile.");
    // console.log("req.body, get profile: ", req.params)
    const query = `SELECT * FROM user_info WHERE id='${req.params.id}';`;
    db.query(query).then(data => {
        res.locals.user = data.rows;
        return next()
    }).catch(err => {
        console.log("Error in userController.getProfile: ", err);
        return next(err);
    }) 
}


userController.createUser = (req, res, next) => {

    let {username, password, name, home, email, type} = req.body;

    let arr = [username, password, name, home, email, type];

    const query = 'INSERT INTO user_info (username, password, name, home, email, type) VALUES ($1, $2, $3, $4, $5, $6)';
    
    db.query(query, arr).then(data => {
        return next();
    }).catch(err => {
        console.log("Error in userController.createUser: ", err);
        return next(err);
    })
}

userController.login = (req, res, next) => {
    //req -> matching username and paxwssword with data from database
    // console.log("req.body in userController: ", req);
    let {username, password} = req.body
    // let arr = [username, password];
    const query = `SELECT * FROM user_info WHERE username='${username}' AND password='${password}';`;

    db.query(query).then(data => {
        res.locals.user = data.rows;
        return next();
    }).catch(err => {
        console.log("Error in userController.createUser: ", err);
        return next(err);
    })
    //res -> would be every column (data) from that user. 
}

module.exports = userController;