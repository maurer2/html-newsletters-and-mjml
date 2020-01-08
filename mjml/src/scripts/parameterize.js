import fs from 'fs-extra';
import mjml2html from 'mjml';

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

console.log(compiledTemplate.html);
