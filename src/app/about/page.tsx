export const metadata = { title: "About • Ahmadi Research" };
export default function About() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[240px,1fr]">
      <img src="/headshot.jpg" alt="Mohammad Hadi Ahmadi" className="h-56 w-56 rounded-full object-cover" />
      <div>
        <h1 className="mb-3 text-3xl font-semibold">About the Author</h1>
        <p className="text-slate-700">
          Mohammad Hadi Ahmadi is a Tufts graduate with experience across investment banking, consulting, and private equity.
          He writes evidence-driven research on markets, companies, and macro trends.
        </p>
      </div>
    </div>
  );
}
