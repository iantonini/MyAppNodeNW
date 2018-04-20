const Request = require("request");
const Url = "https://raw.githubusercontent.com/iantonini/MyAppNodeNW/master/exemplo.html";
// const Url = "https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline";

Request.get(Url, (error, response, body) => {
	if(error || response.statusCode != 200){
		console.dir(error);
		throw "Erro ao receber as informações da API";
	}

    var Jresponse = JSON.parse(body);

    for(var i=0; i < Jresponse.length; i++){
    	
    	var html = '<p><image class="col-md-3" src="' + Jresponse[i].thumbnail + '"/></p>';
		$('#json').append(html);
    }
});



