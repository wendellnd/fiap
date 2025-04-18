import csv
import oracledb

DB_USER = "USER"
DB_PASSWORD = "PASS"
DB_DSN = "oracle.fiap.com.br/orcl"

def read_csv_file(file_path):
    movies_data = []
    
    with open(file_path, 'r', encoding='utf-8') as file:
        csv_reader = csv.reader(file, delimiter=';')
        
        for row in csv_reader:
            if len(row) == 5:
                movie_data = {
                    'titulo': row[0],
                    'diretor': row[1],
                    'genero': row[2],
                    'ano': row[3],
                    'ator': row[4]
                }
                movies_data.append(movie_data)
    
    return movies_data

def insert_data_into_db(movies_data):
    try:
        connection = oracledb.connect(user=DB_USER, password=DB_PASSWORD, dsn=DB_DSN)
        cursor = connection.cursor()
        
        for movie in movies_data:
            movie_id = insert_movie_if_not_exists(cursor, movie)
            actor_id = insert_actor_if_not_exists(cursor, movie['ator'])
            insert_movie_actor_relation(cursor, movie_id, actor_id)
        
        connection.commit()
        
    except:
        connection.rollback()
        
    cursor.close()
    connection.close()

def insert_movie_if_not_exists(cursor, movie):
    cursor.execute(
        "SELECT id FROM t_filme WHERE titulo = :titulo AND ano = :ano",
        titulo=movie['titulo'],
        ano=int(movie['ano'])
    )
    result = cursor.fetchone()
    
    if result:
        return result[0]
    
    cursor.execute(
        "INSERT INTO t_filme (titulo, diretor, genero, ano) VALUES (:titulo, :diretor, :genero, :ano)",
        titulo=movie['titulo'],
        diretor=movie['diretor'],
        genero=movie['genero'],
        ano=int(movie['ano'])
    )
    
    cursor.execute(
        "SELECT id FROM t_filme WHERE titulo = :titulo AND ano = :ano",
        titulo=movie['titulo'],
        ano=int(movie['ano'])
    )
    result = cursor.fetchone()
    return result[0]

def insert_actor_if_not_exists(cursor, actor_name):
    cursor.execute(
        "SELECT id FROM t_ator WHERE nome = :nome",
        nome=actor_name
    )
    result = cursor.fetchone()
    
    if result:
        return result[0]
    
    cursor.execute(
        "INSERT INTO t_ator (nome) VALUES (:nome)",
        nome=actor_name
    )
    
    cursor.execute(
        "SELECT id FROM t_ator WHERE nome = :nome",
        nome=actor_name
    )
    result = cursor.fetchone()
    return result[0]

def insert_movie_actor_relation(cursor, movie_id, actor_id):
    cursor.execute(
        "SELECT 1 FROM t_filme_ator WHERE filme_id = :filme_id AND ator_id = :ator_id",
        filme_id=movie_id,
        ator_id=actor_id
    )
    result = cursor.fetchone()
    
    if not result:
        cursor.execute(
            "INSERT INTO t_filme_ator (filme_id, ator_id) VALUES (:filme_id, :ator_id)",
            filme_id=movie_id,
            ator_id=actor_id
        )

def main():
    movies_data = read_csv_file("filmes.csv")
    insert_data_into_db(movies_data)

if __name__ == "__main__":
    main()