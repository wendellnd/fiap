#Dada a quilometragem parcial de um carro e a quantidade de litros gastos ele
#para percorrer esta quilometragem, fazer um algoritmo que calcule quantos
#Km/l o carro percorreu.

km = input("Digite os KMs percorridos: \n")
litros = input("Digite os litros gastos: \n")

if km.isnumeric() == False or litros.isnumeric() == False:
    print("Valores inválidos")
else:
    kmPorLitro = float(km)/float(litros)
    print(f"Km gastos por litro: {kmPorLitro:.2f}")
