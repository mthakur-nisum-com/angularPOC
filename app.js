var express = require("express");
var app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    database=require('./databaseConnection/dataBaseConnection'),
    ActionEvents = require('./public/js/Actions/ActionEvents'),
    Promise = require('node-promise').Promise;
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));
var databaseExcuteObj;
app.use(bodyParser.json());
app.get('/', function(req, res) {
	if(!database.checkConnection()) {
		database.connectToDatabse(function(obj){
			console.log(obj)
		})
	}
	/*ActionEvents.addListeners('selectEvent',function(res){
		console.log(res);
	});
	database.setQuery('select * from usersTable');
	   database.executeQuery('selectEvent');*/
    res.render('main.html');
});
app.post('/createProfile',function(req,res){

	databaseExcuteObj={
		'insertUserRecord':function(response){
			ActionEvents.removeListener('insertRecord',databaseExcuteObj.insertUserRecord);
			console.log(response.status)
			if(response.status) {
				console.log(response)
				 var obj={
				 	status:true,
				 	message:'profile create succesfully'
				 }
				 resolveObject(res,obj,true)
			}
		}
	}
	
		ActionEvents.addListeners('insertRecord',databaseExcuteObj.insertUserRecord);
		database.setQuery('INSERT INTO `sql6111084`.`usersTable` (`firstName`, `lastName`, `userId`, `addressLine1`, `addressLine2`, `City`, `password`, `verifyPassword`) values(' + "'" + req.body.firstName + "'" + "," + "'" +  req.body.lastName + "'" + "," +generateUserId() + "," + "'" + req.body.address.city + "'" + "," + "'" + req.body.address.addressLine1 + "'" + "," + "'" + req.body.address.addressLine2 + "'" + "," + "'" + req.body.password + "'" + "," + "'" +  req.body.verifyPassword + "'" + ')');
		database.executeQuery('insertRecord');
	
	/*else {
		 resolveObject(res,{status:false,message:'please complete the fields'},true)
	}*/
});
app.get('/getUserList',function(req,res){
	var userArray=[],tempObj;
	databaseExcuteObj={
		'getUserRecords':function(response){
			/*console.log(response.userList[0].firstName)*/
			ActionEvents.removeListener('selectEvent',databaseExcuteObj.getUserRecords);
			if(response.status) {
				var userList =Object.keys(response);
				userList = response[userList[userList.length-userList.length]];
				userList.map(function(arrayObj,index){
					tempObj=new Object();
					for(var key in arrayObj) {
						if(key !== 'password' && key !== 'verifyPassword') {
								tempObj[key] = arrayObj[key];
						}
					}
					userArray.push(tempObj);
				});
				/*console.log(userArray);*/
				console.log(userArray)
				resolveObject(res,{userList:userArray},true)
			}
		}
	}
	ActionEvents.addListeners('selectEvent',databaseExcuteObj.getUserRecords);
	database.setQuery('select * from `sql6111084`.`usersTable`');
	database.executeQuery('selectEvent');
});
function resolveObject(response,resultObj,promiseState) {
	var responsePromise;
	if(promiseState) {
		responsePromise =new Promise();
		responsePromise.resolve(resultObj);
	}
	responsePromise.then(function(promiseObj) {
			response.send({responseObj:promiseObj});
	});
}
function generateUserId() {
    return Math.floor(Math.random() * 10000000);
}
var port = 9999;
console.log('listening to port ' + port)
app.listen(port);