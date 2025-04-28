import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const configFilePath = path.resolve('./src/config.yaml');
const config = yaml.load(fs.readFileSync(configFilePath, 'utf8')) as Record<string, unknown>;

export default config;
