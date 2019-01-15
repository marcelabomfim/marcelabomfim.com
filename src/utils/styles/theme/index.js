import theme from './default';
import light from './light';
import dark from './dark';

export default color => ({
  ...theme,
  colors: {
    ...theme.colors,
    ...(color === 'light' ? light : dark)
  }
});
