import React from "react";
import logo from "../assets/pictures/logo.svg";
import {
  RiHome2Line,
  RiSearchLine,
  RiMovie2Line,
} from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const userToken = localStorage.getItem("TokenAPI");
  const navigate = useNavigate();
  let { pathname } = useLocation();

  React.useEffect(() => {
    if(userToken) {
        setIsAuth(true);
    } else {
        setIsAuth(false);
    }
  }, [pathname])


  const clickLogIn = () => {
      navigate('/login');
  }

  const SignOut = () => {
    localStorage.removeItem("TokenAPI");
    navigate('/');
  };

  return (
    <div
      className="sticky 
    bg-[#040714] 
    top-0 z-[1000] 
    flex h-[72px] 
    items-center 
    px-10 
    md:px-12"
    >
      <img
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => navigate('/')}
      />
      {isAuth && (
        <div className="hidden ml-10 lg:flex items-center space-x-6">
          <Link to='/' className="header-link group">
            <RiHome2Line className="h-4" />
            <span className="span">Home</span>
          </Link>
          <a className="header-link group">
            <AiOutlinePlus className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <Link to='/movie' className="header-link group">
            <RiMovie2Line className="h-5" />
            <span className="span">Movies</span>
          </Link>
        </div>
      )}
      {isAuth ? (
        <button className="auth-btn" onClick={SignOut}>
          LOG OUT
        </button>
      ) : (
        <button className="auth-btn" onClick={clickLogIn}>
          LOGIN
        </button>
      )}
    </div>
  );
};
