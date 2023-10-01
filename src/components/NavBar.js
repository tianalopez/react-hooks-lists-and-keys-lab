import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((href) => <a key={href} href={"#" + href}>{href}</a>)}</nav>;
}

export default NavBar;
