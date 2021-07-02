import React from 'react';

interface Props {}

const Background: React.FC<Props> = (props) => {
  return (
    <div className="background">
      <div className="circle primary" />
      <div className="circle accent" />
    </div>
  );
};

export default Background;
