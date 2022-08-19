// 提取每一个 md 的标题 生成 (路径 => 标题) 的映射

const glob = require('glob');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const pwd = process.cwd();

const MDFiles = glob.sync(pwd + '/docs/**/*.md');
const PathToJsonFile = path.resolve(pwd, 'docs/.vitepress/pathToTitle.json');
const map = {};

MDFiles.forEach(filePath => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const key = filePath.match(/blog\/docs(.*).md/)[1];
  const val = ((fileContent.match(/^#(.*)\n?/) || [])[1] || '').trim();
  map[key] = val;
});

const content = prettier.format(JSON.stringify(map), {
  parser: 'json'
});

fs.writeFileSync(PathToJsonFile, content);

console.log('pathToTitle.json 文件同步成功');
