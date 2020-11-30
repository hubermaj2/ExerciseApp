const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';


export async function submitbackend(data){
    const sql = `INSERT INTO ${PREFIX}Exercise_Types (created_at, Name, Type, Muscle_Group, Video_Url, Relative_Difficulty) VALUES (CURRENT_TIMESTAMP, ${data}, Cardio, Legs, videourl, 1);`
    return await mysql.query(sql, [data]);
}