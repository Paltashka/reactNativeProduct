import {Provider} from 'react-redux';
import React from 'react';

import {store} from '../../store/store.ts';

const Providers = ({children}: any) => {
  return <Provider store={store}>{children}</Provider>;
};
export default Providers;
