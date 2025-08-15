import { skills } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600">
            Expertise across AI/ML, Cloud Technologies, and Programming
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI/ML Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-brain text-primary mr-3"></i>
              AI/ML & Data Science
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills['ai-ml'].map((skill) => (
                <span
                  key={skill.name}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-cloud text-secondary mr-3"></i>
              Cloud & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills['cloud'].map((skill) => (
                <span
                  key={skill.name}
                  className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Programming */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <i className="fas fa-code text-accent mr-3"></i>
              Programming & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills['programming'].map((skill) => (
                <span
                  key={skill.name}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
