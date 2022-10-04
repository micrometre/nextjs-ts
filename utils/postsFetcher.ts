import matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';


export function getAllPostsSlugs() {
  return fs.readdirSync(getPostsDirectory()).map(normalizePostName);
}

function normalizePostName(postName: string) {
  return postName.replace('.mdx', '');
}


export function getPostsDirectory() {
  let basePath = process.cwd();
  return path.join(basePath, 'posts');
}
