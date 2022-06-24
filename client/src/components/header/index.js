import MintButton from "./MintButton";
import MintEdit from "./MintEdit";
import ConnectButton from "./ConnectButton";
import Socials from "./Socials";
import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/header.css";

import { useState, useLayoutEffect } from "react";

const Header = () => {
  const [isMobile, setMobile] = useState(false);

  const onResize = () => {
    const isMobile = window.innerWidth < 768;
    setMobile(isMobile);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header>
      {isMobile ? (
        <>
          <ConnectButton />
          <img src={logo} alt="logo" className="logo" />
          <MintButton />
          <MintEdit />
          <div className="mobile">
            <img src={avatar} alt="avatar" className="avatar" />
            <Socials />
          </div>
        </>
      ) : (
        <>
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="container">
            <div className="upper-btn-item">
              <Socials />
              <ConnectButton />
            </div>
            <img src={logo} alt="logo" className="logo" />
            <div className="lower-btn-item">
              <MintButton />
              <MintEdit />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
