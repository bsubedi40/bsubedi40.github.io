
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const PublicationsSection = () => {
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null);

  const publications = [
    {
      title: "Computational Analysis of Radiation Shielding Properties in Zn-Pb Binary Alloys",
      authors: "B. Subedi, R. Sharma, M. K. Singh",
      journal: "Physica Scripta",
      year: "2024",
      doi: "10.1088/example",
      abstract: "This study presents a comprehensive computational analysis of radiation shielding properties in zinc-lead binary alloys using Monte Carlo simulations and theoretical calculations...",
      type: "Research Article"
    },
    {
      title: "Peptidomimetic Alpha-Ketoamides as Potential Inhibitors of SARS-CoV-2 Main Protease: A Molecular Docking Study",
      authors: "B. Subedi, A. Kumar, P. Thapa",
      journal: "Heliyon",
      year: "2023",
      doi: "10.1016/example",
      abstract: "We report the design and evaluation of novel peptidomimetic alpha-ketoamide compounds as potential inhibitors for SARS-CoV-2 main protease through molecular docking studies...",
      type: "Research Article"
    },
    {
      title: "Computational Study of Protein-Ligand Interactions in Drug Design",
      authors: "B. Subedi, S. Pradhan",
      journal: "International Journal of Engineering Science and Technology",
      year: "2023",
      doi: "10.1234/example",
      abstract: "This work explores computational methodologies for studying protein-ligand interactions with applications in pharmaceutical drug design and development...",
      type: "Review Article"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedPaper(expandedPaper === index ? null : index);
  };

  return (
    <section id="publications" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Publications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Peer-reviewed articles and research contributions
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((paper, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 shadow-md">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2 text-gray-800 dark:text-white">
                      {paper.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <div className="mb-1">{paper.authors}</div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                        <span>{paper.journal}</span>
                        <span>•</span>
                        <span>{paper.year}</span>
                      </div>
                    </CardDescription>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      DOI
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <Collapsible open={expandedPaper === index} onOpenChange={() => toggleExpand(index)}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between px-6 py-2">
                    <span>Abstract</span>
                    {expandedPaper === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            More publications coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
