import fs from "fs";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";

export type PostMetadata = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export type PostType = {
  metadata: PostMetadata;
  content: string;
};

async function getPostBySlug(slug: string): Promise<PostType | null> {
  const allFiles = fs.readdirSync("./src/_posts");

  const file = allFiles.find((item) => item.replace(".md", "") === slug);
  if (!file) {
    return null;
  }
  const post = fs.readFileSync(`./src/_posts/${file}`, "utf-8");
  const { content, data: metadata } = grayMatter(post);
  const htmlContent = remark().use(remarkHTML).processSync(content).toString();

  return {
    metadata: {
      title: "",
      date: "",
      excerpt: "",
      ...metadata,
      slug: file.replace(".md", ""),
    },
    content: htmlContent,
  };
}

export { getPostBySlug };
