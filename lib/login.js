/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, strict:true, trailing:true, white:true */
//--------- function to login to the Mobile application -----
(function () {
  "use strict";
  var data1 = require('./loginData.js'),
    loginObj = require('./loginObj.js'),
    utils = require('./utils.js');
  exports.login = function (browser, desired, callback) {
    browser.init(desired, function () {
      browser.get(data1.data.webaddress, function () {
        browser.setImplicitWaitTimeout(10000, function () {
          utils.pause(10000,function(){
            browser.elementById(loginObj.obj.username_id, function (err, el) {
              browser.type(el, data1.data.username, function (err) {
                if (err) {
                  console.log('Site not accessable');
                }
                else {
                  browser.elementById(loginObj.obj.pwd_id, function (err, el2) {
                    browser.type(el2, data1.data.pwd, function () {
                      browser.elementById(loginObj.obj.login_id, function (err, el3) {
                        browser.clickElement(el3, function () {
                          browser.elementByXPath(loginObj.obj.toytruck_xpath, function (err, el4) {
                            browser.clickElement(el4, function () {
                              utils.pause(10000, function () {
                                browser.waitForElementByXPath(loginObj.obj.welcome_xpath, 60000, function () {
                                  browser.elementsByXPath(loginObj.obj.welcome_xpath, function (err, el5) {
                                    browser.isVisible(el5, function (err, flag) {
                                      if (flag) {
                                        console.log('Site loaded successfully ');
                                        callback(browser);
                                      }
                                      else {
                                        utils.results('Site loading failed or took more than expected time');
                                        setTimeout(2000, function () {
                                          browser.quit();
                                          setTimeout(1000, function () {
                                            process.exit(1);
                                          }, 2000);
                                        }, 2000);
                                      }
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }
              });
            });
          });
        });
      });
    });
  };
}());

