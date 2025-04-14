import oracledb
import json

con = oracledb.connect(user="pf0313", password="professor#23",
                       dsn="oracle.fiap.com.br/orcl")
cur = con.cursor()

cur.execute("""
    SELECT a.id, a.nome, f.titulo, f.diretor, f.ano
    FROM t_ator a
    JOIN t_filme_ator fa ON a.id = fa.ator_id
    JOIN t_filme f ON f.id = fa.filme_id
    ORDER BY a.nome, f.ano
""")

atores = {}
for id_ator, nome, titulo, diretor, ano in cur:
    if id_ator not in atores:
        atores[id_ator] = {
            'nome': nome,
            'filmes': []
        }
    atores[id_ator]['filmes'].append({
        'titulo': titulo,
        'diretor': diretor,
        'ano': ano
    })

with open('relatorio_por_ator.json', 'w', encoding='utf-8') as f:
    json.dump(list(atores.values()), f, ensure_ascii=False, indent=4)

cur.close()
con.close()