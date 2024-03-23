// Format names to remove any extra information and add '-icon' to the end of the name
export const formatName = (name: string) => `${name.replace(/^(vg-)?\d+-[a-z]-(vg-)?/, '')}-icon`;

// strip out the SVG content (take out <svg> tags)
export const getSVGContent = (source: string) => {
  if (source.indexOf('xml') >= 0) {
    source = source.slice(source.indexOf('>') + 1);
  }
  return source.slice(source.indexOf('>') + 1).slice(0, -6);
};
