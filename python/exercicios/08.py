#Tendo três valores inteiros (representados pelas variáveis A, B e C), calcule e
#apresente como resultado final o valor da soma dos quadrados dos três valores
#lidos.

a = input("Digite o vao de A: \n")
b = input("Digite o valor de B: \n")
c = input("Digite o valor de C: \n")

if a.isnumeric() == False or b.isnumeric() == False or c.isnumeric() == False:
    print("Valores invalidos :(")
else:
    print(f"A soma dos quadrados dos três valores eh: {(int(a)**2)+(int(b)**2)+(int(c)**2)}")
