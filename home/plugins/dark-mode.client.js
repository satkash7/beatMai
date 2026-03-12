export default defineNuxtPlugin(() => {
  // Dark mode management
  const darkMode = {
    isDark: false,
    
    init() {
      // Check localStorage or system preference
      if (typeof window !== 'undefined') {
        const savedMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        this.isDark = savedMode ? savedMode === 'true' : prefersDark;
        this.apply();
      }
    },
    
    toggle() {
      this.isDark = !this.isDark;
      this.apply();
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', this.isDark);
      }
    },
    
    apply() {
      if (typeof document !== 'undefined') {
        if (this.isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  };
  
  // Initialize on mount
  darkMode.init();
  
  // Make it available globally
  if (typeof window !== 'undefined') {
    window.$darkMode = darkMode;
  }

  return {
    provide: {
      darkMode
    }
  }
})
