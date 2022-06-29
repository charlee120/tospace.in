$(window).on('load',function (){
	document.getElementById('loadingPage').style.display = 'none';
})

function pageReload() {
	return location.href = "https://tospace.in";

}

// setTimeout(function loadingPageTime(){
// 	document.getElementById('loadingPage').style.display = 'none';
// },0);


$(document).ready(function() {
	$('.menu-toggle').click(function() {
		$('.menu-toggle').toggleClass('active')
		$('.navlink').toggleClass('active')
		$('.more').addClass("fal fa-angle-down")
	})


	$(".dropdown").click(function(){
		$(".dropdown-content").slideToggle("fast");
	});


	$('#mobnav').click(function(){
		$('.menu').slideToggle()
	});



	$(window).scroll(function(){
		if($(this).scrollTop()>600){
			$("#moveToTop").fadeIn(600);
		}
		else{
			$("#moveToTop").fadeOut(600);
			
		}
	});
	$("#moveToTop").click(function(){
		$('html, body').animate({
			scrollTop:0
		},500);
	});

    setTimeout(function(){
		document.body.className="fade-in"
	},500);

  	document.querySelector('#copyright-year').innerText = new Date().getFullYear();
	
	document.getElementById('contactPageNavigation').addEventListener('click',
	function (){
		document.querySelector('.contactModelContents').style.display = 'flex';
	});

	document.querySelector('.contactPageClose').addEventListener('click',
	function (){
		document.querySelector('.contactModelContents').style.display = 'none';
		document.querySelector('.contactForm').reset();
	});

});

//About page platforms navigation to service page

function SatellitePlatform(){
	return location.href = "service#satelliteplatform_container";
}
function LaunchPlatform(){
	return location.href = "service#LaunchPlatform_container";
}
function HeliumPlatform(){
	return location.href = "service#HeliumBallonPlatform_container";
}
function GroundStation(){
	return location.href = "service#GroundStationPlatform_container";
}

//About page crewContents

$(document).ready(function(){
	$('.crewimage1').show(
		function() {
			$('.crewcontents1').show();
	}),
	$('.crewimage1').hover(
		function() {
			
			for (var i =1;i<=10;i++) {
				if(i==1){
					$('.crewcontents1').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);

	$('.crewimage2').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==2){
					$('.crewcontents2').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);

	$('.crewimage3').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==3){
					$('.crewcontents3').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);

	$('.crewimage4').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==4){
					$('.crewcontents4').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);

	$('.crewimage5').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==5){
					$('.crewcontents5').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);
	
	$('.crewimage6').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==6){
					$('.crewcontents6').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);

	$('.crewimage7').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==7){
					$('.crewcontents7').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);
	$('.crewimage8').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==8){
					$('.crewcontents8').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);
	$('.crewimage9').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==9){
					$('.crewcontents9').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);
	$('.crewimage10').hover(
		function() {
			for (var i =1;i<=10;i++) {
				if(i==10){
					$('.crewcontents10').show();
				}
				else{
				$('.crewcontents'+i).hide();
				}
			}
		},
	);

});


const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "ffffff";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/contact.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}




document.querySelector('#Homerocket-button').addEventListener('click',
function (){
	document.querySelector('.contactModelContents').style.display = 'flex';
});

document.querySelector('.contactPageClose').addEventListener('click',
function (){
	document.querySelector('.contactModelContents').style.display = 'none';
	document.querySelector('.contactForm').reset();
});