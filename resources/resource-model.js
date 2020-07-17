let db = require('../data/db-config');
const { where } = require('../data/db-config');

module.exports = {
    // ***** Resources
    findResourceById,
    findAllResources,
    addResource,
    // ***** Projects
    findProjectsById,
    findAllProjects,
    addProject,
    // ***** Tasks
    findTaskById,
    addTask,
    findById
}

function findResourceById(id) {
    return db("resources")
        .where({ id })
        .first();
}

function findAllResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => {
            return findResourceById(id)
        })
}

// ================================== PROJECTS
function findProjectsById(id) {
    return db("projects")
        .where({ id })
        .first();
}
function findAllProjects() {
    return db('projects')
}

function addProject(project) {
    return db('projects')
    .insert(project, "id")
    .then(([id]) => {
        return findProjectsById(id)
    })
}

// ================================== TASKS

function findTaskById(id) {
    return db('tasks')
    .where(({ id }))
    .first();
}

function findById(id) {
    return db('tasks as T')
    .join("projects as P", "P.id", "T.project_id")
    .where("project_id", id)
    .select("P.name", "P.description", "T.description")
}


function addTask(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(([id]) => {
        return findTaskById(id);
    })
}