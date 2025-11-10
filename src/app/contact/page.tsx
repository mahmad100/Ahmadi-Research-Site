export const metadata = { title: "Contact • Ahmadi Research" };
export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-3xl font-semibold">Contact</h1>
      <ul className="mt-4 space-y-2 text-slate-700">
        <li>Email: <a className="underline" href="mailto:hello@ahmadiresearch.com">hello@ahmadiresearch.com</a></li>
        <li>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/mahdi-ahmadi/">/in/mahdi-ahmadi</a></li>
        <li>GitHub: <a className="underline" href="https://github.com/mahmad100">@mahmad100</a></li>
      </ul>
    </div>
  );
}
