'''
Um condomínio possui 4 blocos que são abastecidos por duas caixas d’água diferentes.
A caixa A abastece os blocos pares e a caixa B abastece os blocos ímpares.
Escreva um algoritmo que pergunte ao usuário em qual bloco ele mora (1-4)
e escreva na tela qual a caixa que abastece seu bloco: a caixa a ou a caixa B;
'''

valido = False

while valido == False:
    bloco = input("Digite o bloco que você mora(1-4): \n")

    if bloco.isnumeric() == False:
        print("Valor inválido :(")
        continue

    bloco = int(bloco)

    if bloco > 4 or bloco == 0:
        print("Esse bloco não existe.")
        continue

    caixa = ""
    if bloco % 2 == 0:
        caixa = "A"
    else:
        caixa = "B"

    print(f"A caixa que abastece seu bloco eh a {caixa}")

    valido = True

