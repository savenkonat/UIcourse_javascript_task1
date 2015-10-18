// first way create elements <li>
for (var i = 1; i <= 100; i++) {
	var li = document.createElement("li");
	content = document.createTextNode(i);
	createLi = document.getElementById("createLi");
	
	li.appendChild(content);
	
	createLi.parentNode.appendChild(li);
}
//second way create fragment with list of elements <li>
/*
var fragment = document.createDocumentFragment();
for (var i = 1; i <= 100; i++) {
	li = document.createElement("li");
	li.innerHTML = i;
	
	fragment.appendChild(li);
}
	createLi.parentNode.appendChild(fragment);
*/
// third way with .innerHTML
/*var li = "<li>name</li>";
for (var i = 1; i <= 100; i++) {
     
	createLi.innerHTML += li;
}*/
	

