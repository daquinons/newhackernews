import Link from 'next/link';

export default () => {
  return (
    <>
      <nav className="navbar navbar-custom navbar-light navbar-expand-lg py-0">
        <a className="navbar-brand" href="/">
          <img className="logo" src="/static/img/yc_logo.svg" />
          <span className="yc-name">New Hacker News</span>
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1.6rem"
            height="1.5rem"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1536 1280"
          >
            <path
              d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45z"
              fill="rgba(0,0,0,0.8)"
            />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/new">
                new
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                threads
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                past
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                comments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ask
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                show
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                jobs
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .navbar-custom {
          font-size: 1.5rem;
          background-color: #ff6600;
          margin-bottom: 0.75rem;
        }
        /* change the brand and text color */
        .navbar-custom .navbar-brand,
        .navbar-custom .navbar-text {
          color: rgba(0, 0, 0, 1);
          font-size: 2rem;
        }
        /* change the link color */
        .navbar-custom .navbar-nav .nav-link {
          color: rgba(0, 0, 0, 1);
        }
        /* change the color of active or hovered links */
        .navbar-custom .nav-item.active .nav-link,
        .navbar-custom .nav-item:hover .nav-link {
          color: #ffffff;
        }

        .navbar-brand {
          display: flex;
        }

        .logo {
          align-self: center;
          height: 2.5rem;
          border: 0.15rem white solid;
        }

        .yc-name {
          margin-left: 0.5rem;
          font-weight: bold !important;
          color: rgba(0, 0, 0, 0.85);
        }

        a {
          color: rgba(0, 0, 0, 0.85);
        }

        .custom-toggler {
          border-color: rgba(0, 0, 0, 0.85);
        }
      `}</style>
    </>
  );
};
