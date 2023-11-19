import Vue from 'vue';

const requireComponent = require.context('~/components/reusable-items', true, /\.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  // Rejestrowanie komponentu globalnie
  Vue.component(componentName, requireComponent(fileName).default || requireComponent(fileName));
});
