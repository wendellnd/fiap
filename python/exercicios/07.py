#Dada uma temperatura na escala Fahrenheit, faça a conversão e exiba a
#temperatura equivalente em Celsius. Celsius = 5/9 * (F - 32)

temp = input("Digite a temperatura em Fahrenheit: \n")

if temp.isnumeric() == False:
    print("Valor inválido :(")
else:
    celsius = 5/9 * (float(temp) - 32)
    print(f"Tempetura em Celsius {celsius:.2f}")
