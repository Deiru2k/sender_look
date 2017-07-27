import React from 'react';

// meta component to keep global page markup
export default ({ children, pageTitle }) => (
  <html>
    <head>
      <title>{pageTitle}</title>
    </head>
    <body>
      {children}
    </body>
  </html>
);
