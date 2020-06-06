import Knex from 'knex'; // Esse Knex é equivalente a um tipo primitivo

// Estou passando o tipo Knex para o knex
export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
        
    })

}

export async function down(knex: Knex) {
    // Voltar atras (Deletar a tabela)
    return knex.schema.dropTable('items');
}