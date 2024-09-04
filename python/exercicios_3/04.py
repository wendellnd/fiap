'''
Um estacionamento cobra R$ 5,00 por hora porém possui um teto de cobrança máxima de R$ 35,00, independente do número de horas. Escreva um algoritmo que pergunte ao usuário qual foi o período de permanência em horas e escreva na tela o total a pagar.
'''

horasNoEstacionamento = int(input("Quantas horas você passou no estacionamento? \n"))

precoPorHora = horasNoEstacionamento * 5

if precoPorHora > 35:
    precoPorHora = 35

print(f"Você deve pagar: R${precoPorHora:.2f}")
