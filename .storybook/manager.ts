import { addons } from '@storybook/manager-api';
import dgTheme from './dg-theme';

addons.setConfig({
  theme: dgTheme,
});