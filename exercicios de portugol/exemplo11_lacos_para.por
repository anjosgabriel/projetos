programa
{
	
	funcao inicio()
	{
		//escreva na tela de 1 a 100
		//porém colocando do lado do número se é par ou ímpar
		//exemplo
		//1-ímpar
		//2-par
		//3-ímpar

		inteiro total=0
		para(inteiro numero=1; numero<=100; numero++)
		{
		se((numero % 2) == 0)
		{
			escreva("O número "+numero+" é par! \n ")	
			//total = total - numero
			total += numero
		}

		senao
		{
			escreva("O número "+numero+" é ímpar! \n ")	
		}
		
		}
		escreva("Somatório números pares é : ",total)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 184; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */