import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const devspacesFePlugin = createPlugin({
  id: 'devspaces-fe',
  routes: {
    root: rootRouteRef,
  },
});

export const DevspacesFePage = devspacesFePlugin.provide(
  createRoutableExtension({
    name: 'DevspacesFePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
