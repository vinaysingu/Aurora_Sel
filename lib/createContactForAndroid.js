var a = require('./contactData.js');
var b = require('./contactObj.js');
var c = require('./utils.js');

exports.createContact = function(browser,callback) {
c.results('*****Creating a New Contact*****');

c.pause(10000,function(){
browser.elementByXPath(b.Obj.crmlink_xpath, function(err,el1){
browser.clickElement(el1, function(err){
browser.waitForElementByXPath(b.Obj.contactslink_xpath, 60000, function(err)
{
	browser.elementByXPathOrNull(b.Obj.contactslink_xpath, function(err, el2)
	{
  	browser.clickElement(el2, function(err){
	c.pause(4000,function(){
	browser.elementByXPathOrNull(b.Obj.newToolBar_xpath, function(err, toolBarEl){
	browser.clickElement(toolBarEl, function(err){
	c.pause(2000,function(){
	browser.elementByXPathOrNull(b.Obj.newbutton_xpath, function(err, el3){
	browser.clickElement(el3, function(err){
	c.pause(2000,function(){
	browser.elementByXPath(b.Obj.overview_xpath, function(err, overviewEl){
	browser.clickElement(overviewEl, function(err){
	browser.elementByXPath(b.Obj.cfname_xpath, function(err, el4){
	browser.type(el4, a.VARIABLES.contact_fname + '\uE004', function(err) {
	c.pause(2000, function(){
	browser.elementByXPath(b.Obj.cmname_xpath, function(err, el5){
	browser.type(el5, a.VARIABLES.contact_mname + '\uE004', function(err){
	c.pause(2000, function(){
	browser.elementByXPath(b.Obj.clname_xpath, function(err, el6){
	browser.type(el6, a.VARIABLES.contact_lname + '\uE004', function(err){
	browser.elementByXPath(b.Obj.addressEditButton_xpath, function(err, el7){
	browser.clickElement(el7, function(err) {
	browser.waitForElementByXPath(b.Obj.addressLine1_xpath, 4000, function(err){
	browser.elementByXPath(b.Obj.addressLine1_xpath, function(err, el8){
	browser.type(el8,a.VARIABLES.contact_addressLine1, function(err){
	browser.elementByXPath(b.Obj.addressLine2_xpath, function(err, addrLine2){
	browser.type(addrLine2, ' ',function(err){
	browser.elementByXPath(b.Obj.addressDoneButton_xpath, function(err, doneEl){
	browser.clickElement(doneEl, function(err){
	browser.elementByXPath(b.Obj.jobtitle_xpath, function(err,el9){
	browser.type(el9,a.VARIABLES.contact_jobtitle, function(err){
	browser.elementByXPath(b.Obj.email_xpath, function(err, el10){
	browser.type(el10, a.VARIABLES.contact_email, function(err){
	browser.elementByXPath(b.Obj.phone_xpath, function(err, el11){
	browser.type(el11, a.VARIABLES.contact_phone, function(err){
	browser.elementByXPath(b.Obj.charecnew_xpath, function(err,el12){
	browser.clickElement(el12, function(err){
	browser.waitForElementByXPath(b.Obj.charecinput_xpath, 1000, function(err){
	browser.elementByXPath(b.Obj.charecinput_xpath, function(err, el13){
	browser.type(el13,a.VARIABLES.contact_bday, function(err){
	browser.elementByXPath(b.Obj.cnotes_xpath, function(err, el14){
	browser.type(el14, a.VARIABLES.contact_notes, function(err){
	browser.elementByXPath(b.Obj.caccount_xpath, function(err, el15){
	browser.type(el15, a.VARIABLES.contact_account + '\uE004', function(err){
	c.pause(2000,function(){
	browser.elementByXPathOrNull(b.Obj.saveToolBar_xpath, function(err, toolbarEl){
	browser.clickElement(toolbarEl, function(err){
	browser.elementByXPath(b.Obj.savebutton_xpath, function(err, el17){
	browser.clickElement(el17, function(err){
	c.pause(4000,function(){
	browser.elementByXPath(b.readObj1.newToolBar_xpath, function(err, toolBarEl){
	browser.clickElement(toolBarEl, function(err){
	c.pause(4000,function(){
	browser.elementByXPath(b.readObj1.searchField_xpath, function(err,el27){
	browser.type(el27,a.VARIABLES.contact_fname,function(err){ //------ Enters the contact first name in the search field and hits 'Refresh' button
	c.pause(2000,function(){
	browser.elementByXPath(b.readObj1.refreshButton_xpath, function(err, el26){
	browser.clickElement(el26, function(err){	
	c.pause(6000,function(){
	browser.elementByXPath(b.readObj1.newToolBar_xpath, function(err, toolBarEl){
	browser.clickElement(toolBarEl, function(err){
	c.pause(40000, function(){
	browser.waitForVisibleByXPath(b.readObj1.readContact_xpath, 60000,function(err){ 
	browser.elementByXPath(b.readObj1.readContact_xpath, function(err,contactEl){
	browser.isDisplayed(contactEl, function(err,displayed){
	if(displayed)
	{
		c.results('contact saved');
	}
	else
	{
		c.results('contact not saved');
		process.nextTick(function(){c.pause(1000, function(){
		browser.quit();
		c.pause(1000, function(){
		process.exit(1);
		})
		})});
	}
	callback(browser);
})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})}