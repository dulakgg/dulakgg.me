import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const websites = [
  {
    name: "Global Stats Viewer",
    url: "https://globalstatsviewer.com",
    image:
      "/gsv.png",
    description:
      "Global Stats Viewer aims to expand upon the idea of a stats viewer by creating a ranking system that takes all of your accomplishments in rated Geometry Dash levels.",
  },
  {
    name: "Nine Circles Demon List",
    url: "https://ninecirclesdemonlist.com",
    image:
      "/ncdl.png",
    description:
      "The Go-To Ranking of EVERY Nine Circles Demon!",
  },
];

const techStack = [
  "CSS",
  "Tailwind",
  "HTML",
  "React",
  "GitHub",
  "Python",
  "TypeScript",
];

export default function WebsitesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-text text-4xl md:text-5xl font-bold mb-3">Websites</h1>
          <p className="text-text opacity-80 mb-8 md:text-lg">
            Projects I actively work on.
          </p>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {websites.map((site) => (
              <li
                key={site.name}
                className="overflow-hidden rounded-2xl border-3 border-border bg-footer shadow-md"
              >
                <a href={site.url} target="_blank" rel="noreferrer" className="block">
                  <img
                    src={site.image}
                    alt={`${site.name} screenshot`}
                    className="h-56 w-full object-cover border-b-3 border-border"
                  />
                </a>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-text text-2xl font-bold">{site.name}</h2>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-lg bg-button px-3 py-2 text-highlight hover:bg-button-hover transition-colors"
                    >
                      Visit
                    </a>
                  </div>

                  <p className="mt-3 text-text opacity-85">{site.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <section className="mt-10 rounded-2xl border-3 border-border bg-footer p-5">
            <h2 className="text-text text-2xl font-bold mb-3">Tech Stacks</h2>
            <p className="text-text opacity-80 mb-4">
              I am flexible and can adjust based on the project.
            </p>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border-2 border-border px-3 py-1 text-sm text-text bg-background"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
