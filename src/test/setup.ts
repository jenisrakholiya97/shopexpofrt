import '@testing-library/jest-dom/vitest'

// Mock window.scrollTo for tests
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
})

// Mock HTMLElement.prototype.scrollIntoView for tests in JSDOM
if (typeof window !== 'undefined' && window.HTMLElement) {
  window.HTMLElement.prototype.scrollIntoView = function () {}
}
