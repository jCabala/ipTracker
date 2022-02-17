import { ThemeProvider } from 'styled-components';
import { Global } from './components/styles/Global.styled';
import Banner from './components/Banner';
import Map from './components/Map';

const theme = {
  colors: {
    veryDarkGrey: 'hsl(0, 0%, 17%)',
    darkGrey: 'hsl(0, 0%, 59%)',
  },

  media: {
    mobile: '375px',
    laptop: '1000px',
  },

  fontSizes: {
    input: '18px',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Banner />
      <Map />
    </ThemeProvider>
  );
};

export default App;
