import { Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="md:max-w-[1230px] md:mx-36 mb-auto mt-auto max-md:px-5 pt-10 pb-10 flex justify-between items-center">
      <span className="font-normal text-zinc-200 text-sm">
        &copy; Developed by Carlos.
      </span>
      <div className="flex items-center gap-5">
        <Twitter size={20} className="text-zinc-300" />
        <Github size={20} className="text-zinc-300" />
      </div>
    </footer>
  );
}
