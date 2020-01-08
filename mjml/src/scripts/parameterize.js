import fs from 'fs-extra';
import emoji from 'node-emoji';
import mjml2html from 'mjml';
import nunjucks from 'nunjucks';

nunjucks.configure(`${__dirname}/partials/`, { autoescape: true });

const getName = () => {
  const [, , name] = process.argv;

  return name;
}

const getCompiledTemplate = (name) => {
  const mjmlConfig = {
    beautify: true,
  }
  const template = nunjucks.render(`base.njk`, { name })
  const compiledTemplate = mjml2html(template, mjmlConfig);

  return compiledTemplate.html;
}

const exportTemplate = (content) => {
  fs.writeFile(`${__dirname}/template.html`, content.toString())
  .then(() => {
    console.log(emoji.get(':cat:'), 'Template creation done')
  })
  .catch((error) => {
    console.log(emoji.get(':warning:'), error)
  })
}

const name = getName();
const template = getCompiledTemplate(name);

exportTemplate(template)
