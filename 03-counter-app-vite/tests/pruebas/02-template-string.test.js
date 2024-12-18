import { getSaludo } from "../../src/pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => { 
  test('getSaludo debe retornar "hola mundo"', () => { 
    const nombre = 'mundo'
    const saludo = getSaludo(nombre)
    expect(saludo).toBe(`Hola ${nombre}`)
   })
 })