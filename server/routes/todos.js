import express from "express";
export const todoRouter=express.Router()

import {tasks,task,newTask,updateTask,deleteTask} from '../controllers/todos.js';
 
todoRouter.route('/').get(tasks)
todoRouter.route('/:id').get(task)
todoRouter.route('/').post(newTask)
todoRouter.route('/:id').put(updateTask)
todoRouter.route('/:id').delete(deleteTask)




