import React, { FC } from "react";

import HeaderLayout, { HeaderLayoutProps } from "./layout";

const Header: FC<HeaderLayoutProps> = ({ ...rest }) => {
  return <HeaderLayout {...rest} />;
};

export default Header;
