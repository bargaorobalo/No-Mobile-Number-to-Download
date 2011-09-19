$(document).ready(function(){
	
	$('#formPost').submit(function(event) {
		event.preventDefault(); //evito que a a��o de submeter o formul�rio seja enviada para n�o dar refresh na pagina
		$('#resultado').empty(); //escondendo o resultado anterior caso sujeito escreva outra url
		/* Core da solu��o */
		var linkUsuario = $(this).find('input[name="link"]').val(); //pego a URL do formulario
		linkUsuario = linkUsuario.split('url='); //Quebro ela no parametro do link
		linkUsuario = linkUsuario[1].split(''); //pego a segunda parte do array que � o link correto invertido
		linkUsuario = linkUsuario.reverse(); //inverto o array
		linkUsuario = linkUsuario.join(""); //transformo o array em string.
		
		/* Resultados */
		$('#resultado').html("<h2>Clique no link destravado abaixo ou aguarde 5 segundos</h2>");
		$('#resultado h2').after("<a href='"+linkUsuario+"'>"+linkUsuario+"</a>");
		$('#resultado').show();
			
		/*redirecionar automaticamente depois de 5 segundos */
		setTimeout(function() {
			window.location.href = linkUsuario;
		}, 5000);
	return false;
	});
	
	
});