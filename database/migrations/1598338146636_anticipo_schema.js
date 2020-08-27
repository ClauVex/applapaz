'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnticipoSchema extends Schema {
    up() {
        this.create('anticipos', (table) => {
            table.increments()
            table.string('CICLO_ESCOL')
            table.integer('ID_ALUMNO')
            table.string('MATRICULA')
            table.integer('ID_OPER')
            table.float('IMPORTE_ANTIC', 10, 2)
            table.float('IMPORTE_APLIC', 10, 2)
            table.date('FECHA_DOC')
            table.integer('FACT_APLIC')
            table.string('STAT_OPER')
            table.string('OBSERV')
            table.datetime('FECHA_CAPT')
            table.integer('ID_NOTACRED')
            table.string('FOLIO_SAT')
            table.timestamps()
        })
    }

    down() {
        this.drop('anticipos')
    }
}

module.exports = AnticipoSchema