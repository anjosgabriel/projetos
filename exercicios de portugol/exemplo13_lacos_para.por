programa
{
	
	funcao inicio()
	{
		//escreva na tela numeros entre 1 a 100
		//porém apenas os números ímpares e múltiplos de 7
		//totalize estes números e apresente
		inteiro total = 0
		para(inteiro x = 1; x <= 100; x ++)
		{
			
			se((x % 2) == 1 e (x % 7) == 0)
			{
				total += x
				escreva(x+"\n")
			}
			
		}
		escreva("\nA soma é : "+total)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 334; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */