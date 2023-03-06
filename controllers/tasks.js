const services = require('../service/tasks')

const getTasks = async (request, response) => {
    try {
      const tasks = await services.getTasks();
      response.status(200).send({ tasks });
    } catch (error) {
      throw error;
    }
  };
  
  // get simple Task with req.params.id: id
  const getTaskById = async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      const task = await services.getTaskById(id)
      response.status(200).json(task);
      } catch (error) {
      throw error;
      }
      
  };
  
  const createTask = async (request, response) => {
    console.log('create task')
    try {
      const { title, description } = request.body;
      console.log('controller task', title, description)
      await services.createTask(title, description)
      response.status(201).json({msg:"task created"});
    } catch (error) {
      throw error;
    }
  };
  
  
  const updateTask = async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      const { title, description, user_id, group_id } = request.body;
      console.log(request.body, 'body')
      console.log()
      await services.updateTask(title, description, user_id, group_id, id)
      response.status(200).send(`Task modified with ID: ${id}`);
    } catch (error) {
      throw error;
    }
  };
  
  
  const deleteTask = async (request, response) => {
    try {
      const id = parseInt(request.params.id);
      await services.deleteTask(id)
      response.status(200).send(`Task deleted with ID: ${id}`);
    } catch (error) {
      throw error;
    }
  };
  

  module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}