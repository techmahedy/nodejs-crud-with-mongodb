var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node'
});

connection.connect(function(error) {
    if (error) {
      console.error('error connecting: ' + error.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
    insertData(connection);
});

function insertData(connection)
{   
    let SQL = "INSERT INTO `student`(`name`, `email`) VALUES ('Mahedi Hasan','mahedy150101@gmail.com')";
    connection.query(SQL,function(error){
        if(error){
            console.log("Error occurs");
        }
        console.log("Data inserted");
    });
}