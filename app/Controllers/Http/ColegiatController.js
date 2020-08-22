'use strict'
const InfoKardex = use('App/Models/KardexCiclo')
const InfoColegiat = use('App/Models/Colegiat')
const InfoAlumno = use('App/Models/Alumno')
    /** @typedef {import('@adonisjs/framework/src/Request')} Request */
    /** @typedef {import('@adonisjs/framework/src/Response')} Response */
    /** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with colegiats
 */
class ColegiatController {
    /**
     * Show a list of all colegiats.
     * GET colegiats
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        var data = request.input('VER')
        let info_kardex = await InfoKardex.query().where('ID_ALUMNO', data).fetch()
        let info_colegiat = await InfoColegiat.query().where('ID_ALUMNO', data).fetch()
        let info_alumno = await InfoAlumno.query().where('id', data).fetch()
        return view.render('colegiaturas.view', { info_kardex: info_kardex }, { info_colegiat: info_colegiat.rows }, { info_alumno: info_alumno })
    }

    /**
     * Render a form to be used for creating a new colegiat.
     * GET colegiats/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new colegiat.
     * POST colegiats
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {}

    /**
     * Display a single colegiat.
     * GET colegiats/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing colegiat.
     * GET colegiats/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update colegiat details.
     * PUT or PATCH colegiats/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a colegiat with id.
     * DELETE colegiats/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = ColegiatController