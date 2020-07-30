'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('alumnos', 'AlumnoController.index')
Route.get('alumnos/crear', 'AlumnoController.create')
Route.post('alumnos/crear', 'AlumnoController.store')
Route.get('alumnos/editar/:id', 'AlumnoController.edit')
Route.post('alumnos/editar/:id', 'AlumnoController.update')
Route.get('alumnos/ver/:id', 'AlumnoController.show')