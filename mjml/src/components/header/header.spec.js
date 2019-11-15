import fs from 'fs-extra';
import * as path from 'path';
import mjml2html from 'mjml';

describe('header', function () {
    const mjmlFile = fs.readFile(path.resolve(__dirname, './header.mjml'));
    const mjmlConverted = mjml2html(mjmlFile, {
      beautify: true,
      minify: false,
      keepComments: false,
    });

    it('mjmlConverted matches snapshot', function () {
        expect(mjmlConverted).toMatchSnapshot();
    });
});
