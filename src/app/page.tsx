import { ChevronsRight, MessageCircle } from "lucide-react";

import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

export default function Home() {
  const posts = [
    {
      id: 1,
      tech: "javascript",
      title: "Lorem ipsum dolor sit amet",
      postDate: "November 7, 2024",
    },
    {
      id: 2,
      tech: "react",
      title: "Lorem ipsum dolor sit amet",
      postDate: "November 7, 2024",
    },
    {
      id: 3,
      tech: "react",
      title: "Lorem ipsum dolor sit amet",
      postDate: "November 7, 2024",
    },
  ];

  return (
    <main className="min-h-screen bg-[#17232B]">
      <Menu />
      <header className="md:max-w-[1230px] md:mx-36 mb-auto mt-20">
        <div className="max-w-[800px] flex flex-col gap-10 max-md:p-3">
          <h1 className="font-bold text-sky-400 text-4xl tracking-wide leading-snug max-md:text-center">
            I'm Carlos, software engineer <br />
            and interface designer.
          </h1>
          <span className="text-zinc-300 font-normal text-sm tracking-wide leading-snug max-md:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            dolor tempora repudiandae accusantium voluptate, quam blanditiis
            iusto consequuntur natus fugiat earum. Tenetur laudantium temporibus
            magnam doloremque libero nobis, vero labore.
          </span>
        </div>
      </header>
      <section className="md:max-w-[1230px] md:mx-36 mb-auto mt-20 max-md:px-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-sm text-zinc-300">Latest Articles</h2>
          <span className="text-xs text-zinc-400 flex items-center gap-3">
            All articles <ChevronsRight size={13} />
          </span>
        </div>
        <div className="mt-10 flex-col flex gap-5">
          {posts.map((item) => (
            <>
              <div key={item.id} className="flex gap-2">
                <img
                  className="w-6 h-6 rounded self-stretch"
                  src="javascript-logo.png"
                  alt="JavaScript Logo"
                />
                <div className="flex flex-col justify-between gap-1">
                  <span className="font-normal text-zinc-200 text-sm max-md:text-xs">
                    {item.title}
                  </span>
                  <span className="text-zinc-600 text-xs">{item.postDate}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      <section className="md:max-w-[1230px] md:mx-36 mb-auto mt-20 max-md:px-5">
        <div className="grid md:grid-cols-[1fr_1fr] gap-4 place-content-center place-items-center">
          <div className="bg-[#1C2C35] md:col-span-3 flex flex-col gap-4 p-5 rounded md:max-w-full relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-sky-100 before:left-0 before:top-0 before:rounded-tl before:rounded-bl">
            <span className="font-bold text-zinc-300 text-lg">Lorem</span>
            <span className="text-zinc-300 font-normal text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae impedit quisquam quae sed atque nihil sapiente nisi
              reprehenderit mollitia hic, illo tempore? Debitis facere nostrum
              adipisci iste odit, fuga dolorem? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ab sequi sit vel magni, recusandae,
              cupiditate obcaecati tenetur quaerat doloribus, in ipsa provident
              minus ea expedita eum eos quia quos officia.
            </span>
            <button className="p-1 border rounded border-sky-600/15 text-zinc-300 w-48">
              Lorem
            </button>
          </div>
          <div className="bg-[#1C2C35] md:col-span-1 flex flex-col gap-4 p-5 rounded md:max-w-full relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-red-100 before:left-0 before:top-0 before:rounded-tl before:rounded-bl">
            <span className="font-bold text-zinc-300 text-lg">Lorem</span>
            <span className="text-zinc-300 font-normal text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae impedit quisquam quae sed atque nihil sapiente nisi
              reprehenderit mollitia hic, illo tempore? Debitis facere nostrum
              adipisci iste odit, fuga dolorem?
            </span>
            <button className="p-1 border rounded border-sky-600/15 text-zinc-300 w-48">
              Lorem
            </button>
          </div>
          <div className="bg-[#1C2C35] md:col-span-2 flex flex-col gap-4 p-5 rounded md:max-w-full relative before:content-[''] before:w-1 before:h-full before:absolute before:bg-emerald-100 before:left-0 before:top-0 before:rounded-tl before:rounded-bl">
            <span className="font-bold text-zinc-300 text-lg">Lorem</span>
            <span className="text-zinc-300 font-normal text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae impedit quisquam quae sed atque nihil sapiente nisi
              reprehenderit mollitia hic, illo tempore? Debitis facere nostrum
              adipisci iste odit, fuga dolorem?
            </span>
            <button className="p-1 border rounded border-sky-600/15 text-zinc-300 w-48">
              Lorem
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#1C2C35] h-[50vh] mt-20 flex justify-center items-center text-center flex-col gap-10">
        <h3 className="text-3xl font-bold text-sky-400 max-md:max-w-[200px]">
          What are you working on?
        </h3>
        <span className="text-zinc-300 text-sm max-md:text-xs font-normal md:max-w-[500px] max-md:max-w-[350px] tracking-wide leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          laboriosam fugiat ea esse dicta odio alias doloribus eveniet, nemo
          incidunt ullam dignissimos voluptatum, minus voluptas debitis officiis
          magnam veritatis molestias.
        </span>
        <button className="p-1 bg-sky-400 font-bold rounded w-24 h-10 text-zinc-900 flex items-center justify-center gap-2 text-sm">
          <MessageCircle size={15} />
          Chat
        </button>
      </section>
      <Footer />
    </main>
  );
}
