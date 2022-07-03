import React from "react";
import HeaderView, { HeaderProps } from "./view";

const Header = () => {
  const props: HeaderProps = {
    onSave: () => {},
  };

  return <HeaderView {...props} />;
};

export default Header;
