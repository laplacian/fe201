/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:25
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.User');
goog.require('tart');
twitter.User = function (username,password) {
 this.id=tart.getUId();
 this.username = username;
 this.password = password;
 };

