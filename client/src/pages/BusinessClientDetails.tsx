import { useEffect } from "react";

export default function BusinessClientDetails() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e) => {
          const iframe = e as HTMLIFrameElement;
          iframe.src = iframe.dataset.tallySrc || "";
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector(`script[src="${w}"]`) === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f8f6] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Danilo Works"
              className="h-14 w-auto"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Danilo Works
              </p>
              <h1 className="text-3xl font-bold text-gray-900">
                Business client billing details
              </h1>
              <p className="mt-2 text-gray-600">
                Please fill in your billing details so I can prepare the invoice correctly.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <iframe
            data-tally-src="https://tally.so/embed/b5rEd1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="1009"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Business client billing details"
          />
        </div>
      </div>
    </main>
  );
}
