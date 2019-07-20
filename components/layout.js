import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'Hacker News' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="#">
          <a>Hacker News</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>new</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>threads</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>past</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>comments</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>ask</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>show</a>
        </Link>{' '}
        |{' '}
        <Link href="#">
          <a>jobs</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>
      New Hacker News is not affiliated in any way with Hacker News and
      YCombinator
    </footer>
  </div>
);
