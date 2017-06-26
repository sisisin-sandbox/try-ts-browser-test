const webdriver = require('selenium-webdriver');
const { initFixture, assertAccessLog } = require('./test-helper');
let driver;

describe('browser e2e', () => {
  before(() => {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    return driver.getWindowHandle();
  });
  after(() => { return driver.quit(); });

  beforeEach(() => {
    initFixture();
  });

  it('should request `/req`', () => {
    driver.get('http://localhost:8080/e2e/sample.html');
    return new Promise(done => {
      setTimeout(() => {
        assertAccessLog(['/req']);
        done();
      }, 1000);
    })
  });
});