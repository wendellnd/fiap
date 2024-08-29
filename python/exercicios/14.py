#Uma revendedora de carros usados paga a seus funcionários vendedores um
#salário fixo por mês, mais uma comissão também fixa para cada carro vendido
#e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que
#leia o número de carros por ele vendidos, o valor total de suas vendas, o salário
#fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final
#do vendedor.

salarioFixo = float(input("Digite seu salario fixo: \n"))
carrosVendidos = float(input("Digite o número de carros vendidos: \n"))
valorPorCarroVendido = float(input("Digite o valor recebido por carro vendido: \n"))
valorTotalDasVendas = float(input("Digite o valor total de suas vendas: \n"))

salarioFinal = salarioFixo + (carrosVendidos * valorPorCarroVendido) + (valorTotalDasVendas * 0.05)

print(f"Seu salário final eh: R${salarioFinal:.2f}")
