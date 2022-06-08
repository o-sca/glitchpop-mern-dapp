import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      
      <img src={avatar} alt="avatar" className="avatar" />
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default Header;