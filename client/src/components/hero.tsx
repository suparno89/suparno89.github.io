import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-secondary text-white rounded-full text-sm font-medium">
                Large Language Models
              </span>
              <span className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                Healthcare AI
              </span>
              <span className="px-4 py-2 bg-muted text-white rounded-full text-sm font-medium">
                Azure Cloud
              </span>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get In Touch
              </button>
              <a 
                href="/attached_assets/Dec_2024_Suparno_1755268384202.pdf" 
                download="Dr_Suparno_Datta_CV.pdf"
                target="_blank"
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 gradient-primary rounded-2xl flex items-center justify-center shadow-2xl">
              <i className="fas fa-user text-white text-8xl opacity-30"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
