#Um estacionamento cobra R$ 5,00 por hora. Escreva um algoritmo que
#pergunte ao usuário qual foi o período de permanência em horas e calcule o
#total a pagar.

preco = 5

horas = input("Quantas horas você ficou no estacionamento? \n")

if horas.isnumeric() == False:
    print("Valor inválido :(")
else:
    totalPagamento = 5*int(horas)
    print(f"O total a pagar eh: R${totalPagamento:.2f}")
