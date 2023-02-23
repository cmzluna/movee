import React from "react";
import { useEffect, useRef } from "react";

interface Props {
  onClickOutside: () => void;
  show: boolean;
  Component: React.ComponentType<any>;
}

export const OutsideClickWrapper = (props: Props) => {
  // TODO: Implement this component on modals and popups
  const ref = useRef<any>(null);

  const { show, onClickOutside, Component } = props;

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside, show]);

  if (!Component) return null;
  if (!show) return null;

  return <Component ref={ref} />;
};

export default OutsideClickWrapper;
