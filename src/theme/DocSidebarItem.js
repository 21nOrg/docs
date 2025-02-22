import React from "react";
import DocSidebarItem from "@theme-original/DocSidebarItem";
import * as PhosphorIcons from "@phosphor-icons/react";

export default function DocSidebarItemWrapper(props) {
  const { item } = props;
  const Icon = item.customProps?.icon
    ? PhosphorIcons[item.customProps.icon]
    : null;

  if (!Icon) {
    return <DocSidebarItem {...props} />;
  }

  return (
    <DocSidebarItem
      {...props}
      item={{
        ...item,
        className: `${item.className || ""} menu__list-item-with-icon`.trim(),
        customProps: {
          ...item.customProps,
          beforeContent: (
            <Icon size={20} weight="regular" style={{ opacity: 0.8 }} />
          ),
        },
      }}
    />
  );
}

// import React from "react";
// import DocSidebarItem from "@theme-original/DocSidebarItem";
// import * as PhosphorIcons from "@phosphor-icons/react";

// // export default function DocSidebarItemWrapper(props) {
// //   const { item } = props;
// //   const Icon = item.customProps?.icon
// //     ? PhosphorIcons[item.customProps.icon]
// //     : null;

// //   return (
// //     <div className="sidebar-item-with-icon" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //       {Icon && <Icon size={20} weight="regular" style={{ opacity: 0.8 }} />}
// //       <DocSidebarItem {...props} />
// //     </div>
// //   );
// // }

