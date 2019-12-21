import fs from 'fs-extra';
import * as path from 'path';
// https://stackoverflow.com/questions/52973121/render-multiple-mjml-files-into-one-mjml-file-string
import mjmlInclude from 'mjml-core/lib/includeExternal/mjmlInclude';

const mjmlFile = fs.readFile(path.resolve(__dirname, '../template-ticketyboo.mjml'));

let mjmlTemplate = mjmlInclude(mjmlFile, {filePath: path.resolve(__dirname, '../template-ticketyboo.mjml')})

console.log(mjmlTemplate);
