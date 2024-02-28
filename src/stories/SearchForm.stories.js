import React from 'react';
import { action } from '@storybook/addon-actions';
import Search from '../components/search'; // Import Search component

export default {
  title: 'Search',
  component: Search,
};

export const Default = () => (
  <Search
    onSearch={action('onSearch')}
  />
);

export const WithInitialQuery = () => (
  <Search
    initialQuery="Initial Query Value"
    onSearch={action('onSearch')}
  />
);
