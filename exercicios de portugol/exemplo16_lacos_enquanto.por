programa
{
	
	funcao inicio()
	{
		//Digitar 6 números
		//Somar os números
		//Qual o maior número
		//Quantas vezes ele aparece
		
		inteiro numero = 0
		inteiro valorMaior = 0
		inteiro quantidade = 0
		inteiro contadorMaior = 0

		para(inteiro x = 1; x<=6; x++)
		{
			escreva("Insira um número : ")
			leia(numero)
			quantidade = quantidade + numero
			se(numero>=valorMaior)
			{
				se(numero>valorMaior)
				{
					contadorMaior = 1
				}
				senao 
				{
					contadorMaior++
				}
				valorMaior = numero	
			}
		}
		escreva("\nQuantidade de vezes que aparece : "+quantidade)
		escreva("\nO valor maior é: "+valorMaior)
		escreva("\nContador maior : "+contadorMaior)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 441; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */