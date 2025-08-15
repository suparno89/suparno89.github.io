import { education } from "@/data/portfolio-data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600">
            Academic foundation in Computer Science and AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className={`p-8 rounded-xl border ${
                edu.color === 'primary'
                  ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'
                  : edu.color === 'secondary'
                  ? 'bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20'
                  : 'bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20'
              }`}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    edu.color === 'primary'
                      ? 'bg-primary'
                      : edu.color === 'secondary'
                      ? 'bg-secondary'
                      : 'bg-accent'
                  }`}
                >
                  <i className={`fas ${
                    edu.degree.includes('Dr') ? 'fa-graduation-cap' : 
                    edu.degree.includes('MSc') ? 'fa-laptop-code' : 
                    'fa-code'
                  } text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <p
                  className={`font-semibold ${
                    edu.color === 'primary'
                      ? 'text-primary'
                      : edu.color === 'secondary'
                      ? 'text-secondary'
                      : 'text-accent'
                  }`}
                >
                  {edu.field}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Institution:</strong> {edu.institution}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Period:</strong> {edu.period}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Grade:</strong> {edu.grade}
                </p>
                {edu.thesis && (
                  <p className="text-sm text-gray-600">
                    <strong>Thesis:</strong> {edu.thesis}
                  </p>
                )}
                {edu.focus && (
                  <p className="text-sm text-gray-600">
                    <strong>Focus:</strong> {edu.focus}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
