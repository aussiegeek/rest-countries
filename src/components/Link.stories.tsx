import React from "react";
import { UnstyledLink, ButtonLink } from "./Link";

export const unstyled: React.FC = () => (
  <UnstyledLink to="/">Hello World</UnstyledLink>
);

export const button: React.FC = () => (
  <ButtonLink to="/">Hello World</ButtonLink>
);
export default {
  title: "Link",
};
