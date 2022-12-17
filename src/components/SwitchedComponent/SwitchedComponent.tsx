import React, { FC } from "react";

interface SwitchedProps {
  active: string;
  target: string;
  children?: React.ReactNode;
}

const SwitchedComponent: FC<SwitchedProps> = ({ active, children, target }) => {
  return (
    <>
      {React.Children.toArray(children ?? []).filter(
        (child: any) => child.props[target] === active
      )}
    </>
  );
};

export default SwitchedComponent;
