import type { MetadataRoute } from 'next'

// Genera /robots.txt
//
// La landing SÍ quiere aparecer en buscadores: es el material de venta.
// Hasta el 03/09 el archivo no existía y cada pedido devolvía 404.
//
// El sistema (nexo.clovix.app) tiene su propio robots.txt y dice lo contrario:
// ahí no se indexa nada. Son dos sitios distintos con decisiones opuestas.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}
