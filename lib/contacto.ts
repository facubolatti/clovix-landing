/**
 * El WhatsApp comercial de Clovix.
 *
 * Misma regla que `urls.ts`: el número se escribe acá y en ningún otro lado.
 * El botón flotante, el pie y las líneas de "¿Preferís WhatsApp?" lo toman de
 * este archivo, así que si cambia la línea se corrige en un solo lugar.
 */

/** Para el enlace de wa.me: país, 9 de celular, característica y número, sin espacios. */
export const WHATSAPP_NUMERO = "5493493419942";

/** Como se lee en pantalla. */
export const WHATSAPP_VISIBLE = "3493 41-9942";

/** El texto que llega precargado en el chat, según la página desde donde se escribe. */
export const MENSAJES_WHATSAPP = {
  home: "Hola, vengo de clovix.app y quiero saber más.",
  soluciones: "Hola, quiero saber más sobre las soluciones de Clovix.",
  nexo: "Hola, quiero saber más de Clovix Nexo.",
} as const;

export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
