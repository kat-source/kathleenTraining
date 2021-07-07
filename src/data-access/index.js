const db = require('./config/database')


// Test DB connection
db.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(err => console.log('Error: ' + err))

const services = Object.freeze({ db })

module.exports = { 
    services, 
    db 
}