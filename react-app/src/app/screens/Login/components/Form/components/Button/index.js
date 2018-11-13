import React from 'react';

import { withLoading } from '../../../../utils';

function Button() {
  return <button type="submit">Submit</button>;
}

const ButtonWithLoading = withLoading(Button);

export default ButtonWithLoading;
