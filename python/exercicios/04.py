#Sabendo o peso e a altura de uma pessoa, calcule o IMC (índice de massa
#corpórea) por meio da fórmula: IMC = peso/altura*altura.

peso = 60
altura = 1.70

imc = peso/(altura**2)

print(f"O IMC de uma pessoa com {peso}Kg e {altura} de altura eh {imc:.2f}")
