import { getPosts } from '@/util/fetch';
import type { Post } from '@/types/post';
import Card from '@/components/ui/Card';

export default async function HomePage() {
  let posts: Post[] = [];
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch (err) {
    console.error('Falha ao carregar posts na página:', err);
    error = 'Não foi possível carregar o conteúdo do blog.';
  }

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} date={post.date} text={post.text} />
        ))
      ) : (
        !error && <p>Nenhum post encontrado.</p>
      )}
    </>
  );
}