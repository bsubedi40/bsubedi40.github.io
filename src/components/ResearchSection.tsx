
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResearchSection = () => {
  const researchAreas = [
    {
      title: "Computational Biophysics",
      description: "Molecular dynamics simulations and protein structure analysis",
      color: "bg-blue-500"
    },
    {
      title: "Drug Design",
      description: "Peptidomimetic compounds and binding efficacy studies",
      color: "bg-green-500"
    },
    {
      title: "Materials Science",
      description: "Radiation shielding properties of metal alloys",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="research" className="py-16 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Research
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Exploring the intersection of physics, biology, and computational science
          </p>
        </div>

        {/* Main Dissertation */}
        <Card className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
              M.Sc. Dissertation
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Design of Peptidomimetic Alpha-Ketoamides and Study of Binding Efficacy to SARS–CoV–2 Main Protease
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Objectives:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Design and evaluate novel peptidomimetic alpha-ketoamide compounds as potential 
                inhibitors for SARS-CoV-2 main protease through computational approaches.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Methodology:</h4>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">Molecular Docking</Badge>
                <Badge variant="secondary">MD Simulation</Badge>
                <Badge variant="secondary">Protein-Ligand Interactions</Badge>
                <Badge variant="secondary">Drug Design</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Utilized advanced computational tools including molecular docking studies and 
                molecular dynamics simulations to assess binding affinity and stability.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Impact:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Contributed to the understanding of peptidomimetic compounds as potential 
                therapeutic agents against COVID-19, with implications for future antiviral drug development.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${area.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Research */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-purple-600 dark:text-purple-400">
              Radiation Shielding Research
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Investigated radiation shielding properties of Zn-Pb binary alloys and other materials 
              using computational tools including Phy-X/PSD and SRIM software packages.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Phy-X/PSD</Badge>
              <Badge variant="outline">SRIM</Badge>
              <Badge variant="outline">Material Analysis</Badge>
              <Badge variant="outline">Radiation Physics</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResearchSection;
