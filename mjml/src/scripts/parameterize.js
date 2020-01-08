import fs from 'fs-extra';
import emoji from 'node-emoji';
import mjml2html from 'mjml';
import nunjucks from 'nunjucks';

nunjucks.configure(`${__dirname}/partials/`, { autoescape: true });

const template = nunjucks.render(`container.njk`, { username: 'Picatso' })
const compiledTemplate = mjml2html(template);

const createTemplate = (content) => {
  fs.writeFile(`${__dirname}/template.html`, content.toString())
  .then(() => {
    console.log(emoji.get(':cat:'), 'Template creation done')
  })
  .catch((error) => {
    console.log(emoji.get(':warning:'), error)
  })
}

createTemplate(compiledTemplate.html)
