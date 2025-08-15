import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ExperienceTimeline from "@/components/experience-timeline";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Publications from "@/components/publications";
import Awards from "@/components/awards";
import Languages from "@/components/languages";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Key Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PhD Computer Science</h3>
              <p className="text-gray-600">Magna Cum Laude from Hasso Plattner Institute</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Microsoft RISE Award</h3>
              <p className="text-gray-600">2023 Outstanding Team Accomplishment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-accent text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Paper Award</h3>
              <p className="text-gray-600">AIME 2020 Conference</p>
            </div>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <Education />
      <Skills />
      <Publications />
      <Awards />
      <Languages />
      <Contact />

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Dr. Suparno Datta. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
