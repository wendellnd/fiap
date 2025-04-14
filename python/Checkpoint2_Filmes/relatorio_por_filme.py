import oracledb
import json

con = oracledb.connect(user="pf0313", password="professor#23",
                       dsn="oracle.fiap.com.br/orcl")
cur = con.cursor()

cur.execute("""
    SELECT f.id, f.titulo, f.diretor, f.genero, f.ano, a.nome
    FROM t_filme f
    JOIN t_filme_ator fa ON f.id = fa.filme_id
    JOIN t_ator a ON a.id = fa.ator_id
    ORDER BY f.id
""")

filmes = {}
for id_filme, titulo, diretor, genero, ano, ator in cur:
    if id_filme not in filmes:
        filmes[id_filme] = {
            'titulo': titulo,
            'diretor': diretor,
            'genero': genero,
            'ano': ano,
            'atores': []
        }
    filmes[id_filme]['atores'].append(ator)

with open('relatorio_por_filme.json', 'w', encoding='utf-8') as f:
    json.dump(list(filmes.values()), f, ensure_ascii=False, indent=4)

cur.close()
con.close()