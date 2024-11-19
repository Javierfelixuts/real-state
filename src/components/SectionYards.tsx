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

    <section className="relative not-prose scroll-mt-[72px] intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">
      <div className="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default">
        <div className="flex flex-col lg:justify-between lg:flex-row mb-8">
          <div className="md:max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">
              Projects
            </h2>
          </div>
        </div>
        <div className="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">
          <article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a className="plane" >
                <div className="showPlane">
                  <button onClick={showPlane} className="text-white">Show plane</button>
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
                className="inline-block hover:text-primary transition ease-in duration-200"
              >
                PLANE
              </a>
            </h3>
            
          </article><article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a >
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
                className="inline-block hover:text-primary transition ease-in duration-200"
              >
                Create a modern and functional house on strategically located land.
              </a>
            </h3>
            
          </article><article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a>
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
                className="inline-block hover:text-primary transition ease-in duration-200"
              >
                 Maximize the value of the land through an efficient and attractive design.
              </a>
            </h3>
           
          </article><article className="mb-6 transition">
            <div className="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
              <a >
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
                className="inline-block hover:text-primary transition ease-in duration-200"
                
              >
                Real State template in depth
              </a>
            </h3>
            
          </article>
        </div>
      </div>
    </section>
  </>)
}
