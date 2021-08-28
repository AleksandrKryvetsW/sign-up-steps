import React, {memo} from 'react';
import {AppWrapper, GlobalStyle} from './styled';

export const App = memo(({ children }) => (
    <AppWrapper>
      <GlobalStyle />
      { children }
    </AppWrapper>
));