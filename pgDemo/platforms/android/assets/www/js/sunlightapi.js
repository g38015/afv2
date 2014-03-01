$(document).ready(function() {

  $("#locate").submit(function(e){
    e.preventDefault();
    $("#rep").empty(); 

    var zipcode = $("#locateZip").val(),
        api = "75454895946047fd93e1e022ae52295f",
        url = "https://congress.api.sunlightfoundation.com/legislators/locate?callback=?";



      $.getJSON(url, {

          'apikey' : api,
          'zip' : zipcode,

        }, function(data) {


        $.each(data.results, function(index, official){

           representative = 
			               		  "<div class='col-xs-12 col-sm-6'>" +
			                    "<div class='panel panel-primary'>" +
                          "<div class='panel-heading'>" +
                          "<h3 class='panel-title'>" + official.first_name + " " + official.last_name + "</h3>" +
                          "</div>" +
			                    "<div class='panel-body colortext'>" +
			                    "<h4>" + "Political Party: " + official.party + "</h4>" +
			                    "<h4>" + "Phone: " + official.phone + "</h4><br />" +
                          "<a href='" + official.website + "'id='btnClic' class='btn btn-primary'>Visit Website</a>" +
			                    "</div>" +
			                    "</div>" +
			                    "</div>";

          $("#rep").append(representative);

          }); // each

        }); // end getJSON

  }); // end submit

}); // end document ready
