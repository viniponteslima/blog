import * as fs from 'fs/promises';
import * as path from 'path';
import type { Post } from '@/types/post';

export async function getPosts(): Promise<Post[]> {
  const publicDir = path.join(process.cwd(), 'public');
  
  const filePath = path.join(publicDir, 'posts.json');

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const posts: Post[] = JSON.parse(fileContent) as Post[];

    return posts;
  } catch (error) {
    console.error(`Erro ao ler o arquivo posts.json em ${filePath}:`, error);
    throw new Error('Falha ao carregar os dados de posts.');
  }
}