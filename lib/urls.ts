/**
 * Los enlaces de la landing hacia la aplicación.
 *
 * POR QUÉ EXISTE ESTE ARCHIVO
 *
 * El 11/08/2026 los seis botones "Empezar gratis" de la página de Nexo, más el
 * de la página de productos, apuntaban a `nexo.clovix.app/sign_up` —con guión
 * bajo—, y la ruta que existe es `/sign-up`, con guión medio. Siete enlaces
 * escritos a mano, los siete con el mismo error de un carácter.
 *
 * El resultado es el peor que puede tener una landing: **el único camino de
 * alta automática devolvía 404**. Alguien que entra, lee, se decide y aprieta
 * el botón, se va sin dejar rastro. No queda ni un lead que recuperar después,
 * porque nunca llegó a un formulario.
 *
 * Y no se notó por meses porque no hay nada que lo note: un 404 en un enlace
 * saliente no rompe el build, no aparece en los logs de la landing y no genera
 * ninguna alerta.
 *
 * LA REGLA
 *
 * Ningún enlace a la aplicación se escribe a mano en una página. Van todos por
 * acá. Si mañana cambia el dominio o se renombra una ruta, se corrige en un
 * lugar y no en siete, y no hay forma de que dos páginas discrepen.
 */

/** Alta de cuenta nueva. Ojo: guión MEDIO, es la ruta real de la app. */
export const NEXO_SIGNUP = "https://nexo.clovix.app/sign-up";

/** Ingreso de usuarios que ya tienen cuenta. */
export const NEXO_LOGIN = "https://nexo.clovix.app/login";
