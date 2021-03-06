/* B"H

*/
//import session from "../../client/src/models/session.js";
const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN:5, USER:6 };

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All");
    return await mysql.query(`SELECT * FROM ${PREFIX}Users`);
}
async function getExercises(){
    return await mysql.query(`SELECT * FROM ${PREFIX}Exercise_Types`);
}

async function get(id){
    const sql = `SELECT 
        *,
        (SELECT Value FROM ${PREFIX}ContactMethods Where User_id = ${PREFIX}Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail
    FROM ${PREFIX}Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function login(email, password){
    const sql = `SELECT * FROM ${PREFIX}Users WHERE email = '${email}' AND Password = '${password}'`;
    const rows = await mysql.query(sql, [email, password]);
    if(!rows.length) throw { status: 404, message: "Sorry, you are not a registered user."};
    //console.log({password, Password: rows[0].Password});

    //const hash = await bcrypt.hash(password, rows[0].Password)
    //const res = await bcrypt.compare(password, rows[0].Password)
    //console.log ({res, hash})
    //if(! res ) throw { status: 403, message: "Sorry, wrong password." };
    //session.user = {
    //    name: email,
    //    handle: email,
     //   profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
    //}
    return rows[0];
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM ${PREFIX}Types WHERE Type_id = 2`);
}

async function add(firstname, lastname, email, password){
    const sql = `INSERT INTO ${PREFIX}Users (created_at, FirstName, LastName, DOB, email, Password, User_Type) VALUES  (CURRENT_TIMESTAMP, '${firstname}', '${lastname}', CURRENT_TIMESTAMP, '${email}', '${password}', 6);`;
    //const params = [[new Date(), FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [firstname, lastname, email, password]);
}

async function update(id, FirstName, LastName, DOB, Password, User_Type){
    const sql = `UPDATE ${PREFIX}Users SET ? WHERE id = ?;`;
    const params = { FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Users WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

async function register(FirstName, LastName, DOB, Password, User_Type, email) {
    if(await cm.exists(email)){
        throw { status: 409, message: 'You already signed up with this email. Please go to Log in.' }
    }
    const hash = await bcrypt.hash(Password, SALT_ROUNDS);
    const res = await add(FirstName, LastName, DOB, hash, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true, res.insertId);
    const user = await get(res.insertId);
    return user;
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM ${PREFIX}Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getExercises, getAll, get, add, update, remove, getTypes, register, login, search, Types }