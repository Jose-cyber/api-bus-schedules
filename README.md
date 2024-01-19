# api-nodejs-horario-onibus

<p float="left">
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=vulnerabilities" alt="vulnerabilities"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=bugs" alt="bugs"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=security_rating" alt="security_rating"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=code_smells" alt="code_smells"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_api-nodejs-horario-onibus&metric=reliability_rating" alt="reliability_rating"/>
</p>

This is a simple project that consists of a REST api built in NodeJs to manage bus schedules and itineraries. This api depends on a relational database for data storage and management.

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
docker build -t api-bus-schedules -f  Dockerfile .
</pre>

Run:
<pre>
docker run -d \
  --env-file=.env \
  -p5000:8000 \
  api-bus-schedules
</pre>

Image on my own docker repository:

<a href="https://hub.docker.com/repository/docker/josecyber/api-bus-schedules/general">api-bus-schedules</a>




