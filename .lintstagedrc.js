module.exports = {
  '*.ts': [() => 'tsc -p tsconfig.json --noEmit', 'eslint --cache --fix'],
  '*.{ts,js,json,yml}': 'prettier --cache --write',
};
