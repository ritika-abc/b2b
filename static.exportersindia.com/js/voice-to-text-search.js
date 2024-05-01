if (!('webkitSpeechRecognition' in window)){upgrade()} else {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
var diagnostic = document.querySelector('.output');
var helper = document.querySelector('.hint_DG');
var pulse = document.querySelector('.pulse');
var voice_btn = document.getElementById('circlein');
var temp_msg=document.querySelector('.temp_dg');
var pop_bg = document.querySelector('.pop_bg');
var menu_bg = document.querySelector('.menu_layer');
var obj = document.querySelector('.object');
recognition.onstart = function(event){
	diagnostic.textContent ='listening..';
	helper.textContent ='';
	pulse.style.display='block';
	temp_msg.style.display='none';
	obj.classList.remove('disable');
	voice_btn.classList.remove('disable');
}
recognition.onresult = function(event){
	var color = event.results[0][0].transcript;
	diagnostic.textContent = /*'Result received: ' +*/ color /*+ '.'*/;
	document.forms['search-form'].term.value = color;
	document.forms['search-form'].submit()
}

function Listen(speak_text){
	recognition.start();
	document.getElementById('listner').style.display='block';
	document.body.style.overflow='hidden';
	setTimeout(function(){Err_ck()/*;diagnostic.innerHTML = speak_text*/},1000)
}
function StopTalk(){
	recognition.stop();
	diagnostic.innerHTML = "Didn't hear that. Try again."
	helper.style.display='block';
	helper.innerHTML = "<center>Tap microphone to try again</center>";	
	pulse.style.display='none';
	obj.classList.remove('disable');
	voice_btn.classList.add('disable');
}
function Abort(){
	recognition.stop();
	document.getElementById('listner').style.display='none';
	pulse.style.display='none';
	pop_bg.style.display='none';	
	//document.body.style.overflow='auto';
	obj.classList.remove('disable');
	voice_btn.classList.add('disable');
	
	const bodyElement = document.body;
    if (bodyElement.hasAttribute('style')) {        
        const bodyStyle = bodyElement.getAttribute('style');        
        bodyElement.removeAttribute('style');
    }	
	if (document.querySelector('.menu_layer')) {menu_bg.style.display='none'}else{}	
}

document.getElementById('abort_DG').onclick = function(){Abort();}

$(document).on("click", "#VoiceSearch_DG", function(e) {
	//diagnostic.innerHTML = '<em>Speak Now..</em>';
	Listen('<em>Waiting for permission</em>')
	pulse.style.display='none';
	pop_bg.style.display='block';
});

/*
document.getElementById('VoiceSearch_DG').onclick = function(){
	Listen('<em>Waiting for permission</em>')
	pulse.style.display='none';
	pop_bg.style.display='block';	
}
*/
voice_btn.onclick = function(){
	diagnostic.innerHTML = '<em>Speak Now..</em>';
	helper.textContent = '';
	Listen('<em>Listening...</em>');
}

recognition.onspeechend = function(){
	recognition.stop();
	document.querySelector('.pulse').style.display='none';
}

recognition.onaudiostart = function() {
  //console.log('Audio capturing started'); 
  document.querySelector("div.pulse").style.display='block';
  diagnostic.innerHTML = "<em>Listening…  </em>";
  setTimeout(StopTalk,5000)
}

recognition.onerror = function(event){
	obj.classList.add('disable');
	diagnostic.innerHTML = 'Error: <em style="color:red">Microphone ' + event.error + '</em>';
}
}
function upgrade(){
	
	document.getElementById('VoiceSearch_DG').style.display='none';
	
	//   pop_bg.style.display='none';
	//24-01-2024 - radhe	 
	var pop_bg = document.getElementById('pop_bg');
	if (pop_bg) {
		pop_bg.style.display = 'none';
	} 

	document.body.style.overflow='auto';  	 
}

