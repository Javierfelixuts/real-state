import Swal from "sweetalert2";

export default function SectionYards() {
  async function showPlane() {
    Swal.fire({
      imageUrl: "src/assets/images/plane.png",
      width: '90%',
      imageWidth: 1020,
      imageHeight: 400,
      imageAlt: "Custom image",
      confirmButtonText: "CLOSE",
      confirmButtonColor: "#6f5c48",
    });
  }
  return (<>

    <section className="relative not-prose scroll-mt-[72px]">
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
        <div className="flex flex-col lg:justify-between lg:flex-row mb-8">
          <div className="md:max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">
              Projects
            </h2><a className="cursor-pointer hover:text-primary" href="/blog"> View all posts » </a>
          </div>
        </div><div className="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">
          <article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a className="plane" data-astro-source-loc="25:26">
                <div className="showPlane">
                  <button onClick={showPlane}>Show plane</button>
                </div>
                <img
                  src="src/assets/images/plane.png"
                  className="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                  width="400"
                  sizes="(max-width: 900px) 400px, 900px"
                  alt="Get started with Real State to create a website using Astro and Tailwind CSS"
                />
              </a>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
              <a
                className="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
                href="#"
              >
                Get started with Real State to create a website using Astro and Tailwind CSS
              </a>
            </h3>
            <p className="text-muted dark:text-slate-400 text-lg">
              Start your web journey with Real State – harness Astro and Tailwind CSS for a stunning site. Explore our guide
              now.
            </p>
          </article><article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a href="#">
                <img
                  src="src/assets/images/yard_02.jpeg"
                  className="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                  width="400"
                  sizes="(max-width: 900px) 400px, 900px"
                  alt="Useful tools and resources to create a professional website"
                />
              </a>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
              <a
                className="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
                href="#"
              >
                Useful tools and resources to create a professional website
              </a>
            </h3>
            <p className="text-muted dark:text-slate-400 text-lg">
              Explore vital tools and resources for a sleek website. From design to functionality, our guide elevates your
              online presence.
            </p>
          </article><article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a href="/how-to-customize-Real State-to-your-brand">
                <img
                  src="src/assets/images/yard_03.jpeg"
                  className="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                  width="400"
                  sizes="(max-width: 900px) 400px, 900px"
                  alt="How to customize Real State template to suit your branding"
                />
              </a>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
              <a
                className="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
                href="/how-to-customize-Real State-to-your-brand"
              >
                How to customize Real State template to suit your branding
              </a>
            </h3>
            <p className="text-muted dark:text-slate-400 text-lg">
              Personalize Real State template for your brand. Our guide unlocks seamless customization steps for a unique
              online presence.
            </p>
          </article><article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a href="/Real State-template-in-depth">
                <img
                  src="src/assets/images/yard_04.jpeg"
                  className="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                  width="400"
                  sizes="(max-width: 900px) 400px, 900px"
                  alt="Real State template in depth"
                />
              </a>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
              <a
                className="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
                href="/Real State-template-in-depth"
              >
                Real State template in depth
              </a>
            </h3>
            <p className="text-muted dark:text-slate-400 text-lg">
              While easy to get started, Real State is quite complex internally. This page provides documentation on some of
              the more intricate parts.
            </p>
          </article>
        </div>
      </div>
    </section>
  </>)
}
