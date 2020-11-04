exports.up = knex => 
knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.string('name', 20).unique().notNullable()
    table.string('password', 150).notNullable()
    table.string('email', 20).unique().notNullable()
})

exports.down = knex => knex.schema.drobTable('users')