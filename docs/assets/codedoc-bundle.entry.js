import { getRenderer } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/workspace/comboser/docs/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { GitterToggle } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/gitter/index.js';
import { DarkModeSwitch } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/workspace/comboser/docs/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'wkRnramUz5Sv60EHNh1X4A==': ToCPrevNext,
  'Fc5wNmUuLp+Ty6llAHW/iA==': GithubSearch,
  'FwB8HD5Bs2JkjdK3KxMjww==': ToCToggle,
  'FrF/C51OKYlp0yawZXNyFQ==': GitterToggle,
  'Vh0tw2o1XJrpcbMxS76BWQ==': DarkModeSwitch,
  'nnEtR+UBevfdiDMF2w1ToA==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