var o={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,a,n,i,r,s,f,c="",u=0;for(t=o._utf8_encode(t);u<t.length;)i=(e=t.charCodeAt(u++))>>2,r=(3&e)<<4|(a=t.charCodeAt(u++))>>4,s=(15&a)<<2|(n=t.charCodeAt(u++))>>6,f=63&n,isNaN(a)?s=f=64:isNaN(n)&&(f=64),c=c+this._keyStr.charAt(i)+this._keyStr.charAt(r)+this._keyStr.charAt(s)+this._keyStr.charAt(f);return c},decode:function(t){var e,a,n,i,r,s,f="",c=0;for(t=t.replace(/[^A-Za-z0-9+/=]/g,"");c<t.length;)e=this._keyStr.indexOf(t.charAt(c++))<<2|(i=this._keyStr.indexOf(t.charAt(c++)))>>4,a=(15&i)<<4|(r=this._keyStr.indexOf(t.charAt(c++)))>>2,n=(3&r)<<6|(s=this._keyStr.indexOf(t.charAt(c++))),f+=String.fromCharCode(e),64!=r&&(f+=String.fromCharCode(a)),64!=s&&(f+=String.fromCharCode(n));return f=o._utf8_decode(f)},_utf8_encode:function(t){t=t.replace(/rn/g,"n");for(var e="",o=0;o<t.length;o++){var a=t.charCodeAt(o);a<128?e+=String.fromCharCode(a):a>127&&a<2048?(e+=String.fromCharCode(a>>6|192),e+=String.fromCharCode(63&a|128)):(e+=String.fromCharCode(a>>12|224),e+=String.fromCharCode(a>>6&63|128),e+=String.fromCharCode(63&a|128))}return e},_utf8_decode:function(t){for(var e="",o=0,a=c1=c2=0;o<t.length;)(a=t.charCodeAt(o))<128?(e+=String.fromCharCode(a),o++):a>191&&a<224?(c2=t.charCodeAt(o+1),e+=String.fromCharCode((31&a)<<6|63&c2),o+=2):(c2=t.charCodeAt(o+1),c3=t.charCodeAt(o+2),e+=String.fromCharCode((15&a)<<12|(63&c2)<<6|63&c3),o+=3);return e}},

a = document.forms['search-form'].action; 
var gen;	
a.indexOf("//") > -1 ? hostname = a.split("/")[2] : hostname = a.split("/")[0];
var n = o.encode(hostname); //console.log(hostname)
var ip_name = window.location.hostname;
if(document.querySelector("meta[name=generator]")){
if(document.querySelector("meta[name=generator]").content != "")
gen = document.querySelector("meta[name=generator]").content
}
else{gen=''}
var r = (Math.PI * Math.max(0.01, Math.random())).toString(36).substr(2, 5);
function Err_ck(){
if ( ip_name.includes(o.decode("bG9jYWxob3N0"))||ip_name.includes(o.decode("MTI3LjAuMC4xOjg4ODg="))||ip_name.includes(o.decode("ZXhwb3J0ZXJzaW5kaWEuY29t"))||ip_name.includes(o.decode('MTkyLjE2OC4xLjEzMA=='))||ip_name.includes(o.decode('MTkyLjE2OC4xLjEwNA=='))||ip_name.includes(o.decode('YmV0YWVpLmlu'))  ){
	
}else{Error_DG();console.log('c')}
if(gen != n && gen !='aHR0cHM6Ly9tZW1iZXJzLmV4cG9ydGVyc2luZGlhLmNvbQ=='&& gen !='ZGVzaWduLndlYmxpbms0eW91LmNvbQ=='){Error_DG();/*console.log('b')*/}else{/*console.log('d')*/}
}
function Error_DG(){recognition.abort();document.getElementById('VoiceSearch_DG').outerHTML = "";var i = document.createElement("div");i.setAttribute("id", r);/*document.getElementById('listner').style.display='none';*/
    document.getElementsByTagName("body")[0].appendChild(i), 	
	i.style.position="absolute";
	i.style.padding=3;i.style.zIndex=9;
	i.style.visibility="visible";
	i.style.color=o.decode("I2MwMA==");
	i.style.opacity=1;
	i.style.background=o.decode("cmdiYSgyNTAsMjUwLDI1MCwuOCk=");
	i.style.top=0;
	i.style.fontSize='1.2em';
	i.style.lineHeight='2em';
	i.style.textAlign='center';
	i.style.width='100%'; i.innerHTML=o.decode('VW5yZWdpc3RlcmVkIFZlcnNpb24gb2YgVm9pY2UgU2VhcmNoLiBQbGVhc2UgY29udGFjdCA8YSBocmVmPSJodHRwOi8vd3d3LndlYmxpbmsuaW4iIHRhcmdldD0iX2JsYW5rIj5odHRwOi8vd3d3LndlYmxpbmsuaW48L2E+');}