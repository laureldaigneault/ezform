import '@babel/polyfill';
import optimize from './optimize';
import { loadConfig } from 'svgo';

loadConfig('svgo.config.js', process.cwd()).then((options) => optimize('src/icons/svg/*.svg', options));
