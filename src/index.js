$(document).ready(function(){

	$("#photo-form").submit(function(e){
		e.preventDefault()
		var image = $("#image_url").val();
		var caption = $("#caption").val();
		var img = new Image(image, caption)
		
		$("#photo-list").append(img.render())
		$("#image_url").val("");
		$("#caption").val("");	
		
		console.log(image, caption)
	})

	

	



})


