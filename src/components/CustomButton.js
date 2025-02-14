import React from 'react';
import * as PhosphorIcons from '@phosphor-icons/react'; // Importing all icons from phosphor-icons

const CustomButton = ({ color, url, title, icon, weight,...props }) => {
  // Dynamically importing the icon using the icon name prop
  const Icon = PhosphorIcons[icon];

  return (
    <a
      href={url}
      className="button_link"
      style={{
        backgroundColor: color,
        color: '#fff',
        padding: '5px 20px',
        borderRadius: '25px',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
      }}
      target="_blank"
      {...props}
    >
      {Icon && <Icon size={20} weight={weight ? weight : 'regular'} style={{ marginRight: '8px' }} />}
      {title}
    </a>
  );
};

export default CustomButton;
