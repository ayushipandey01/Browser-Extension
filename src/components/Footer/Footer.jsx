import "./Footer.css";
import github from "../../assets/logo/github-1.png";
import twitter from "../../assets/logo/twitter-2.png";
import linkedIn from "../../assets/logo/linkedIn-2.png";

export const Footer = () => {
    return (
      <footer class="footer d-flex direction-column align-center">
        <p>
          Made with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by Ayushi Pandey
        </p>
        <div class="d-flex gap align-center padding-all-16">
          <a
            href="https://github.com/ayushipandey01/"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image logo-img"
              src={github}
              alt="GitHub"
            />
          </a>
          {/* <a
            href="https://twitter.com/prakashsakari"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image logo-img"
              src={twitter}
              alt="Twitter"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/ayushi-pandey-1a4775149/"
            class="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="source-image logo-img"
              src={linkedIn}
              alt="LinkedIn"
            />
          </a>
        </div>
      </footer>
    );
};
  