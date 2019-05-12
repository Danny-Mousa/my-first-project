var x= document.getElementsByClassName("feature-btn");
for(var i=0; i<x.length;i++){
	x[i].addEventListener("mouseover", function(event){
    event.target.style.backgroundColor= "white";
    event.target.style.color= "#4d4dff";
    event.target.style.border= "1px solid #4d4dff";
    
	})
}	

for(var i=0; i<x.length;i++){
	x[i].addEventListener("mouseout", function(event){
    event.target.style.backgroundColor= "#4d4dff";
    event.target.style.color= "white";
    
	})
}	

