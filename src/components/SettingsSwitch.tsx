import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from '@material-ui/core';
import util from '../js/util';

type Props = {
  settings: ISingleOption;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const ListItemSwitch: React.FC<Props> = ({
  children,
  settings,
  onChange,
  value,
}) => {
  return (
    <ListItem>
      <ListItemText>
        {children && util.capitalizeFirstLetter(children.toString())}
      </ListItemText>
      <ListItemSecondaryAction>
        <Switch
          size="small"
          onChange={onChange}
          value={value}
          color="primary"
          checked={settings.enabled}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemSwitch;
