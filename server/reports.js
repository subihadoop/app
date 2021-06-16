var connection = require('./services/db-service');  
  
function Transaction() {  
  
    // get all users data   
    this.getAllUsers = function (res) {  
        // initialize database connection  
        connection.init();  
        // calling acquire methods and passing callback method that will be execute query  
        // return response to server   
        connection.acquire(function (err, con) {  
            con.query('SELECT DISTINCT * FROM users', function (err, result) {  
                con.release();  
                res.send(result);  
            });  
        });  
    };  
  
    this.getReport = function (id, res) {  
        // initialize database connection  
        connection.init();  
        // get id as parameter to passing into query and return filter data  
        connection.acquire(function (err, con) {  
            var query = 'SELECT r.job_id as job_id, r.job_name as job_name,r.dept as dept,r.trigger_by_person as job_run_by, r.status as job_status, r.created_on as job_start_time, r.end_time as job_endtime, r.user_id as user_id FROM reports r, users u where r.user_id=?';
              
            con.query(query, id, function (err, result) {  
                    con.release();  
                    res.send(result);  
                });  
        });  
    };  
  
}  
  
module.exports = new Transaction();  