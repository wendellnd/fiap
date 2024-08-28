# SIIIIIIIIIIII

name = input("Qual seu nome? \n")

name = name.strip()

isFullName = name.find(" ") > 0

if isFullName:
    name = name.split(" ")[0]

if name == "":
    raise Exception("Nome inválido :(")

print("Bem-vindo(a), "+name+"!")

ageInput = input("Qual sua idade? \n")

age = 0
if ageInput.isnumeric():
    age = int(ageInput)

if age <= 0:
    print("F pro guerreiro o7")
else:
    print("Sua idade é", age)
