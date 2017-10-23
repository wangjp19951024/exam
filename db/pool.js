var mysql = require("mysql");
var pool = global.pool;
if(!pool){
	pool = mysql.createPool({
		host:"192.168.245.1",
		port:"3306",
		user:"root",
		password:"123456",
		database:"exam"
	});
	//挂载pool
	global.pool = pool;
}

//封装getconnection方法
function getConnection(){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,conn){
			if(!err){
				resolve(conn);
			}else{
				reject(err);
			}
		})
	})
} 

// pool.getConnection(function(err,co){
// 	if(err){
// 		throw err;
// 	}else{
// 		var sql = "select * from tbl_exam_topic";
// 		co.query(sql,function(err,re){
// 			if(err){
// 				throw err;
// 			}else{
// 				console.log(re);
// 			}
// 			co.release();
// 		});
// 	}
// });
//封装sql链接方法
function excute(sql){
	return new Promise(function(resolve,reject){
		getConnection().then(function(conn){
			connection = conn;
			conn.query(sql,function(err,result){
				if(!err){
					resolve(result);
				}else{
					reject(err);
				}
			})
		}).catch(function(err){
			console.log("errors");
		}).finally(function(){
			//释放链接
			connection.release();
		});
	})
}

module.exports = {
	getConnection,
	excute
}