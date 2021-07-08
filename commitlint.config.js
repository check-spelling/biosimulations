module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': async () => [1, 'always', 100],
    'footer-max-line-length': async () => [1, 'always', 100],
    'scope-enum': [
      2,
      'always',
      [
        'dispatch',
        'dispatch-api',
        'dispatch-service',
        'ontology-api',
        'account',
        'account-api',
        'mail-service',
        'platform',
        'platform-api',
        'simulators',
        'simulators-api',
        'auth',
        'config',
        'datamodel',
        'hsf5',
        'hsds',
        'dependencies',
        'messages',
        'ontology',
        'storage',
        'release',
        'combine-service',
        'shared-exceptions',
      ],
    ],
  },
};
