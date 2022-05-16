import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fineNames = fs.readdirSync(postsDir);
  const allPostsData = fineNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: d1 }, { date: d2 }) => d1 - d2);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);
  
  return fileNames.map((fileName) => (
    {
      params: {
        id: fileName.replace(/.md$/, ''),
      },
    }
  ));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
