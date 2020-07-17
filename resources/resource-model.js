let db = require('../data/db-config');

module.exports = {
    // ***** Resources
    findResourceById,
    findAllResources,
    addResource,
    // ***** Projects
    findProjectsById,
    findAllProjects,
    addProject,
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
