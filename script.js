$("h2").click(function() {
    // add a new paragraph to the container div
	$("#container").append("<h1>SURPRISE!</h1>");
});
    
$("p").hover(function() {
    	// change the text color of all elements with class 'xyz' to blue
    	$(".xyz").css("color", "tomato");
    },
    function() {
    	// change the text color of all elements with class 'xyz' to black
    	$(".xyz").css("color", "black");
});

$("button").click(function(){
    $(".button").animate({left: '550px'});


}); 
