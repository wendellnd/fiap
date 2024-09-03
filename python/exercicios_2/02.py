'''
Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
'''

brancos = int(input("Digite o numero de votos em branco: "))
nulos = int(input("Digite o numero de votos nulos: "))
validos = int(input("Digite o numero de votos validos: "))

soma = brancos+nulos+validos

percentual_brancos = (brancos*100)/soma
percentual_nulos = (nulos*100)/soma
percentual_validos = (validos*100)/soma

print(f"Percentual votos brancos: {percentual_brancos:.2f}")
print(f"Percentual votos nulos: {percentual_nulos:.2f}")
print(f"Percentual votos validos: {percentual_validos:.2f}")
