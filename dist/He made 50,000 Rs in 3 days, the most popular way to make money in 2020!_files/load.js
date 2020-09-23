var param = window.location.search.split('=')[1];
var langName = '';
switch(param){
    case 'a':langName='English';break;
    case 'b':langName='हिंद';break;
    case 'c':langName='Tamil';break;
    case 'd':langName='Telugu';break;
    case 'e':langName='Gujarati';break;
	default :langName='English';break;
}
$('#langName').html(langName);
setTimeout(function(){
    for (let index = 1; index < 15; index++) {
        $('#lang'+index).html(lang['lang'+index]);
    }
},100);
