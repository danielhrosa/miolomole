import React, { forwardRef } from 'react';
import ButtonExternalLink from './ButtonExternalLink';
import ButtonAction from './ButtonAction';
import EditButton from './EditButton';
import ConfirmButton from './ConfirmButton';
import CancelButton from './CancelButton';
import DeleteButton from './DeleteButton';
import ToggleHideButton from './ToggleHideButton';

export const Button = forwardRef((props, ref) => {
  const { type } = props;
  const buttons = {
    externalLink: <ButtonExternalLink {...props} ref={ref} />,
  };
  switch (type) {
    case 'edit': return <EditButton {...props} />
    case 'confirm': return <ConfirmButton {...props} />
    case 'cancel': return <CancelButton {...props} />
    case 'delete': return <DeleteButton {...props} />
    case 'toggleHide': return <ToggleHideButton {...props} />
    default: return buttons[type] || <ButtonAction {...props} ref={ref} />;;
  }

});

export default Button;