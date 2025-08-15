import { experiences } from "@/data/portfolio-data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600">
            A journey from Data Scientist to Tech Leadership
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <i className={`${experience.icon} text-white text-sm`}></i>
                </div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${
                    experience.category === 'current' ? 'border-primary' :
                    experience.category === 'senior' ? 'border-secondary' :
                    experience.category === 'research' ? 'border-purple-600' :
                    'border-muted'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className={`font-semibold ${
                          experience.category === 'current' ? 'text-primary' :
                          experience.category === 'senior' ? 'text-secondary' :
                          experience.category === 'research' ? 'text-purple-600' :
                          'text-muted-foreground'
                        }`}>
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-500">
                          {experience.period} | {experience.location}
                        </p>
                      </div>
                      {experience.current && (
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <i className="fas fa-check text-accent mt-1 mr-2 text-sm"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
