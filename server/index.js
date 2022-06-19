import express from 'express';
import cors from 'cors'
import {todoRouter} from './routes/todos.js'



const app = express()
app.use(express.json())
app.use(cors())

app.use('/todos',todoRouter)

app.listen(5000,() => console.log('server  listening on port 5000...'))