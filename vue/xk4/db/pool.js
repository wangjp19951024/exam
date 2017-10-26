let mysql = require('mysql');

let pool = global.pool;
if(!pool){
  //创建连接池
  pool = mysql.createPool({
    host:'192.168.245.1',
    port:'3306',
    database:'system',
    user:'root',
    password:'123456'
  });
  //将连接挂载到global
  global.pool = pool;
}
//获取链接
function getConnection(){
  return new Promise(function(resolve,reject){
    pool.getConnection(function(err,conn){
      if(!err){
        resolve(conn);
      }else {
        reject(err);
      }
    });
  })
}

//执行sql
function execute(sql){
      return new Promise(function(resolve,reject){
        var connection ;
        getConnection().then(function(conn){
          connection = conn;
          conn.query(sql,function(err,result){
            if(!err){
              resolve(result)
            }else {
              reject(err)
            }
          });
        }).catch(function(err){
          reject(err)
        }).finally(function(){
          if(connection){
            connection.release();
          }
        });
      });    
}
module.exports = {
  getConnection,
  execute
};


