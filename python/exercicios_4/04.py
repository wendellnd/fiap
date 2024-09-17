'''
Escreva um algoritmo para ler 10 números.
Todos os números lidos com valor inferior a 40 devem ser somados.
Escreva o valor final da soma efetuada.
'''

soma = 0
minNum = 40
for i in range(10):
    numero = float(input("Digite um número: \n"))
    if numero < minNum:
        soma = soma+numero

print(f"Soma dos números menores que {minNum}: {soma}")
