'''
Escreva um programa em Python que
solicite 10 valores inteiros ao usuário e mostre quantos desses valores lidos são negativos.
Para tal, utilize a estrutura de repetição “for”.
'''

lista = []
for i in range(10):
    number = int(input("Digite um número: \n"))
    if number < 0:
        lista.append(number)

print(f"Você digitou {len(lista)} números negativos")
