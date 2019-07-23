import Head from 'next/head';
import Nav from './nav';

export default ({ children, title = 'New Hacker News' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap"
        rel="stylesheet"
      />

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      />

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
        integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o"
        crossOrigin="anonymous"
      />
    </Head>
    <header>
      <Nav />
    </header>

    <div className="container">{children}</div>

    <footer>
      New Hacker News is not affiliated in any way with Hacker News and
      YCombinator
    </footer>
    <style jsx>{`
      footer {
        text-align: center;
        padding: 2rem;
        border-top: 0.15rem solid #ff6600;
      }
    `}</style>
    <style global jsx>{`
      html {
        font-size: 10px;
      }
      @media (max-width: 576px) {
        html {
          font-size: 12px;
        }
      }

      body {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.5rem;
        background-color: #f6f6ef;
      }
    `}</style>
  </div>
);
