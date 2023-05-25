const express = require('express');
const oracledb = require('oracledb');
const app = express();

app.set('view engine', 'ejs');
//oracle 정보
const dbConfig = {
    user : 'java'
    ,passwoad : 'oracle'
    ,connectString : '127.0.0.1:1521/XE'
}
app.get('/', async(req, res)=> {
    let conn;
    try {
        conn = await oracledb.getConnection(dbConfig);
        const result = await conn.execute(`SELECT * FROM employees`); // ''(작은 따옴표) 써도 되는데 쿼리가 길어질 경우를 대비해서 항상 ``(1 옆에) 사용
        res.render('index', {data : result.rows});
    } catch(err) {
        console.log(err);
        res.status(500).send('error');
    } finally {
        if(conn) {
            try {
                await conn.close();
            } catch(e) {
                console.log(e);
            }
        }
    }
});
app.listen(3000, ()=>{
    console.log('start server');
});