// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's 
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

	function initMap() {
		$(".lat").hide();
		$(".lng").hide();

	  var miramar = [32.872435, -117.138479];
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:miramar[0], lng:miramar[1]},
      zoom: 13
    });

		var lats = $(".lat");
		var lngs = $(".lng");

		for(var i=0; i < lats.length; i++){
			var tempLat = Number(parseFloat(lats[i].innerText).toFixed(7));
			var tempLng = Number(parseFloat(lngs[i].innerText).toFixed(7));
	    
	    var marker = new google.maps.Marker({
	      map: map,
	      position: {lat:tempLat, lng:tempLng}
	    });

		}
		

	    // var origin1 = new google.maps.LatLng(lat1Parse, lng1Parse);
	    // var destinationA = new google.maps.LatLng(lat0Parse, lng0Parse);

	    // var service = new google.maps.DistanceMatrixService();
	    // service.getDistanceMatrix(
	    //   {
	    //     origins: [origin1],
	    //     destinations: [destinationA],
	    //     travelMode: 'WALKING',
	    //     unitSystem: google.maps.UnitSystem.IMPERIAL
	    //   }, callback);

	      // function callback(response, status) {
	      //   if (status == 'OK') {
	      //     var origins = response.originAddresses;
	      //     var destinations = response.destinationAddresses;

	      //     for (var i = 0; i < origins.length; i++) {
	      //       var results = response.rows[i].elements;
	      //       for (var j = 0; j < results.length; j++) {
	      //         var element = results[j];
	      //         var distance = element.distance.value;
	      //         var duration = element.duration.text;
	      //         var from = origins[i];
	      //         var to = destinations[j];
	      //       }
	      //     }
	      //     if (distance < 800) {
	      //       console.log(distance, "close")
	      //     }else{
	      //       console.log(distance, "far")
	      //     }

	      //   }
	      // }
	}