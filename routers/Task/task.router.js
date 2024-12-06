const {Router} = require('express')
const {allTask, AddTask, UpdateTask, DeleteTask, TaskFiltering} = require('../../controllers/Task/task.controller')
const TaskMange = require('../../middlewares/taskManage.middlewares')

const taskRouter = Router()


taskRouter.get('/show',allTask)
taskRouter.get('/tasks',TaskFiltering)

taskRouter.post('/add',AddTask)

taskRouter.patch('/taskUpdate/:TaskID',UpdateTask)
taskRouter.delete('/taskDelete/:DeleteTaskID',DeleteTask)


module.exports=taskRouter