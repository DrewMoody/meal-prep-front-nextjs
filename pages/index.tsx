import Link from 'next/link';
import withLayout from '../components/layout';

function Index() {
  return (
    <main>
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <Link href="/blog">
          <a>Go to Blog</a>
        </Link>
      </section>
    </main>
  );
}

export default withLayout(Index);
