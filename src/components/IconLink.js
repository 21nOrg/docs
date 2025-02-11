import React from "react";
import Link from "@docusaurus/Link";
import * as PhosphorIcons from "@phosphor-icons/react";

export default function IconLink({ icon, children, to, ...props }) {
  const Icon = PhosphorIcons[icon];

  return (
    <Link className="menu__link" to={to} {...props}>
      {Icon && <Icon size={20} weight="regular" />}
      {children}
    </Link>
  );
}
