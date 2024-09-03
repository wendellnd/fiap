'''
Desenvolva um algoritmo que calcule a distribuição da herança do Tio Patinhas.

Tio Patinhas tem sua fortuna estimada em U$ 65.4 bilhões de dólares, sabendo que ele deixou um testamento para seus herdeiros:

•15% para o orfanato dos Patinhos;

•25% para seu sobrinho Pato Donald e;

•o restante dividido igualmente para seus sobrinhos-netos Huguinho, Zezinho e Luisinho, filhos de sua irmã mais nova Dumbela Pato, que os colocou sob os cuidados do tio e nunca mais os buscou.
'''


fortuna = 65.4

patinhos = fortuna * 0.15

patoDonald = fortuna * 0.25

huguinho = fortuna * 0.20
luisinho = fortuna * 0.20
zezinho = fortuna * 0.20

print(f"Divisão da fortuna do Tio Patinhas: \n Patinhos: {patinhos:.2f} Bilhões \n Pato Donald: {patoDonald:.2f} Bilhões \n Huginho: {huguinho:.2f} Bilhões \n Zezinho: {zezinho:.2f} Bilhões \n Luisinho: {luisinho:.2f} Bilhões")

