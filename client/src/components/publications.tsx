import { useState } from "react";
import { publications } from "@/data/portfolio-data";

// UI filters shown in the component
type Category = "all" | "healthcare" | "systems";
const categories: Category[] = ["all", "healthcare", "systems"];

// Derive the element type from your imported data (now includes `link`)
type Pub = (typeof publications)[number];

const getCategoryLabel = (c: Category | Pub["category"]) => {
  switch (c) {
    case "healthcare":
      return "Healthcare AI";
    case "systems":
      return "Systems";
    default:
      return "All";
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20";
    case "secondary":
      return "bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20";
    case "accent":
      return "bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20";
    case "purple":
      return "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200";
    default:
      return "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200";
  }
};

const getTextColor = (color: string) => {
  switch (color) {
    case "primary":
      return "text-primary";
    case "secondary":
      return "text-secondary";
    case "accent":
      return "text-accent";
    case "purple":
      return "text-purple-600";
    default:
      return "text-gray-600";
  }
};

const getBadgeColor = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-primary/20 text-primary";
    case "secondary":
      return "bg-secondary/20 text-secondary";
    case "accent":
      return "bg-accent/20 text-accent";
    case "purple":
      return "bg-purple-200 text-purple-600";
    default:
      return "bg-gray-200 text-gray-600";
  }
};

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  // publications already has the correct type (with `link`)
  const items = publications;

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((p) => p.category === selectedCategory);

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">Publications</h2>
          <p className="mt-2 text-gray-600">
            Selected peer-reviewed work and technical writing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {filtered.map((p: Pub) => (
            <div
              key={p.id}
              className={`p-6 rounded-xl border hover:shadow-lg transition-shadow ${getColorClasses(
                p.color
              )}`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className={`text-sm font-semibold mb-2 ${getTextColor(p.color)}`}>
                  {p.venue} {!!p.year && <span> · {p.year}</span>}
                  {p.award && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      {p.award}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{p.authors}</p>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(
                    p.color
                  )}`}
                >
                  {getCategoryLabel(
                    (p.category === "healthcare" || p.category === "systems"
                      ? p.category
                      : "all") as Category
                  )}
                </span>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium hover:underline ${getTextColor(
                    p.color
                  )}`}
                  title="Open publication"
                >
                  View Details <span aria-hidden="true" className="ml-1">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer link to Scholar (optional) */}
        <div className="text-center mt-12">
          <a
            href="https://scholar.google.de/citations?hl=en&user=v6xGwm8AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View All Publications on Google Scholar
            <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}