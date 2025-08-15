import { languages } from "@/data/portfolio-data";

export default function Languages() {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'orange-500': return 'bg-orange-500';
      case 'primary': return 'bg-primary';
      case 'secondary': return 'bg-secondary';
      default: return 'bg-gray-500';
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'orange-500': return 'text-orange-500';
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Languages
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {languages.map((language) => (
            <div key={language.name} className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClass(language.color)}`}>
                <i className={`${language.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{language.name}</h3>
              <p className={`font-medium ${getTextColor(language.color)}`}>
                {language.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
