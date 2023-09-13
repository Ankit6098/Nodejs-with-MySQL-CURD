const db = require('../config/mysql');

module.exports.getAllUser = function (req, res) {
    // Retrieve data from the database and render the view
    db.query('SELECT * FROM todos', (err, todos) => {
        if (err) {
            throw err;
        }
        res.render('index', { todos });
    });
}

// Create a new record
module.exports.create = function (req, res) {
    const { task } = req.body;
    db.query('INSERT INTO todos (task, completed) VALUES (?, ?)', [task, false], (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
}
  
// Update an existing record (GET request for rendering the update form)
module.exports.read = function (req, res) {
    const id = req.params.id;
    // Retrieve the existing data for the specified ID
    db.query('SELECT * FROM my_nodejs_crud WHERE id = ?', [id], (err, rows) => {
        if (err) throw err;
        res.render('edit', { data: rows[0] });
    });
}
  
// Handle the POST request to update a record
module.exports.update = function (req, res) {
    const { id } = req.params;
    const { updatedTask } = req.body;
    db.query('UPDATE todos SET task = ? WHERE id = ?', [updatedTask, id], (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
}
  
// Delete a record
module.exports.delete = function (req, res) {
    const id = req.params.id;
    // Delete the record from the database
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
}
  