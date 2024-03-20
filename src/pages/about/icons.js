import React from "react";
import { FaRedditAlien, FaGithub, FaYoutube, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const DiscordIcon = () => (
  <a
    href="https://discord.com/invite/QgZHExcssR"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaDiscord style={{ width: "18px", height: "18px", marginTop: "4px" }} />
      <div>Discord</div>
    </div>
  </a>
);

export const InstagramIcon = () => (
  <a
    href="https://www.instagram.com/opendeeplearning/"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaInstagram style={{ width: "18px", height: "18px", marginTop: "4px" }} />
      <div>Instagram</div>
    </div>
  </a>
);

export const RedditIcon = () => (
  <a
    href="https://www.reddit.com/r/opendeeplearning/"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaRedditAlien
        style={{ width: "18px", height: "18px", marginTop: "4px" }}
      />
      <div>Reddit</div>
    </div>
  </a>
);

export const YoutubeIcon = () => (
  <a
    href="https://www.youtube.com/@Open_DeepLearning"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaYoutube style={{ width: "18px", height: "18px", marginTop: "4px" }} />
      <div>YouTube</div>
    </div>
  </a>
);

export const TwitterIcon = () => (
  <a
    href="https://twitter.com/Open_DL_AI"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaXTwitter style={{ width: "18px", height: "18px", marginTop: "4px" }} />
      <div>Twitter</div>
    </div>
  </a>
);

export const GithubIcon = () => (
  <a
    href="https://github.com/open-deeplearning"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaGithub style={{ width: "18px", height: "18px", marginTop: "4px" }} />
      <div>GitHub</div>
    </div>
  </a>
);

export const LinkedInIcon = () => (
  <a
    href="https://www.linkedin.com/company/opendeeplearning"
    target="black"
    style={{ textDecoration: "none", display: "inline-flex" }}
  >
    <div style={{ display: "flex", gap: "5px" }}>
      <FaLinkedinIn
        style={{ width: "18px", height: "18px", marginTop: "4px" }}
      />
      <div>LinkedIn</div>
    </div>
  </a>
);
