
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 min-h-screen">
        {/* Dark Mode Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-110 transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-yellow-500" />
            ) : (
              <Moon className="h-4 w-4 text-blue-600" />
            )}
          </Button>
        </div>

        <Navbar />
        
        <main className="relative">
          <AboutSection />
          <ResearchSection />
          <PublicationsSection />
          <ContactSection />
        </main>

        {/* Particle Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
