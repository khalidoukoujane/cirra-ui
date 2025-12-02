import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center flex-1 px-4">
      {/* Hero Section */}
      <div className="w-full md:w-[85%] lg:w-[70%] xl:w-[60%] flex flex-col items-center justify-center gap-4 md:gap-5 mt-12 md:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
          Lightweight UI for creators
        </h1>
        <p className="w-full sm:w-[85%] md:w-[75%] lg:max-w-[50%] text-center text-fd-muted-foreground text-sm sm:text-base">
          Cirra UI blends clean styling with gentle animations to help you build
          polished interfaces with clarity and flow.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 md:mt-4 w-full sm:w-auto">
          <Link
            href="/components/button"
            className="px-6 py-2.5 bg-foreground text-background rounded-lg font-medium hover:underline duration-200 text-center"
          >
            Browse Components
          </Link>
          <Link
            href="/components"
            className="px-6 py-2.5 border border-border rounded-lg font-medium text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-full max-w-6xl mt-20 md:mt-32 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          <div className="md:col-span-2 flex flex-col justify-between p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 min-h-[280px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Copy & Paste</h3>
              <p className="text-muted-foreground leading-relaxed">
                No installation needed. Just copy the code and paste it into
                your project. Own your components and customize them however you
                want.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 min-h-[280px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Minimal</h3>
              <p className="text-sm text-muted-foreground">
                Lightweight components that don't bloat your bundle.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 min-h-[280px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6M12 17v6M4.2 4.2l4.2 4.2M15.6 15.6l4.2 4.2M1 12h6M17 12h6M4.2 19.8l4.2-4.2M15.6 8.4l4.2-4.2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Animated</h3>
              <p className="text-sm text-muted-foreground">
                Subtle animations that enhance the user experience.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col justify-between p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 min-h-[280px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Fully Customizable
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with Tailwind CSS and class-variance-authority. Every
                component is fully customizable and type-safe with TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
