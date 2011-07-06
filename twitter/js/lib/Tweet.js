/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:35
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Tweet');
goog.require('tart');
twitter.Tweet = function(userId, body){
    this.id = tart.getUId();
    this.userId = userId;
    this.body = body;
    this.time = tart.randomTime();
}
