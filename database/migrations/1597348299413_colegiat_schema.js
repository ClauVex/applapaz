'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColegiatSchema extends Schema {
    up() {
        this.create('colegiats', (table) => {
            table.increments()
            table.integer('ID_ALUMNO')
            table.string('MATRICULA')
            table.string('CICLO')
            table.integer('AN_ESCOL')
            table.integer('MES')
            table.string('TIPO_COLEG')
            table.integer('IMP_ORIG')
            table.integer('CLV_BECA')
            table.integer('IMP_BECA')
            table.integer('IMP_COLEG')
            table.date('FECHA_LIM')
            table.date('FECHA_PAGO')
            table.string('STAT_PAGO')
            table.integer('SEG_ORF')
            table.integer('DESCUENTO')
            table.integer('RECARGO')
            table.string('ST_PAG_INT')
            table.string('FORMA_PAGO')
            table.string('REFER_PAGO')
            table.string('LOTE_FACT')
            table.integer('CONSEC_FACT')
            table.date('FECHA_OPER')
            table.string('LOTE_INTER')
            table.integer('CONSEC_INT')
            table.date('FEC_PAG_INT')
            table.integer('CONDONADO')
            table.date('FECHA_COND');
            table.string('CONCEP_COND')
            table.string('CONCEP_DESCTO')
            table.integer('ID_NOTACRED')
            table.datetime('FEC_ALTA')
            table.timestamps()
        })
    }

    down() {
        this.drop('colegiats')
    }
}

module.exports = ColegiatSchema