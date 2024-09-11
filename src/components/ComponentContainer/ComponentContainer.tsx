import * as React from 'react';
import ButtonDisplay from '../../content/ButtonDisplay';
import IconButtonDisplay from '../../content/IconButtonDisplay';
import ToggleButtonDisplay from '../../content/ToggleButtonDisplay';
import InputDisplay from '../../content/InputDisplay';

const ComponentContainer = () => {
  return (
    <div style={{width: "calc(100% - 12rem)"}}>
      <ToggleButtonDisplay/>
    </div>
  );
};
export default ComponentContainer;