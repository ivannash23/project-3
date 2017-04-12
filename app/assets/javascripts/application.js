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
		var $hours = $(".hour");
		var names = $("h3").toArray().map(x => x.innerHTML);
		var dates = $(".date");

		for(var i=0; i < lats.length; i++){
			var tempLat = Number(parseFloat(lats[i].innerText).toFixed(7));
			var tempLng = Number(parseFloat(lngs[i].innerText).toFixed(7));

	    var marker = new google.maps.Marker({
	      map: map,
	      position: {lat:tempLat, lng:tempLng}
	    });
		}

		$("#checkIn").click(function() {
		navigator.geolocation.getCurrentPosition(Cb);
		var d = new Date();
		d.setDate(d.getDate());

		function Cb(response){
			var position = response.coords;
			var currentPosition = [position.latitude,position.longitude];

			var marker = new google.maps.Marker({
			  map: map,
			  position: {lat: currentPosition[0], lng: currentPosition[1]}
			});
		

			var destinationA = new google.maps.LatLng(currentPosition[0], currentPosition[1]);

				for(var i=0; i < lats.length; i++){
					var tempLat = Number(parseFloat(lats[i].innerText).toFixed(7));
					var tempLng = Number(parseFloat(lngs[i].innerText).toFixed(7));
			    var origin1 = new google.maps.LatLng(tempLat, tempLng);

			    var service = new google.maps.DistanceMatrixService();
	    		service.getDistanceMatrix({
	        origins: [origin1],
	        destinations: [destinationA],
	        travelMode: 'WALKING',
	        unitSystem: google.maps.UnitSystem.IMPERIAL
	      	}, 
	      	callback);
			  	}
			  	
      function callback(response, status) {
      	// here, the callback is called with a single response for one of your tasks.
      	// you need to figure out WHICH TASK that is.
        if (status == 'OK') {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;

          var results = response.rows[0].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.value;
            if (distance < 1000) {
            	// check if it's time for that task
            	var d = new Date();
            	var h = d.getHours();
            	var m = (d.getMinutes()<10 ? '0':'') + d.getMinutes();
            	var displayHour= h+ ":" + m;
            	if($hours[j].innerText == displayHour){
            		console.log("Checked in for task " + names[j])
            	}else{
            		console.log("Come back on the task time for task " + names[j])
            	}
            } else{
            	console.log("You are not at your task location for task " + names[j])
          	} 
          }
        }
      }
		}
	});
	}