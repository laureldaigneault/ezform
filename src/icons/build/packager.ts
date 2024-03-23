const _ = require('lodash');
const del = require('del');
const path = require('path');
const fs = require('fs-extra');
import { formatName, getSVGContent } from './utils';
import iconTemplate from './iconTemplate';
import { indexTemplate } from './indexTemplate';

const BUILD_PATH = path.join(__dirname, '..', 'components');

function createComponents(svgDataList: any) {
  const iconComponents: { filepath: string; componentName: string }[] = [];

  // place svg content inside react component
  const files = svgDataList.map((svg: any) => {
    try {
      // Fix viewBox, if necessary, to make it easier to extract width/height below
      const viewBox = svg.source.match(/.*viewBox="([-\d. ]+)".*/)
        ? svg.source.replace(/.*viewBox="([-\d. ]+)".*/, '$1')
        : undefined;
      const viewBoxParams = viewBox.split(' ');
      let globalFill = svg.source.match(/(fill="[a-zA-Z#(), 0-9]+")/);
      globalFill = globalFill ? globalFill[0] : undefined;

      // Use metadata before viewBox params
      const width = svg.metadata.width || viewBoxParams[2];
      const height = svg.metadata.height || viewBoxParams[3];

      // Extract icon name and create component tag name
      const name = formatName(svg.metadata.name);
      const componentName = `${_.upperFirst(_.camelCase(name))}`;
      let svgPaths = getSVGContent(svg.source);
      svgPaths = svgPaths
        .replace(/xlink:href/g, 'xlinkHref')
        .replace(/([a-zA-Z]+-[a-zA-Z]+)/g, (match) => _.camelCase(match))
        .replace(/<![-]{2}.*[-]{2}>/g, '')
        .replace(/(.*)(style=)"([a-zA-Z]+):([a-zA-Z]+)"(.*)/g, "$1$2{{$3:'$4'}}$5");

      // Inject svg content into component template
      const source = iconTemplate({ componentName, width, height, viewBox, svgPaths, name, globalFill });
      const filepath = `${componentName}.tsx`;
      iconComponents.push({ filepath, componentName });

      return { filepath, source };
    } catch (e) {
      console.log('unable to find viewBox for', formatName(svg.metadata.name));
    }
  });

  files.push({
    filepath: '../index.tsx',
    source: indexTemplate({ icons: iconComponents }),
  });

  // files.push({
  //   filepath: '../../README.md',
  //   source: getReadme({icons: iconComponents})
  // });

  return {
    name: '',
    files,
  };
}

// Build the npm packages
export default function createPackage(svgDataList: any) {
  const componentsPackage = createComponents(svgDataList);

  // Sync files as they are built
  del.sync(BUILD_PATH);

  console.log('Building package: Icons');

  componentsPackage.files.forEach((file: { filepath: string; source: string }) => {
    if (file) fs.outputFile(path.join(BUILD_PATH, componentsPackage.name, file.filepath), file.source);
  });
}
