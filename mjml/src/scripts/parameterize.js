import fs from 'fs-extra';
import emoji from 'node-emoji';

import mjml2html from 'mjml';

const createTemplate = (content) => {
  fs.writeFile(`${__dirname}/template.html`, content.toString())
  .then(() => {
    console.log(emoji.get(':cat:'), 'Template creation done')
  })
  .catch((error) => {
    console.log(emoji.get(':warning:'), error)
  })
}

const container = `
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello Name
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`;

const compiledTemplate = mjml2html(container);

createTemplate(compiledTemplate.html)
