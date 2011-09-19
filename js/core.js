$(document).ready(function(){
function core(){
var linkUsuario = $(this).find('input[name="link"]').val(); //pego a URL do formulario
		linkUsuario = linkUsuario.split('url='); //Quebro ela no parametro do link
		linkUsuario = linkUsuario[1].split(''); //pego a segunda parte do array que é o link correto invertido
		linkUsuario = linkUsuario.reverse(); //inverto o array
		linkUsuario = linkUsuario.join(""); //transformo o array em string.
}
});
