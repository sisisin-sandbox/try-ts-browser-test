const fs = require('fs');
const assert = require('power-assert');

const accessLogFile = './e2e_tmp/access.log';
const staticAccessLogFile = './e2e_tmp/static-access.log';
function assertAccessLog(expect) {
  const accessLog = fs.readFileSync(accessLogFile, 'utf-8').split('\n');
  accessLog.pop();
  assert.deepStrictEqual(accessLog, expect);
}
function initFixture() {
  fs.writeFileSync(accessLogFile, '');
  fs.writeFileSync(staticAccessLogFile, '');
};


module.exports = {
  assertAccessLog, initFixture, accessLogFile, staticAccessLogFile
};
