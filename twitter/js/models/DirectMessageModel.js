// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('twitter.DirectMessageModel');
goog.require('twitter.DirectMessage');
twitter.DirectMessageModel = function() {

}

twitter.DirectMessageModel.prototype.sendDirectMessage = function (from,to,body) {
    var directMessage = new twitter.DirectMessage(from.id, to.id, body);
    localStorage.setObject(directMessage.id,directMessage);
    };

twitter.DirectMessageModel.prototype.getInboxByUserId = function (userId) {
    var array = [];
    for(var directMessage in localStorage) {
     directMessage = localStorage.getObject(directMessage);
        if(directMessage && directMessage.userId && directMessage.to.user.id==userId){
        array.push(directMessage);
        }
    }
    return array;
    };

twitter.DirectMessageModel.prototype.getSentByUserId = function (userId) {
    var array = [];
    for(var directMessage in localStorage) {
     directMessage = localStorage.getObject(directMessage);
        if(directMessage && directMessage.userId && directMessage.from.user.id==userId){
        array.push(directMessage);
        }
    }
    return array;
    };