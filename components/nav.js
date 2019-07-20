import Link from 'next/link';

export default () => {
  return (
    <>
      <nav className="navbar navbar-custom navbar-light navbar-expand-lg py-0">
        <a className="navbar-brand" href="#">
          <img className="logo" src="/static/img/yc_logo.svg" />
          <span className="yc-name">Hacker News</span>
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
          <i class="fa fa-navicon" style={{ color: 'rgba(0,0,0,0.85)' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
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
          font-size: 0.9rem;
          background-color: #ff6600;
        }
        /* change the brand and text color */
        .navbar-custom .navbar-brand,
        .navbar-custom .navbar-text {
          color: rgba(0, 0, 0, 1);
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
          height: 1.5rem;
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

        .fa-navicon {
          background-color: white;
        }
      `}</style>
    </>
  );
};
