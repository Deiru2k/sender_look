import React from 'react';
import ReactDomServer from 'react-dom/server';

import Index from 'components/Index';

export function renderTemplate(Component, pageTitle, props) {
  const html = ReactDomServer.renderToStaticMarkup(
    <Index pageTitle={pageTitle}>
      <Component {...props} />
    </Index>
  );
  return html;
}
