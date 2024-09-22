import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const CountryMap = () => {
  const mapRegionStyle = {
    initial: {
      fill: '#038edc',
    },
  };

  return (
    <div style={{ height: '400px' }}>
      <VectorMap
        map={worldMill}
        regionStyle={mapRegionStyle}
        containerStyle={{
          width: '700px',
          height: '100%',
        }}
      />
    </div>
  );
};

export default CountryMap;
