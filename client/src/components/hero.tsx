import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import profileImg from "@/attached_assets/profile.jpg";
import cvFile from "@/attached_assets/Dec_2024_Suparno_1755268384202.pdf"

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
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
                Time Series
              </span>
              <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
                AI in Healthcare
              </span>
            </div>

            {/* Buttons + Social links inline */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get In Touch
              </button>
              <a
                href={cvFile}
                download="Suparno_Datta_PhD_CV.pdf"
                target="_blank"
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Download CV
              </a>

              {/* Social icons inline with buttons */}
              <div className="flex space-x-4 ml-2">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin text-white text-xl"></i>
                </a>
                <a
                  href={personalInfo.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  title="Google Scholar"
                >
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                  title="GitHub"
                >
                  <i className="fab fa-github text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right column: photo with fallback */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 gradient-primary" aria-hidden="true" />
              {!imgError ? (
                <img
                  src={profileImg} // place your image at client/public/profile.jpg
                  alt={`${personalInfo.name} portrait`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-user text-white text-8xl opacity-30"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
