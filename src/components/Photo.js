import React from 'react';
import Heart from './Heart';

export const Photo = ({ photo, onClick }) => {
  return (
    <div
      className="foto"
      style={{ backgroundImage: `url(${photo.src.portrait})` }}
      onClick={() => {
        try {
          onClick();
        } catch {}
      }}
    >
      <Heart filled={photo.liked} />
      <p>{photo.alt}</p>
    </div>
  );
};
