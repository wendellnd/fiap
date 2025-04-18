import json
import oracledb

DB_USER = "USER"
DB_PASSWORD = "PASS"
DB_DSN = "oracle.fiap.com.br/orcl"

def generate_movie_report():
    movies_report = []
    
    try:
        connection = oracledb.connect(user=DB_USER, password=DB_PASSWORD, dsn=DB_DSN)
        cursor = connection.cursor()
        
        cursor.execute("""
            SELECT id, titulo, diretor, genero, ano
            FROM t_filme
            ORDER BY titulo
        """)
        movies = cursor.fetchall()
        
        for movie in movies:
            movie_id, title, director, genre, year = movie
            
            cursor.execute("""
                SELECT a.nome
                FROM t_ator a
                JOIN t_filme_ator fa ON a.id = fa.ator_id
                WHERE fa.filme_id = :filme_id
                ORDER BY a.nome
            """, filme_id=movie_id)
            
            actors = [row[0] for row in cursor.fetchall()]
            
            movie_report = {
                "id": movie_id,
                "titulo": title,
                "diretor": director,
                "genero": genre,
                "ano": year,
                "atores": actors
            }
            
            movies_report.append(movie_report)
            
    except:
        print("Error generating movie report")
        pass
    
    cursor.close()
    connection.close()
    
    return movies_report

def generate_actor_report():
    actors_report = []
    
    try:
        connection = oracledb.connect(user=DB_USER, password=DB_PASSWORD, dsn=DB_DSN)
        cursor = connection.cursor()
        
        cursor.execute("""
            SELECT id, nome
            FROM t_ator
            ORDER BY nome
        """)
        actors = cursor.fetchall()
        
        for actor in actors:
            actor_id, name = actor
            
            cursor.execute("""
                SELECT f.titulo, f.diretor, f.ano
                FROM t_filme f
                JOIN t_filme_ator fa ON f.id = fa.filme_id
                WHERE fa.ator_id = :ator_id
                ORDER BY f.ano DESC
            """, ator_id=actor_id)
            
            movies = []
            for row in cursor.fetchall():
                movies.append({
                    "titulo": row[0],
                    "diretor": row[1],
                    "ano": row[2]
                })
            
            actor_report = {
                "id": actor_id,
                "nome": name,
                "filmes": movies
            }
            
            actors_report.append(actor_report)
            
    except:
        print("Error generating actor report")
        pass
    
    cursor.close()
    connection.close()
    
    return actors_report

def save_report_to_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)

def main():
    movies_report = generate_movie_report()
    save_report_to_json(movies_report, "relatorio_filmes.json")
    
    actors_report = generate_actor_report()
    save_report_to_json(actors_report, "relatorio_atores.json")

if __name__ == "__main__":
    main()