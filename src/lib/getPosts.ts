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

async function getAllPosts(): Promise<PostType[]> {
  const allFiles = fs.readdirSync("./src/_posts");
  const posts: PostType[] = allFiles.map((filename) => {
    const fileContent = fs.readFileSync(`./src/_posts/${filename}`, "utf-8");
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    return {
      metadata: {
        title: "", // Add appropriate values for title, date, and excerpt
        date: "",
        excerpt: "",
        ...metadata,
        slug: filename.replace(".md", ""),
      },
      content: htmlContent,
    };
  });
  return posts;
}

export { getAllPosts };
