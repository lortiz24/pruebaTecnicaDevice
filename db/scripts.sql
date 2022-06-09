create table platos(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(240),
    precio FLOAT,
    tipo VARCHAR(240),
    ingredientes VARCHAR(300)
 );