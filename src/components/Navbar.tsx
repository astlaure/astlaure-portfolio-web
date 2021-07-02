import React from 'react';

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <nav>
      <a href="#">EN</a>
      <div className="separator" />
      <a href="#">FR</a>
    </nav>
  );
};

export default Navbar;
