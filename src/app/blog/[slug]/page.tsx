import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import parse from "html-react-parser";
import { getPostBySlug } from "@/lib/getPostBySlug";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const res = await getPostBySlug("explorando-poder-do-react");
  return (
    <main className="min-h-screen bg-[#17232B]">
      <Menu />
      <section className="md:max-w-[1250px] md:mx-36 mb-auto mt-20 max-md:px-5 pb-10">
        <article className="prose prose-zinc prose-headings:text-zinc-200 prose-p:text-zinc-300 prose-li:text-zinc-300 prose-strong:text-zinc-500 prose-a:text-sky-500">
          {parse(res!.content)}
        </article>
        <div className="mt-10">
          <span>{res!.metadata.date}</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
