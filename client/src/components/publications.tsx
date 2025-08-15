import { useState } from "react";
import { publications } from "@/data/portfolio-data";

type Category = 'all' | 'healthcare' | 'ml' | 'systems';

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'healthcare': return 'Healthcare AI';
      case 'ml': return 'Machine Learning';
      case 'systems': return 'Systems';
      default: return 'All';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20';
      case 'secondary': return 'bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20';
      case 'accent': return 'bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20';
      case 'purple': return 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200';
      default: return 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      case 'purple': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/20 text-primary';
      case 'secondary': return 'bg-secondary/20 text-secondary';
      case 'accent': return 'bg-accent/20 text-accent';
      case 'purple': return 'bg-purple-200 text-purple-600';
      default: return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Selected Publications
          </h2>
          <p className="text-lg text-gray-600">
            Research contributions in AI, Machine Learning, and Healthcare
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {(['all', 'healthcare', 'ml', 'systems'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className={`p-6 rounded-xl border hover:shadow-lg transition-shadow ${getColorClasses(publication.color)}`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {publication.title}
                </h3>
                <p className={`text-sm font-semibold mb-2 ${getTextColor(publication.color)}`}>
                  {publication.venue}
                  {publication.award && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      {publication.award}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{publication.authors}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(publication.color)}`}>
                  {getCategoryLabel(publication.category)}
                </span>
                <button className={`text-sm font-medium hover:underline ${getTextColor(publication.color)}`}>
                  View Details <i className="fas fa-external-link-alt ml-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://scholar.google.de/citations?hl=en&user=v6xGwm8AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View All Publications on Google Scholar <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
