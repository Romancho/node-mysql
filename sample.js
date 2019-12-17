require('dotenv').config();
let mysql = require('mysql');

const conn = mysql.createConnection({
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});


conn.connect(function(err) {
    if (err) throw err;

    console.log("Connected!");

    var sql = "INSERT INTO users (login, email, password) VALUES ('test', 'test@test.ru', '123456')";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

});
