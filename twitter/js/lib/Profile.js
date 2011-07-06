/**
 * Created by JetBrains PhpStorm.
 * User: Memo
 * Date: 05.07.2011
 * Time: 11:36
 * To change this template use File | Settings | File Templates.
 */

goog.provide('twitter.Profile');
goog.require('tart');

twitter.Profile = function(userId, bio, photoUrl, location){
    this.id = tart.getUId();
    this.userId = userId;
    this.bio = bio;
    this.photoUrl = photoUrl;
    this.location = location;
};