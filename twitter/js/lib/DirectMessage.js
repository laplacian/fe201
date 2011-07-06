// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>
var DirectMessage = function(from , to, body){
    this.id = tart.getUId();
    this.from = from;
    this.to = to;
    this.body = body;
}
