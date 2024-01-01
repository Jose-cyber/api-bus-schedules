# api-nodejs-horario-onibus

<p float="left">
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=vulnerabilities" alt="vulnerabilities"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=bugs" alt="bugs"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=security_rating" alt="security_rating"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=code_smells" alt="code_smells"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=reliability_rating" alt="reliability_rating"/>
</p>


Esse é um simples projeto na qual consiste uma api REST construida em NodeJs para gerenciar horarios de onibus, essa api depende de um banco relacional para armazenamento dos dados e gerenciamento.


### Requirements:
 * NodeJS
 * Relational Database(PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, and Amazon Redshift)


### Run local:

Download dependencies:
<pre>
npm install
</pre>

Run:
<pre>
npm run dev
</pre>

### Run using docker: 

Build:
<pre>
  docker build -t api-horario-honibus -f  Dockerfile .
</pre>





