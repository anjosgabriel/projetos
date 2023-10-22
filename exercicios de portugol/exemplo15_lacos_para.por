programa
{
	
	funcao inicio()
	{
		//cinco numeros inteiros positivos
		//deve mostrar o somatorio 
		//e qual foi o maior numero
		
		inteiro numero = 0
		inteiro maiorNumero = 0
		inteiro total = 0

		para(inteiro x = 1; x <= 5; x ++)
		{
			escreva("Insira um número : ")
			leia(numero)
			total = total  + numero
			se(numero > maiorNumero)
			{
				maiorNumero = numero	
			}
		}
		escreva("\nO somatório é : "+total)
		escreva("\nO maior número é : "+maiorNumero)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 456; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */