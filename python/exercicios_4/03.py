'''
Desenvolva um programa que receba:

- taxa de abatimento em porcentagem;

- número de prestações;

- valor da primeira prestação.

Seu programa deverá exibir na tela os valores das prestações na forma decrescente,
dado que a cada mês o valor da prestação diminui do valor da prestação do mês anterior
(utilize a taxa de abatimento fornecida pelo usuário para realizar esse cálculo).
OBS: utilize o “for”.
'''

taxaDeAbatimento = float(input("Digite a taxa de abatimento em porcentagem: \n"))
numeroPrestacoes = int(input("Digite o número de prestações: \n"))
primeiraPrestacao = float(input("Digite o valor da primeira prestação: \n"))

prestacao = primeiraPrestacao
for i in range(numeroPrestacoes):
    if i == 0:
        print(f"Prestação do mês {i+1}: {prestacao:.2f}")
        continue

    prestacao = prestacao - ((prestacao/100)*taxaDeAbatimento)
    print(f"Prestação do mês {i+1}: {prestacao:.2f}")
