const services = require("../service/groups");
const logger = require("../logs/winston");
const getGroups = async (request, response) => {
  try {
    const groups = await services.getGroups();
    response.status(200).send({ groups });
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
};
//○ Retrieve a group by ID
const getGroupById = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const group = await services.getGroupById(id);
    response.status(200).json(group);
  } catch (error) {
    logger.error(error.message);

    throw error;
  }
};
//○ Create a new group
const createGroup = async (request, response) => {
  try {
    console.log("createcour.controller");
    const { name } = request.body;
    await services.createGroup(name);
    response.status(201).json({ msg: "Group created" });
  } catch (error) {
    throw error;
  }
};

//○ Update a group
const updateGroup = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const { name } = request.body;
    await services.updateGroup(name, id);
    response.status(200).send(`Group modified with ID: ${id}`);
  } catch (error) {
    logger.error(error.message);

    throw error;
  }
};

//○ Delete a group
const deleteGroup = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    await services.deleteGroup(id);
    response.status(200).send(`Group deleted with ID: ${id}`);
  } catch (error) {
    logger.error(error.message);

    throw error;
  }
};

module.exports = {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
};
