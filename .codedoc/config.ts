
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/docs'                // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Comboser Docs',                    // --> the base title of your doc pages
      
    },
    favicon: 'assets/favicon.ico',
  },
  
  misc: {
    github: {
      user: 'im-coder-lg',                // --> your github username (where your repo is hosted)
      repo: 'comboser',                   // --> your github repo name
    },
    gitter: {
      room: 'im-coder-lg/comboser'
    }
  },
});
