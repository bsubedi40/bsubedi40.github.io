
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';

const AboutSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'ORCiD', url: '#', icon: '🔬' },
    { name: 'Google Scholar', url: '#', icon: '🎓' }
  ];

  return (
    <section id="about" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Basanta Subedi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
                Basanta Subedi
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                Physics Graduate Student & Emerging Researcher
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate physics graduate from Tribhuvan University, Nepal, joining Purdue University, 
                West Lafayette, Indiana this Fall as a PhD student. My research interests span across 
                biophysics, molecular biology, protein-protein/ligand interactions, and radiation shielding.
              </p>
            </div>

            {/* Quote */}
            <Card className="border-l-4 border-l-blue-500 bg-blue-50 dark:bg-blue-900/20">
              <CardContent className="pt-6">
                <blockquote className="italic text-gray-700 dark:text-gray-300">
                  "Science is not just about discovering what exists, but about understanding 
                  how we can harness that knowledge to solve humanity's greatest challenges."
                </blockquote>
              </CardContent>
            </Card>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="hover:scale-105 transition-transform">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" className="hover:scale-105 transition-transform">
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
