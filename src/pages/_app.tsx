import { Box, createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { StyledEngineProvider } from '@mui/material/styles';
import Header from 'components/Header';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ModelContext, { useModelState } from 'context/ModelContext';
import CartContext, { useCartState } from 'context/CartContext';
import { ShoppingCart } from 'components/ShoppingCart';
import Footer from 'components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      light: grey[800],
      main: '#060D0D',
      dark: '#000000',
    },
    secondary: {
      light: '#FFFFFF',
      main: grey[50],
      dark: grey[200],
    },
  },
});

// TODO: Dark mode
const getDesignTokens = (mode: PaletteMode) => ({});

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const defaultCart = useCartState();
  const defaultModel = useModelState();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CartContext.Provider value={defaultCart}>
            <ModelContext.Provider value={defaultModel}>
              <Hydrate state={pageProps.dehydratedState}>
                <Header />
                <ShoppingCart />
                <Box sx={{ minHeight: '2000px' }}>
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </Box>
                <Footer />
              </Hydrate>
            </ModelContext.Provider>
          </CartContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
