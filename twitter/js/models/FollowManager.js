// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.FollowManager');
goog.require('twitter.Follow');
goog.require('twitter.UserModel');

twitter.FollowManager = function() {

}

twitter.FollowManager.prototype.createFollow = function (follower,following) {
        var follow = new twitter.Follow(follower.id,following.id);
        localStorage.setObject(follow.id, follow);
};
/**
 *
 * @param {number} userId A user id.
 * @return(Array.<Users>} Followa of the given user.
 */

twitter.FollowManager.prototype.getFollowingByUserId = function (userId) {
    var array = [];
    for(var following in localStorage) {
        following = localStorage.getObject(following);
        if(following && following.userId && following.userId==userId) {
            array.push(following)
        }
    }
    return array;
};

/**
 *
 * @param userId
 * @return {(boolean|number)}
 */
FollowManager.prototype.getFollowersByUserId = function (userId) {
    //var returnValue= false;
    //if(userId == "1") {
      //  returnValue= "@2"
    //}
    //return returnValue;

    var array = [];
    for(var follower in localStorage) {
        follower = localStorage.getObject(follower);
        if(follower && follower.userId && follower.userId==userId) {
            array.push(follower)
        }
    }
    return array;
};