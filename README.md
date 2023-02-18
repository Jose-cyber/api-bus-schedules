# api-nodejs-horario-onibus

[ EM DESENVOLVIMENTO ]

Esse é um simples projeto na consiste uma api rest construida em NodeJs para gerenciar horarios de onibus, essa api depende de um banco PostgreSQL para armazenamento dos dados dinamicamente.


### Requirements:
 * NodeJS
 * PostgreSQL
 * Docker


### Run local:

Download dependencies:
<pre>
npm install
</pre>

Run:
<pre>
node server.js
</pre>

### Run using docker: 

Build:
<pre>
docker build -t api-horario-honibus -f docker/Dockerfile .
</pre>

Run:
<pre>
docker run -dit -p80:3000 \
  -e PGUSER={value} \
  -e PGHOST={value} \
  -e PGPASSWORD={value} \
  -e PGDATABASE={value} \
  -e PGPORT={value} \
  -e API_KEY={value} \
  api-horario-honibus
</pre>

### Next steps

* Ajustar a forma de validação de credenciais paras rotas de criação[POST]
* Implementar o swagger 
