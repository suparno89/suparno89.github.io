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
            <p>&copy; 2024 Suparno Datta, PhD. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
