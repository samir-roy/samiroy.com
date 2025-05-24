/**
 * Sets the theme based on localStorage or system preference
 * Used in both gatsby-browser.js and gatsby-ssr.js to prevent theme flickering
 */
export const initializeTheme = () => {
  return `
    (function() {
      try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          document.documentElement.setAttribute('data-theme', savedTheme);
        }
      } catch (e) {
        // Handle case where localStorage is not available
      }
    })();
  `;
};