var pool = require("./pool");
require("babel-polyfill");
//获取所有方向
function getAllDepartmentes(){
	var sql = "select * from tbl_exam_department";
	return pool.excute(sql);
}
//获取所有题目类型
function getAllSubjectType(){
	var sql = "select * from tbl_exam_subjecttype";
	return pool.excute(sql);
}

function getSubjectLevel(){
	var sql = "select * from tbl_exam_subjectlevel";
	return pool.excute(sql);
}

function getAllTopics(){
	var sql = "select * from tbl_exam_topic";
	return pool.excute(sql);
}
function　findSubject(){
	var sql = "select * from tbl_exam_subject";
	return pool.excute(sql);
}
function selectSubject(department_id,subjectLevel_id,subjectType_id,topic_id){
	var sql = "select * from tbl_exam_subject where department_id="+department_id
	+" and subjectLevel_id="+subjectLevel_id
	+" and subjectType_id="+subjectType_id
	+" and topic_id="+topic_id+"";
	return pool.excute(sql);
}
function findChoice(subject_id){
	var sql = "select * from tbl_exam_choice where subject_id = "+subject_id+"";
	return pool.excute(sql);
}
function addSubject(analysis,answer,checkstate,stem,uploadTime,department_id,subjectLevel_id,subjectType_id,topic_id){
	var sql = "insert into tbl_exam_subject values(analysis,answer,checkstate,stem,uploadTime,department_id,subjectLevel_id,subjectType_id,topic_id)";
	return pool.excute(sql);
}
module.exports = {

	getAllDepartmentes,
	getAllSubjectType,
	getSubjectLevel,
	getAllTopics,
	findSubject,
	selectSubject,
	findChoice,
	addSubject
}