import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemsGrid from '../../components/ItemsGrid'

const Items = ({ items }) => {
  return (
    <div>
      <ItemsGrid items={items}/>
      {/* {console.log("Items: ", items)} */}
    </div>
  );
};

export default withStyles(styles)(Items);
