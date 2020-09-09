'use strict'
const InfoKardex = use('App/Models/KardexCiclo')
const InfoColegiat = use('App/Models/Colegiat')
const InfoAlumno = use('App/Models/Alumno')
const InfoNotaCred = use('App/Models/NotaCred')
const InfoAnticipo = use('App/Models/Anticipo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with kardexciclos
 */
class KardexCicloController {
    /**
     * Show a list of all kardexciclos.
     * GET kardexciclos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        var ciclo = request.input('CICLO')
        let kardex_ciclos = await InfoKardex.query().where('CICLO', ciclo).fetch()
        return view.render('colegiaturas.index', { kardex_ciclos: kardex_ciclos.rows })
    }

    /**
     * Render a form to be used for creating a new kardexciclo.
     * GET kardexciclos/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new kardexciclo.
     * POST kardexciclos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {}

    /**
     * Display a single kardexciclo.
     * GET kardexciclos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        var data = request.only(['VER', 'CICLO'])
        var id = data['VER']
        var ciclo = data['CICLO']
        let kardex = await InfoKardex.findBy('ID_ALUMNO', id)
        let colegiaturas = await InfoColegiat.query().where({ ID_ALUMNO: id, CICLO: ciclo }).fetch()
        let alumno = await InfoAlumno.findBy('id', id)
        let anticipos = await InfoAnticipo.query().where('ID_ALUMNO', id).fetch()
        let notacreds = await InfoNotaCred.query().where('ID_ALUMNO', id).fetch()
        return view.render('colegiaturas.view', { kardex: kardex, colegiaturas: colegiaturas.rows, alumno: alumno, anticipos: anticipos.rows, notacreds: notacreds.rows, ciclo })
    }

    /**
     * Render a form to update an existing kardexciclo.
     * GET kardexciclos/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update kardexciclo details.
     * PUT or PATCH kardexciclos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a kardexciclo with id.
     * DELETE kardexciclos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = KardexCicloController