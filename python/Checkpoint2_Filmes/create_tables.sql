DROP TABLE t_filme_ator;
DROP TABLE t_ator;
DROP TABLE t_filme;

CREATE TABLE t_filme (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    titulo VARCHAR2(255) NOT NULL,
    diretor VARCHAR2(255),
    genero VARCHAR2(100),
    ano INTEGER,
    UNIQUE (titulo, ano)
);

CREATE TABLE t_ator (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR2(255) UNIQUE NOT NULL
);

CREATE TABLE t_filme_ator (
    filme_id INTEGER NOT NULL,
    ator_id INTEGER NOT NULL,
    PRIMARY KEY (filme_id, ator_id),
    FOREIGN KEY (filme_id) REFERENCES t_filme(id),
    FOREIGN KEY (ator_id) REFERENCES t_ator(id)
);