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
