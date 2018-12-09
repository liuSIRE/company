function $(id){
return document.getElementById(id);	
}
function createXhr(){
	var xhr=null;
if(window.XMLHttpRequest){
  xhr=new XMLHttpRequest();
}else{
 xhr=new ACtiveXobject("Microsoft.XMLHttp");
	}
return xhr;
}