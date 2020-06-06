import Knex from 'knex'; // Esse Knex é equivalente a um tipo primitivo

// Estou passando o tipo Knex para o knex
export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        // Criando uma relação com a tabela points
        /*Todo id aqui tem que ser um id válido na
        tabela points */
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');

        // Criando uma relação com a tabela items
        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
        
    })

}

export async function down(knex: Knex) {
    // Voltar atras (Deletar a tabela)
    return knex.schema.dropTable('items');
}