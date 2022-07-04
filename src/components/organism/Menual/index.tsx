import useMenual from "hooks/useMenual";
import React from "react";
import MenualView, { MenualProps } from "./view";

const Menual = () => {
  const { menual, onToggleMenual } = useMenual();
  const props: MenualProps = {
    isVisible: menual,
    onClick: () => {
      onToggleMenual();
    },
  };
  return <MenualView {...props} />;
};

export default Menual;
