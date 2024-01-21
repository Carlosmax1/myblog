import parse from "html-react-parser";
import { getAllPosts } from "@/lib/getPosts";

import { Menu } from "../../components/Menu";
import { Footer } from "@/components/Footer";

export default async function Blog() {
  const res = await getAllPosts().catch((e) => console.log(e));

  return (
    <main className="min-h-screen bg-[#17232B]">
      <Menu />
      <section className="md:max-w-[1250px] md:mx-36 mb-auto mt-20 max-md:px-5 pb-10">
        {res?.map((item) => (
          <article className="prose prose-zinc prose-headings:text-zinc-200 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-500 prose-a:text-sky-500">
            {parse(item.content)}
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
