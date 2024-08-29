#O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
#porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
#Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
#escrever um algoritmo para ler o custo de fábrica de um carro, calcular e
#escrever o custo final ao consumidor

custoDeFabrica = input("Digite o custo de fábrica do carro: \n")

if custoDeFabrica.isnumeric() == False:
    print("Valor inválido :(")
else:
    custoDeFabrica = float(custoDeFabrica)
    percentuaDoDistribuidor = custoDeFabrica * 1.28
    impostos = custoDeFabrica * 1.45
    valorFinal = custoDeFabrica + percentuaDoDistribuidor + percentuaDoDistribuidor

    print(f"Valor final de um carro: R${valorFinal:.2f}")
