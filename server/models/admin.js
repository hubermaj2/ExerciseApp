const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';


async function submitbackend(exercisename, type, musclegroup){
    const sql = `INSERT INTO ${PREFIX}Exercise_Types (created_at, Name, Type, Muscle_Group, Video_Url, Relative_Difficulty) VALUES (CURRENT_TIMESTAMP, '${exercisename}', '${type}', '${musclegroup}', 'videourl', 1);`
    console.log("hello");
    return await mysql.query(sql, [exercisename, type, musclegroup]);
}

module.exports = { submitbackend }