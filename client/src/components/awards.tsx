import { awards } from "@/data/portfolio-data";

export default function Awards() {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'yellow-400': return 'border-yellow-400';
      case 'primary': return 'border-primary';
      case 'accent': return 'border-accent';
      default: return 'border-gray-300';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'yellow-400': return 'bg-yellow-100 text-yellow-600';
      case 'primary': return 'bg-blue-100 text-primary';
      case 'accent': return 'bg-green-100 text-accent';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'yellow-400': return 'text-yellow-600';
      case 'primary': return 'text-primary';
      case 'accent': return 'text-accent';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 gradient-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Honors & Awards
          </h2>
          <p className="text-lg text-gray-600">
            Recognition for excellence in research and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {awards.slice(0, 2).map((award) => (
            <div
              key={award.id}
              className={`bg-white p-8 rounded-xl shadow-lg border-l-4 ${getColorClass(award.color)}`}
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${getIconColor(award.color)}`}>
                  <i className={`${award.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <p className={`font-semibold mb-2 ${getTextColor(award.color)}`}>
                    {award.organization}, {award.year}
                  </p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {awards.slice(2).map((award) => (
            <div
              key={award.id}
              className={`bg-white p-8 rounded-xl shadow-lg border-l-4 md:col-span-2 ${getColorClass(award.color)}`}
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${getIconColor(award.color)}`}>
                  <i className={`${award.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <p className={`font-semibold mb-2 ${getTextColor(award.color)}`}>
                    {award.organization}, {award.year}
                  </p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
