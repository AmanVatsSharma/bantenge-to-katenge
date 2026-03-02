/**
 * Fire Meta Pixel event (client-side only)
 */
export function trackPixel(event, data = {}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data)
  }
}
