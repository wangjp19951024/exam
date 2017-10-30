let express = require("express");
let route = express.Router();
let examDB = require("../db/examDB");
require("babel-polyfill");

//获取所有方向
route.get('/getAllDepartmentes',(req,resp)=>{
	examDB.getAllDepartmentes().then((data)=>{
		resp.send(data)
	}).catch((err)=>{
		console.log("error");
	});
})

//获取所有题目类型
route.get('/getAllSubjectType',(req,resp)=>{
	examDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		console.log("type-error");
	})
})

//获取所有题目等级
route.get('/getSubjectLevel',(req,resp)=>{
	examDB.getSubjectLevel().then((data)=>{
		console.log(data);
		resp.send(data);
	}).catch((err)=>{
		console.log("level-error");
	})
})

//获取所有知识点　
route.get('/getAllTopics',(req,resp)=>{
	examDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		console.log("err");
	})
})

//获取所有题目
route.get('/findSubject',(req,resp)=>{
	examDB.findSubject().then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		console.log("eer");
	})
})

//选择特定id下的题目
route.post('/selectSubject',(req,resp)=>{
	//打印请求体
	examDB.selectSubject(req.body.department_id,req.body.subjectLevel_id,req.body.subjectType_id,req.body.topic_id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		console.log("select-err");
	})
})
//选取单选题
route.post('/findChoice',(req,resp)=>{
	console.log(req.body);
	examDB.findChoice(req.body.subject_id).then((data)=>{
		resp.send(data);
	}).catch((err)=>{
		console.log("find-error");
	})
	
})
route.post('/addSubject',(req,resp)=>{
examDB.addSubject().then((data)=>{
	resp.send(data);
}).catch((err)=>{
	console.log("add-error");
})
})
module.exports = route;