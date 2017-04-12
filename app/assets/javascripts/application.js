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
		var lat0 = $(".lat")[0].innerText;
		var lng0 = $(".lng")[0].innerText;
		var lat0Parse = Number(parseFloat(lat0).toFixed(7));
		var lng0Parse = Number(parseFloat(lng0).toFixed(7));

		var lat1 = $(".lat")[1].innerText;
		var lng1 = $(".lng")[1].innerText;
		var lat1Parse = Number(parseFloat(lat1).toFixed(7));
		var lng1Parse = Number(parseFloat(lng1).toFixed(7));

		var lat2 = $(".lat")[2].innerText;
		var lng2 = $(".lng")[2].innerText;
		var lat2Parse = Number(parseFloat(lat2).toFixed(7));
		var lng2Parse = Number(parseFloat(lng2).toFixed(7));
	  var miramar = [36.978207, -121.945820];
	  navigator.geolocation.getCurrentPosition(Cb);

	  function Cb(response){
	    var position = response.coords;
	    var currentPosition = [position.latitude,position.longitude];
	    var radius = position.accuracy;

	    var map = new google.maps.Map(document.getElementById('map'), {
	      center: {lat:lat1Parse, lng:lng1Parse},
	      zoom: 10
	    });

	    var marker = new google.maps.Marker({
	      map: map,
	      position: {lat:lat1Parse, lng:lng1Parse}
	    });

	    var marker = new google.maps.Marker({
	      map: map,
	      position: {lat:lat2Parse, lng:lng2Parse}
	    });

	    var marker = new google.maps.Marker({
	      map: map,
	      position: {lat:lat0Parse, lng:lat0Parse}
	    });

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

	    //   function callback(response, status) {
	    //     if (status == 'OK') {
	    //       var origins = response.originAddresses;
	    //       var destinations = response.destinationAddresses;

	    //       for (var i = 0; i < origins.length; i++) {
	    //         var results = response.rows[i].elements;
	    //         for (var j = 0; j < results.length; j++) {
	    //           var element = results[j];
	    //           var distance = element.distance.value;
	    //           var duration = element.duration.text;
	    //           var from = origins[i];
	    //           var to = destinations[j];
	    //         }
	    //       }
	    //       if (distance < 800) {
	    //         console.log(distance, "close")
	    //       }else{
	    //         console.log(distance, "far")
	    //       }

	    //     }
	    //   }
	  }
	}