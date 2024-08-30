#Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e
#dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano
#com 365 dias e mês com 30 dias.

anos = input("Quantos anos você tem? \n")
meses = input("Quantos meses desde seu aniversário? Desconsiderando o mês atual \n")
dias = input("Qual o dia desse mês? \n")

if anos.isnumeric() == False or meses.isnumeric() == False or dias.isnumeric() == False:
    print("Valores inválidos :(")
else:
    idadeEmDias = (int(anos)*365) + (int(meses)*30) + int(dias)
    print(f"Você viveu {idadeEmDias} dias :o")
