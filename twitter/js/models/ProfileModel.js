// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.ProfileMode');
goog.require('twitter.Profie');

twitter.ProfileModel = function() {

}

twitter.ProfileModel.prototype.createProfile = function (bio,photoUrl,location) {
        var profile = new twitter.Profile(bio,photoUrl,location) ;
        localStorage.setItem(profile.id,profile);
};

twitter.ProfileModel.prototype.getProfileByUserId = function (userId) {
    for(var profile in localStorage) {
        profile = localStorage.getObject(profile);
        if(profile.userId==userId) {
            return profile;
        }
    }
    return false;
};
twitter.ProfileModel.prototype.editProfileByUserId = function (userId,bio,photoUrl,location) {
        for(var profile in localStorage) {
            profile = localStorage.getObject(profile);
            if(profile.userId==userId) {
             profile.bio = bio;
             profile.photoUrl = photoUrl;
             profile.location = location;
             localStorage.setObject(profile.id,profile);

        }
        }
};
