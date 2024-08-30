import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/chat" className="link link-hover underline;">
          Chat
        </Link>
        <Link to="/profile-page" className="link link-hover underline;">
          Profile Page
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/fredrik-westerman-82475692/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.336-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-11h2.877v1.507h.041c.4-.757 1.375-1.557 2.832-1.557 3.027 0 3.585 1.993 3.585 4.586v6.464z" />
            </svg>
          </a>
          <a href="https://github.com/fredrikwesterman" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.021.005 2.048.138 3.006.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.874.118 3.176.768.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.621-5.475 5.918.43.371.814 1.102.814 2.222 0 1.606-.014 2.902-.014 3.296 0 .319.217.694.825.576 4.765-1.589 8.202-6.084 8.202-11.384 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="mailto:fredrikwesterman9@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20 4h-16c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2zm-.4 2-7.6 5.006-7.6-5.006h15.2zm.4 12h-16v-10l8 5.303 8-5.303v10z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Fredrik
          Westerman
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
