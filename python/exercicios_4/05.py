'''
Faça um programa em C que mostre na tela os números divisíveis por 6 compreendidos entre 50 e 100.
(Considere os números 50 e 100 e utilize estruturas de repetição).
'''

for i in range(51):
    index = i+50
    if index % 6 == 0:
        print(f"Divisivel por 6: {index}")
