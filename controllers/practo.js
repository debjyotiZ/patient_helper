exports.getPracto = function(req,res){
    var url = require('url');
    var url_parts = url.parse(req.url,true);
    
    var query = url_parts.query;
    var location = query.location;
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://api.practo.com/doctors?city=' + location + '&with_relations=true',false);
    xmlhttp.setRequestHeader("X-API-KEY","qPyOrdb7NEsXfvJ4CHyDisLa+ds=");
    xmlhttp.setRequestHeader("X-CLIENT-ID","27979c0c-52ac-4e33-8a23-710042499d7f");
    xmlhttp.send();
    console.log(JSON.parse(xmlhttp.responseText));
    res.end(xmlhttp.responseText);
};