var http = new XMLHttpRequest();
var url = 'http://bccoriflame.hu/hu/vote/votes';
var params = 'voteContent=22';
http.open('POST', url, true);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
http.send(params);
