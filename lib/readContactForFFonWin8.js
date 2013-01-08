//--------- This is the file for read and update contact scenario for Firefox browser on Windows 8 ------
var a = require('./contactData.js'), 
	b = require('./contactObj.js'),
	utils = require('./utils.js');
	var fs = require('fs');
	var caps = require('../sauce-arguments.js');
	exports.readContact = function(browser) {
	utils.results('*****Reading a Contact*****');
	utils.pause(10000,function(){
	var xpath = "//div[contains(text(),'"+ a.VARIABLES.contact_fname +"')]";
	utils.pause(5000, function(){
	browser.elementByXPath(b.readObj1.searchField_xpath, function(err,el27){
	browser.type(el27,a.VARIABLES.contact_fname + "\uE007",function(err){
	utils.pause(6000,function(){
	browser.elementByXPath(b.readObj1.contactsHeading_xpath, function(err,headingEl){
	browser.clickElement(headingEl, function(err){
	browser.waitForElementByXPath(b.readObj1.readContact_xpath, 60000,function(err){
	browser.elementByXPath(b.readObj1.readContact_xpath,function(err,el3){
	browser.clickElement(el3, function(err){
	utils.pause(6000,function(){
	browser.elementByXPath(b.readObj1.overview_xpath, function(err, overviewEl){
	browser.clickElement(overviewEl, function(err){
	browser.waitForElementByXPath(b.readObj1.heading_xpath, 10000, function(err){
	if(err)	utils.results('Contact Heading incorrect');
	else utils.results('Contact Heading verified');
	browser.elementByXPath(b.readObj1.cfname_xpath, function(err,el4){
	browser.getValue(el4, function(err,value){
	if(value == a.VARIABLES.contact_fname) utils.results('PASS: First name verified');
	else utils.results('FAIL: First name incorrect');
	browser.elementByXPath(b.readObj1.cmname_xpath, function(err,el5){
	browser.getValue(el5, function(err,value){
	if(value == a.VARIABLES.contact_mname) utils.results('PASS: Middle name verified');
	else utils.results('FAIL: Middle name incorrect');
	browser.elementByXPath(b.readObj1.clname_xpath, function(err,el6){
	browser.getValue(el6, function(err,value){
	if(value == a.VARIABLES.contact_lname) utils.results('PASS: Last name verified');
	else utils.results('FAIL: Last name incorrect');
	browser.elementByXPath(b.readObj1.addressEditButton_xpath, function(err, el7){
	browser.clickElement(el7, function(err){
	browser.elementByXPath(b.readObj1.addressLine1_xpath, function(err, el8) {
	browser.getValue(el8, function(err,value){
	if(value == a.VARIABLES.contact_addressLine1) utils.results('PASS: Address Line verified');
	else utils.results('FAIL: Address Line incorrect');
	browser.elementByXPath(b.readObj1.addressDoneButton_xpath, function(err, el9) {
	browser.clickElement(el9, function(err){
	browser.elementByXPath(b.readObj1.jobtitle_xpath, function(err,el10) {
	browser.getValue(el10, function(err,value){
	if(value == a.VARIABLES.contact_jobtitle) utils.results('PASS: Job title Verified');
	else utils.results('FAIL: Job Title incorrect');
	browser.elementByXPath(b.readObj1.email_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_email) utils.results('PASS: Email verified');
	else utils.results('FAIL: Email incorrect');
	browser.elementByXPath(b.readObj1.phone_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_phone) utils.results('PASS: Phone No. verified');
	else utils.results('FAIL: Phone No. incorrect');
	browser.hasElementByXPath(b.readObj1.charecRead_xpath, function(err,bool){
	if(bool) utils.results('PASS: Charecteristic verified');
	else utils.results('FAIL: Charecteristic. incorrect');
	browser.elementByXPath(b.readObj1.cnotes_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_notes) utils.results('PASS: Contact notes verified');
	else utils.results('FAIL: Contact Notes incorrect');
	browser.elementByXPath(b.readObj1.caccount_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_account) utils.results('PASS: Contact account verified');
	else utils.results('FAIL: Contact account incorrect');
	browser.elementByXPath(b.readObj1.cowner_xpath, function(err,el11){
	browser.getValue(el11, function(err,value){
	if(value == a.VARIABLES.contact_owner) utils.results('PASS: Contact owner verified');
	else utils.results('FAIL: Contact owner incorrect');
	process.nextTick(function(){utils.results('***** Updating the contact *****')});
	utils.pause(2000,function(){
	browser.elementByXPath(b.readObj1.cmname_xpath, function(err,el22){
	browser.clear(el22, function(err){
	browser.elementByXPath(b.readObj1.cmname_xpath, function(err,el24){
	browser.type(el24,a.VARIABLES.contact_newmname + '\uE004', function(err){
	utils.pause(2000,function(){
	browser.elementByXPathOrNull(b.readObj1.saveToolBar_xpath, function(err, toolbarEl){
	browser.clickElement(toolbarEl, function(err){
	utils.pause(2000,function(){
	browser.elementByXPath(b.readObj1.savebutton_xpath, function(err, el25){
	browser.clickElement(el25, function(err){
	utils.pause(4000, function(){
	process.nextTick(function(){utils.results('***** Verifying the contact Update*****')});
	browser.elementByXPath(b.readObj1.refreshButton_xpath, function(err, el26){
	browser.clickElement(el26, function(err){	
	utils.pause(5000,function(){
	browser.elementByXPath(b.readObj1.contactsHeading_xpath, function(err,headingEl){
	browser.clickElement(headingEl, function(err){
	browser.elementByXPath(b.readObj1.readContact_xpath,function(err,contactEl){
	browser.clickElement(contactEl, function(err){
	utils.results('Opening the contact For verification');
	utils.pause(6000,function(){
	browser.elementByXPath(b.readObj1.contactmname2_xpath,function(err,el30){
	browser.getValue(el30, function(err,value){
	if(value == a.VARIABLES.contact_newmname)	utils.results("Contact updated with new middle name");
	else utils.results("Contact not updated with new middle name");
	browser.elementByXPath(b.readObj1.backButton_xpath, function(err, el31){
	browser.clickElement(el31, function(err){
	browser.quit();
	})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})}


