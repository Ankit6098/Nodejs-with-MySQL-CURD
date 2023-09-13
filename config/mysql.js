const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

// Check if the database exists; if not, create it
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

  // Create the database if it doesn't exist
  connection.query('CREATE DATABASE IF NOT EXISTS my_nodejs_MySQL_crud', (createDbErr) => {
    if (createDbErr) {
      console.error('Error creating database: ' + createDbErr.message);
    } else {
      console.log('Database created or already exists');
    }

    // Use the created database
    connection.query('USE my_nodejs_MySQL_crud', (useDbErr) => {
      if (useDbErr) {
        console.error('Error using database: ' + useDbErr.message);
      } else {
        console.log('Using database: my_nodejs_MySQL_crud');

        // Create the table if it doesn't exist
        connection.query(
          `CREATE TABLE IF NOT EXISTS todos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            task VARCHAR(255) NOT NULL,
            completed BOOLEAN DEFAULT 0
          )`,
          (createTableErr) => {
            if (createTableErr) {
              console.error('Error creating table: ' + createTableErr.message);
            } else {
              console.log('Table created or already exists');
            }
          }
        );
      }
    });
  });
});

module.exports = connection;