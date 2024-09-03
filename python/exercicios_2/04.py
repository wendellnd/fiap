'''
Com a volta das aulas presenciais, a mãe de um aluno do ensino fundamental necessita saber quanto gastará com material escolar. Para fazer uma simulação, ela foi a uma livraria com o objetivo de simular a compra dos seguintes itens básicos: canetas, lápis e cadernos. Um ponto a se considerar é que essa livraria está com um programa de desconto de 20% nos preços dos cadernos e 5% nas canetas. Assim sendo, escreva um programa em Python que solicite as quantidades dos itens, preços e calcule o total da compra simulada.
'''

canetas = int(input("Digite a quantidade de canetas: "))
lapis = int(input("Digite a quantidade de lapis: "))
cadernos = int(input("Digite a quantidade de cadernos: "))

preco_canetas = float(input("Digite o preco das canetas: "))
preco_lapis = float(input("Digite o preco dos lapis: "))
preco_cadernos = float(input("Digite o preco dos cadernos: "))

total = (canetas * preco_canetas) + (lapis * preco_lapis) + (cadernos * preco_cadernos) - ((canetas * preco_canetas) + (lapis * preco_lapis) + (cadernos * preco_cadernos)) * 0.05 - ((canetas * preco_canetas) + (lapis * preco_lapis) + (cadernos * preco_cadernos)) * 0.20

print(f"O total da compra eh: {total:.2f}")
