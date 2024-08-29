#Escreva um algoritmo para calcular a média aritmética de 3 avaliações que
#deverão ser informadas. Por fim, exiba o valor da média.

checkpoint1 = input("Digite a nota 1: \n")
checkpoint2 = input("Digite a nota 2: \n")
checkpoint3 = input("Digite a nota 3: \n")

if checkpoint1.isnumeric() == False or checkpoint3.isnumeric() == False or checkpoint3.isnumeric() == False:
    print("Valores inválidos :(")
else:
    media = (float(checkpoint1)+float(checkpoint2)+float(checkpoint3)) / 3
    print(f"A média eh: {media:.1f}")
