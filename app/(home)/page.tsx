import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center flex-1 mt-20 gap-12">
      <div className="w-[60%] flex flex-col items-center justify-center gap-5">
        <h1 className="text-6xl font-semibold text-center">
          Lightweight UI for creators
        </h1>
        <p className="max-w-[50%] text-center text-fd-muted-foreground">
          Cirra UI blends clean styling with gentle animations to help you build
          polished interfaces with clarity and flow.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/components/button" //for now
            className="px-6 py-2.5 bg-foreground text-background rounded-lg font-medium hover:underline duration-200"
          >
            Browse Components
          </Link>
          <Link
            href="/components"
            className="px-6 py-2.5 border border-border rounded-lg font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
