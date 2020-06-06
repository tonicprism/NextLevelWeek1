import Knex from 'knex'; // Esse Knex é equivalente a um tipo primitivo

// Estou passando o tipo Knex para o knex
export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })

}

export async function down(knex: Knex) {
    // Voltar atras (Deletar a tabela)
    return knex.schema.dropTable('points');
}