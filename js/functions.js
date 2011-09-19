$(document).ready(function(){
	
	$('#formPost').submit(function(event) {
		event.preventDefault(); //evito que a ação de submeter o formulário seja enviada para dar refresh na pagina
		$('#resultado').empty(); //escondendo o resultado anterior caso sujeito escreva outra url
		/* Core da solução */
		var linkUsuario = $(this).find('input[name="link"]').val(); //pego a URL do formulario
		linkUsuario = linkUsuario.split('url='); //Quebro ela no parametro do link
		linkUsuario = linkUsuario[1].split(''); //pego a segunda parte do array que é o link correto invertido
		linkUsuario = linkUsuario.reverse(); //inverto o array
		linkUsuario = linkUsuario.join(""); //transformo o array em string.
		
		/* Resultados */
		$('#resultado').html("<h2>Confira seu link destravado:</h2>");
		$('#resultado h2').after("<a href='"+linkUsuario+"' target='_blank' title='Abrirá em nova janela'>"+linkUsuario+"</a>");
		$('#resultado').show();
			
		/*redirecionar automaticamente depois de 5 segundos
			- Decidi deixar o usuário escolher se vai querer acessar ou apenas copiar o link.
		setTimeout(function() {
			window.location.href = linkUsuario;
		}, 5000);
		*/
	return false;
	});
	
	
});