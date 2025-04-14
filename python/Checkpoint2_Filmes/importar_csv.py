import csv
import oracledb

# Etapa 1: leitura do CSV
filmes_unicos = {}
atores_unicos = {}
relacoes = []

with open("filmes.csv", newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    for linha in reader:
        titulo, diretor, genero, ano, ator = [campo.strip() for campo in linha]
        ano = int(ano)

        chave_filme = (titulo.lower(), ano)
        if chave_filme not in filmes_unicos:
            filmes_unicos[chave_filme] = {
                'titulo': titulo,
                'diretor': diretor,
                'genero': genero,
                'ano': ano
            }

        if ator not in atores_unicos:
            atores_unicos[ator] = {'nome': ator}

        relacoes.append((titulo.lower(), ano, ator))

# Etapa 2: inserção no Oracle
con = oracledb.connect(user="pf0313", password="professor#23",
                       dsn="oracle.fiap.com.br/orcl")
cur = con.cursor()

# Inserir filmes
filme_ids = {}
for chave, dados in filmes_unicos.items():
    cur.execute("""
        INSERT INTO t_filme (titulo, diretor, genero, ano)
        VALUES (:titulo, :diretor, :genero, :ano)
        RETURNING id INTO :id
    """, {
        **dados,
        'id': cur.var(int)
    })
    filme_ids[chave] = cur.getimplicitresults()[0][0]

# Inserir atores
ator_ids = {}
for nome, dados in atores_unicos.items():
    cur.execute("""
        INSERT INTO t_ator (nome)
        VALUES (:nome)
        RETURNING id INTO :id
    """, {
        'nome': nome,
        'id': cur.var(int)
    })
    ator_ids[nome] = cur.getimplicitresults()[0][0]

# Inserir relacionamentos
relacionamentos_cadastrados = set()
relacoes_final = []

for titulo_lower, ano, ator in relacoes:
    filme_id = filme_ids[(titulo_lower, ano)]
    ator_id = ator_ids[ator]
    if (filme_id, ator_id) not in relacionamentos_cadastrados:
        relacoes_final.append({
            'filme_id': filme_id,
            'ator_id': ator_id
        })
        relacionamentos_cadastrados.add((filme_id, ator_id))

cur.executemany("""
    INSERT INTO t_filme_ator (filme_id, ator_id)
    VALUES (:filme_id, :ator_id)
""", relacoes_final)

con.commit()
cur.close()
con.close()