export const indexTemplate = ({ icons }: any) =>
  icons
    .map(
      ({ filepath, componentName }: any) =>
        `export { default as ${componentName} } from './components/${filepath.replace(/\.tsx$/, '')}';
`
    )
    .join('');
