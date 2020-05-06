import React from "react";
import { UnstyledLink, ButtonLink } from "./Link";

export const unstyled = () => <UnstyledLink to="/">Hello World</UnstyledLink>;

export const button = () => <ButtonLink to="/">Hello World</ButtonLink>;
export default {
  component: UnstyledLink,
  title: "Link",
};
