import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon"></PersonIcon>
      </IconButton>
      <img 
      className="header__logo"
      alt="Tinder Logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU"></img>
    
    <IconButton>
        <ForumIcon fontSize="large" className="header__icon"></ForumIcon>
      </IconButton>
    </div>
  );
}

export default Header;
