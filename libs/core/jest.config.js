module.exports = {
  name: 'ngel-core',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
