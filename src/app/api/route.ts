import { NextResponse } from 'next/server';
import { getPosts } from '@/util/fetch';

export async function GET() {
  try {
    const posts = await getPosts();

    return NextResponse.json(posts, { 
      status: 200,
      headers: {
        'Cache-Control': 's-maxage=60, stale-while-revalidate=30'
      }
    });

  } catch (error) {
    console.error('Erro no Route Handler ao obter posts:', error);

    return NextResponse.json(
      { error: (error as Error).message || 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}