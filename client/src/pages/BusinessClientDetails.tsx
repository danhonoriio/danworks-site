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
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-3xl font-bold">Business client billing details</h1>
        <p className="mb-8 text-gray-600">
          Please fill in your billing details so I can prepare the invoice correctly.
        </p>

        <iframe
          data-tally-src="https://tally.so/embed/b5rEd1?alignLeft=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1009"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Business client billing details"
        />
      </div>
    </main>
  );
}
