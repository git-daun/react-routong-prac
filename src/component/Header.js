import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h3>홈으로돌아가기</h3>
      </Link>
    </div>
  );
};

export default Header;
