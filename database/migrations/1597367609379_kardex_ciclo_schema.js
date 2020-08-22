'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KardexCicloSchema extends Schema {
    up() {
        this.create('kardex_ciclos', (table) => {
            table.increments()
            table.string('CICLO')
            table.integer('ID_ALUMNO')
            table.integer('MATRICULA')
            table.string('SECCION')
            table.string('GRADO')
            table.string('GRUPO')
            table.string('STAT_ALUMNO')
            table.date('FECHA_INSC')
            table.date('FECHA_BAJA')
            table.string('STAT_INSC')
            table.string('SEMESTRE')
            table.datetime('FECHA_OPER')
            table.timestamps()
        })
    }

    down() {
        this.drop('kardex_ciclos')
    }
}

module.exports = KardexCicloSchema