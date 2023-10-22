programa
{
	
	funcao inicio()
	{
		// Teste de senha 
		// Uso do laço Enquanto
		
		const cadeia senha = "1234"
		cadeia teste = " "
		inteiro numero = 0
		inteiro total = 0
		
		escreva("Digite a senha : ")
		leia(teste)

		enquanto(teste == senha)
		{
			escreva("Digite um numero : ")
			leia(numero)
			se(numero < 0)
			{
				pare
			}
			total += numero
			escreva("Digite a senha : ")
			leia(teste)
		}
		escreva("Fim de programa!!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 170; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */