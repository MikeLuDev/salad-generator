import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from '@material-ui/core';
import util from '../js/util';

const ListItemSwitch: React.FC = ({ children }) => {
  return (
    <ListItem>
      <ListItemText>
        {children && util.capitalizeFirstLetter(children.toString())}
      </ListItemText>
      <ListItemSecondaryAction>
        <Switch />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemSwitch;
