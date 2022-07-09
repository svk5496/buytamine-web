import React from "react";
import { useMediaQuery } from "react-responsive";

export const isPc = useMediaQuery({
  query: "(min-width:1024px)",
});
export const isTablet = useMediaQuery({
  query: "(min-width:768px) and (max-width:1023px)",
});
export const isMobile = useMediaQuery({
  query: "(max-width:767px)",
});
