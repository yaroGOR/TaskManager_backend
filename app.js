const express = require('express');
// const path = require('path')
const http = require('http')
const dotenv = require('dotenv')

const usersRouter = require('./routes/users')
const tasksRouter = require('./routes/tasks')
const groupsRouter = require('./routes/groups')

const connectToDB = require('./models/index')
connectToDB()

dotenv.config()
const app = express()
const server = http.createServer(app)

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter)
app.use('/tasks', tasksRouter)
app.use('/groups', groupsRouter)


console.log(process.env.NODE_ENV)
const PORT =  process.env.PORT || 3000;

server.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})