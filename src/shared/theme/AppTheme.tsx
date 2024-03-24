import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BaseTheme } from './BaseTheme';

interface AppThemeProps {
  children: React.ReactNode;
}

const AppTheme = ({ children }: AppThemeProps): JSX.Element => {
  return (
    <ThemeProvider theme={ BaseTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}

export { AppTheme }