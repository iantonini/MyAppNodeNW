const Request = require("request");
const Url = "https://raw.githubusercontent.com/iantonini/MyAppNodeNW/master/exemplo.html";

// Iniciando Filtros
var Filtros = [];
var Query = '';
var query = location.search;
var partes = query.split('&');
partes.forEach(function(parte){
    query = parte.split('=');
    Query = query[1];
});

Request.get(Url, (error, response, body) => {
    if(error || response.statusCode != 200){
        console.dir(error);
        throw "Erro ao receber as informações da API";
    }

    var Jresponse = JSON.parse(body);

    for(var i=0; i < Jresponse.length; i++){

        // Filtro de Categorias
        if(Filtros.indexOf('category_' + Jresponse[i].category) === -1){
            Filtros.push('category_' + Jresponse[i].category);
            var filtro_categoria = '<a class="dropdown-item" href="./index.html?search=category_' + Jresponse[i].category + '">' + Jresponse[i].category + '</a>';
            $('#category').append(filtro_categoria);
        }

        // Filtro de Tipos de Mídia
        if(Filtros.indexOf('type_' + Jresponse[i].type) === -1){
            Filtros.push('type_' + Jresponse[i].type);
            var filtro_tipo_midia = '<a class="dropdown-item" href="./index.html?search=type_' + Jresponse[i].type + '">' + Jresponse[i].type + '</a>';
            $('#type').append(filtro_tipo_midia);
        }

        // Conteudo da APIbody
        var html = '<div class="jumbotron">\
                        <div class="row col-md-12">\
                            <div class="col-md-12">\
                                Category: ' + Jresponse[i].category + '\
                            </div>\
                        </div>\
                        <div class="row col-md-12">\
                            <div class="row col-md-12">\
                                <div class="col-md-5">\
                                    <image class="col-md-12" src="' + Jresponse[i].thumbnail + '"/>\
                                </div>\
                                <div class="col-md-7">\
                                    <div class="col-md-12">\
                                        <h6>Title:</h6> ' + Jresponse[i].title + '\
                                    </div>\
                                    <div class="col-md-12">\
                                        <h6>Type:</h6> ' + Jresponse[i].type + '\
                                    </div>\
                                    <div class="col-md-12">\
                                        <h6>Description:</h6> ' + Jresponse[i].description + '\
                                    </div>\
                                    <div class="col-md-12">\
                                        <h6>File:</h6> ' + Jresponse[i].file + '\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';

        if(Query != '' && Query != 'all' && Query != undefined){
            if(Query != 'category_' + Jresponse[i].category && Query != 'type_' + Jresponse[i].type){
                continue;
            }
        }
        $('#json').append(html);
    }
});



