import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { devspacesFePlugin, DevspacesFePage } from '../src/plugin';

createDevApp()
  .registerPlugin(devspacesFePlugin)
  .addPage({
    element: <DevspacesFePage />,
    title: 'Root Page',
    path: '/devspaces-fe',
  })
  .render();
