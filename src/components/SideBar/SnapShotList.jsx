import React from 'react';
import PropTypes from 'prop-types';
import SnapShot from './SnapShot';

const SnapShotList = ({snapShots}) => {
  
  const snapShotList = snapShots.map((snapShot, i) => {
    return (
      <SnapShot 
        key={i} 
        snapShot={snapShot} 
      />
    );
  });

  return (
    <div className="snap-shot-container">
      {snapShotList}
    </div>
  );
}

SnapShotList.propTypes = {
  snapShots: PropTypes.array,
}

export default SnapShotList;