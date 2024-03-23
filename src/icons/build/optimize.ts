const path = require('path');
const fs = require('fs-extra');
const G = require('glob');
import { optimize as svgo } from 'svgo';
const _ = require('lodash');
import createPackage from './packager';

export default function optimize(pattern: string, svgoOptions): void {
  const optimizedList: any[] = [];
  const filePaths = G.sync(pattern);

  filePaths.forEach((filePath: string): void => {
    try {
      const name = path.basename(filePath, path.extname(filePath));
      fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
          throw err;
        }

        const result: any = svgo(fileData, { ...svgoOptions, path: filePath });
        const data: any = {};
        data.metadata = result.info;
        data.metadata.name = _.kebabCase(name);
        data.source = result.data;
        optimizedList.push(data);
        if (optimizedList.length === filePaths.length) {
          // Let the packager know that files are ready to be built
          createPackage(optimizedList);
        }
      });
    } catch (e) {
      console.error(e);
    }
  });
}
