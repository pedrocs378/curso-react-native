exports.up = async function (knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNullable()
        table.datetime('estimateAt')
        table.datetime('doneAt')
        table.integer('userId').references('id').inTable('users').notNullable()
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTable('tasks')
}