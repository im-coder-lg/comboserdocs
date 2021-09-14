
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/docs',
    // ...
    html: 'dist',
    assets: 'dist',
  },
  page: {
    title: {
      base: 'Comboser Docs'                        // --> the base title of your doc pages
    },
    favicon: 'assets/favicon.ico'
  },
  misc: {
    github: {
      user: 'comboser',                   // --> your github username (where your repo is hosted)
      repo: 'comboser',                       // --> your github repo name
      action: 'Star',             // --> action of the GitHub button
      count: true,               // --> whether to show the `count` on the GitHub button
      large: false,                // --> whether to show a `large` GitHub button
      standardIcon: false,        // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
    },
    gitter: {
      room: 'combosercommunity/community'
   }
  },
});
