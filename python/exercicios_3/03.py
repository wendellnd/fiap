'''
Escreva um algoritmo que pergunte o valor de uma mercadoria e qual o valor que o usuário tem em mãos e diga se o dinheiro é ou não é suficiente para adquirir esta mercadoria;
'''

valorMercadoria = float(input("Digite o valor da mercadoria: \n"))

valorEmMaos = float(input("Digite o valor em mãos: \n"))

if valorEmMaos < valorMercadoria:
    print("Pede fiado.")
else:
    print("Você tem dinheiro suficiente para pagar.")
