'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotaCredSchema extends Schema {
    up() {
        this.create('nota_creds', (table) => {
            table.increments()
            table.string('TIPO_NC')
            table.date('FECHA_NC')
            table.float('IMPORTE', 10, 2)
            table.string('CONCEPTO')
            table.string('LOTE_FACT')
            table.integer('CONSEC_FACT')
            table.date('FECHA_FACT')
            table.float('IMPORTE_FACT', 16, 2)
            table.string('CICLO')
            table.integer('ID_ALUMNO')
            table.string('MATRICULA')
            table.string('NOM_FACT')
            table.string('FOLIO_SAT')
            table.date('FECHA_OPER')
            table.integer('CLV_BECA')
            table.integer('MES_BECA')
            table.integer('ID_OPER')
            table.string('STAT_SAT_NC')
            table.datetime('FEC_ALTA')
            table.timestamps()
        })
    }

    down() {
        this.drop('nota_creds')
    }
}

module.exports = NotaCredSchema