import React from 'react';

interface AsideImgProps {
  source: string;
  alt: string;
  classes?: string;
}

const AsideImg: React.FC<AsideImgProps> = ({ source, alt, classes }) => {
  return (
    <aside>
      <img src={source} alt={alt} className={classes} />
    </aside>
  );
};

export default AsideImg;