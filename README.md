# api-nodejs-horario-onibus

<p float="left">
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=vulnerabilities" alt="vulnerabilities"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=bugs" alt="bugs"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=security_rating" alt="security_rating"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=code_smells" alt="code_smells"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=reliability_rating" alt="reliability_rating"/>
</p>


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



