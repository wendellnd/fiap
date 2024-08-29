#Crie um algoritmo que solicite ao usuário seu consumo de energia elétrica (em
#kWh), que deve ser uma variável real. O algoritmo deve, então, calcular o total
#da conta, considerando que cada kWh custa R$ 0,20.

consumo = input("Digite seu consumo de energia elérica em kWh:\n")

if consumo.isnumeric() == False:
    print("Valor inválido :(")
else:
    conta = float(consumo) * 0.2
    print(f"Sua conta de luz eh de R${conta:.2f}")
