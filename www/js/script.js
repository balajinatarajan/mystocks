invoke();

setInterval( function(){
	invoke();
	amt = 0;
	$('.pershare').each(function(){
    amt = amt + Number($(this).text());
  });
	$('#total').html('$' + (Math.round(amt * 100) /100 ));
}, 60000);

function invoke() {
	$('#index').html('');

  var response1 = [{
                "index": "AAPL",
                "shares": 9,
                "amt": 0
              },
              {
                "index": "TWTR",
                "shares": 38,
                "amt": 0
              },
              {
                "index": "FIT",
                "shares": 1,
                "amt": 0
              },
              {
                "index": "SIRI",
                "shares": 13,
                "amt": 0
              }];

	for(var i=0; i < response1.length; i++) {
		(function(x, y){
			$.ajax({
					url:"http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=" + x.index,
  				jsonp: "callback",
  				dataType: "jsonp",
  				success: function( response2 ) {
      				$('#index').append('<div class="col col-md-3"><div class="panel panel-default"><div class="panel-heading">' + response2.Symbol + '</div><div class="price">$' + response2.LastPrice + '</div>x ' + x.shares + ' = <div class="pershare">' + (x.shares * response2.LastPrice) + '</div></div></div>');
  				}
			});
		})(response1[i], i);
	}
}

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var radius = canvas.height / 2;
// ctx.translate(radius, radius);
// radius = radius * 0.90
// setInterval(drawClock, 1000);

// function drawClock() {
//   drawFace(ctx, radius);
//   drawNumbers(ctx, radius);
//   drawTime(ctx, radius);
// }

// function drawFace(ctx, radius) {
//   var grad;
//   ctx.beginPath();
//   ctx.arc(0, 0, radius, 0, 2*Math.PI);
//   ctx.fillStyle = '#333';
//   ctx.fill();
//   grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//   grad.addColorStop(0, '#fff');
//   grad.addColorStop(0.5, 'white');
//   grad.addColorStop(1, '#fff');
//   ctx.strokeStyle = grad;
//   ctx.lineWidth = 0;
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.fillStyle = '#fff';
//   ctx.fill();
// }

// function drawNumbers(ctx, radius) {
//   var ang;
//   var num;
//   ctx.font = radius*0.25 + "px arial";
//   ctx.textBaseline="middle";
//   ctx.textAlign="center";
//   for(num = 1; num < 13; num++){
//     ang = num * Math.PI / 6;
//     ctx.rotate(ang);
//     ctx.translate(0, -radius*0.75);
//     ctx.rotate(-ang);
//     ctx.fillText(num.toString(), 0, 0);
//     ctx.rotate(ang);
//     ctx.translate(0, radius*0.75);
//     ctx.rotate(-ang);
//   }
// }

// function drawTime(ctx, radius){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     //hour
//     hour=hour%12;
//     hour=(hour*Math.PI/6)+
//     (minute*Math.PI/(6*60))+
//     (second*Math.PI/(360*60));
//     drawHand(ctx, hour, radius*0.5, radius*0.04);
//     //minute
//     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
//     drawHand(ctx, minute, radius*0.8, radius*0.04);
//     // second
//     second=(second*Math.PI/30);
//     drawHand(ctx, second, radius*0.9, radius*0.02);
// }

// function drawHand(ctx, pos, length, width) {
//     ctx.beginPath();
//     ctx.lineWidth = width;
//     ctx.lineCap = "round";
//     ctx.moveTo(0,0);
//     ctx.rotate(pos);
//     ctx.lineTo(0, -length);
//     ctx.stroke();
//     ctx.rotate(-pos);
// }