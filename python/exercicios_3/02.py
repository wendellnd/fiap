'''
Um condomínio possui 20 blocos e para uma correta administração possui dois síndicos: o sr José que administra os blocos de 1 a 10 e o sr Hamilton que administra os blocos de 11 a 20. Escreva um algoritmo que pergunte ao usuário em qual bloco ele mora e escreva na tela qual o síndico responsável;
'''


valido = False

while valido == False:
    bloco = input("Digite o bloco que você mora(1-20): \n")

    if bloco.isnumeric() == False:
        print("Valor inválido :(")
        continue

    bloco = int(bloco)

    if bloco > 20 or bloco == 0:
        print("Esse bloco não existe.")
        continue

    if bloco > 10 and bloco <= 20:
        print("SR Hamilton administra seu bloco.")
    else:
        print("SR José administra seu bloco.")

    valido = True

