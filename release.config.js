module.exports = {
  branches: [
    'main',
    {
      name: 'beta',
      prerelease: true,
    },
    { name: 'test', channel: 'pre/rc', prerelease: 'rc' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
  repositoryUrl: 'https://github.com/laureldaigneault/ezform.git',
};
