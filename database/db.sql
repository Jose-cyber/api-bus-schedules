/*tabela ml para sjc*/

CREATE TABLE ml_sjc (
	id serial PRIMARY KEY,
	saida VARCHAR ( 50 ) UNIQUE NOT NULL,
	chegada VARCHAR ( 50 ) UNIQUE NOT NULL,
	semanal BOOLEAN NOT NULL,
    sabado BOOLEAN NOT NULL,
    domingo BOOLEAN NOT NULL
);

INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('05:30', '06:30', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('06:40', '07:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('06:30', '07:30', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('08:10', '09:10', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('10:40', '11:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('12:40', '13:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('16:00', '17:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('17:40', '18:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('19:40', '20:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;

INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('06:40', '07:40', FALSE, TRUE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('14:40', '15:40', FALSE, TRUE, FALSE) ON CONFLICT DO NOTHING;

INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('09:40', '10:40', FALSE, FALSE, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('17:40', '18:40', FALSE, FALSE, TRUE) ON CONFLICT DO NOTHING;


/*Tabela sfx pra sjc*/

CREATE TABLE sfx_sjc (
	id serial PRIMARY KEY,
	saida VARCHAR ( 50 ) UNIQUE NOT NULL,
	chegada VARCHAR ( 50 ) UNIQUE NOT NULL,
	semanal BOOLEAN NOT NULL,
    sabado BOOLEAN NOT NULL,
    domingo BOOLEAN NOT NULL
);

INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('06:00', '07:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('10:00', '11:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('12:00', '13:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('17:00', '18:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('19:00', '20:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;

INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('06:00', '07:00', FALSE, TRUE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('14:00', '15:00', FALSE, TRUE, FALSE) ON CONFLICT DO NOTHING;

INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('09:00', '10:00', FALSE, FALSE, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO sfx_sjc (saida, chegada, semanal, sabado, domingo) VALUES ('17:00', '18:00', FALSE, FALSE, TRUE) ON CONFLICT DO NOTHING;

/*tabela sjc pra ml*/

CREATE TABLE sjc_ml (
	id serial PRIMARY KEY,
	saida VARCHAR ( 50 ) UNIQUE NOT NULL,
	chegada VARCHAR ( 50 ) UNIQUE NOT NULL,
	semanal BOOLEAN NOT NULL,
    sabado BOOLEAN NOT NULL,
    domingo BOOLEAN NOT NULL
);

INSERT INTO sjc_ml (saida, chegada, semanal, sabado, domingo) VALUES ('07:00', '08:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_ml (saida, chegada, semanal, sabado, domingo) VALUES ('14:00', '15:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_ml (saida, chegada, semanal, sabado, domingo) VALUES ('16:00', '17:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_ml (saida, chegada, semanal, sabado, domingo) VALUES ('18:30', '19:30', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_ml (saida, chegada, semanal, sabado, domingo) VALUES ('20:40', '21:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;


/*tabela sjc para sfx*/

CREATE TABLE sjc_sfx (
	id serial PRIMARY KEY,
	saida VARCHAR ( 50 ) UNIQUE NOT NULL,
	chegada VARCHAR ( 50 ) UNIQUE NOT NULL,
	semanal BOOLEAN NOT NULL,
    sabado BOOLEAN NOT NULL,
    domingo BOOLEAN NOT NULL
);

INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('05:40', '06:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('10:00', '11:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('12:00', '13:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('17:10', '18:10', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;

INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('07:40', '08:40', FALSE, TRUE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('17:00', '18:00', FALSE, TRUE, FALSE) ON CONFLICT DO NOTHING;

INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('07:00', '08:00', FALSE, FALSE, TRUE) ON CONFLICT DO NOTHING;
INSERT INTO sjc_sfx (saida, chegada, semanal, sabado, domingo) VALUES ('14:00', '15:00', FALSE, FALSE, TRUE) ON CONFLICT DO NOTHING;

/* monteiro loabato até são benedito*/
CREATE TABLE ml_sbt (
	id serial PRIMARY KEY,
	saida VARCHAR ( 50 ) UNIQUE NOT NULL,
	chegada VARCHAR ( 50 ) UNIQUE NOT NULL,
	semanal BOOLEAN NOT NULL,
    sabado BOOLEAN NOT NULL,
    domingo BOOLEAN NOT NULL
);

INSERT INTO ml_sbt (saida, chegada, semanal, sabado, domingo) VALUES ('05:10', '06:10', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sbt (saida, chegada, semanal, sabado, domingo) VALUES ('06:40', '07:40', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sbt (saida, chegada, semanal, sabado, domingo) VALUES ('13:00', '14:00', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO ml_sbt (saida, chegada, semanal, sabado, domingo) VALUES ('17:15', '18:15', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;


/*  são benedito até monteiro loabato */
CREATE TABLE sbt_ml (
	id serial PRIMARY KEY,
	saida VARCHAR ( 50 ) UNIQUE NOT NULL,
	chegada VARCHAR ( 50 ) UNIQUE NOT NULL,
	semanal BOOLEAN NOT NULL,
    sabado BOOLEAN NOT NULL,
    domingo BOOLEAN NOT NULL
);

INSERT INTO sbt_ml (saida, chegada, semanal, sabado, domingo) VALUES ('05:35', '06:35', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sbt_ml (saida, chegada, semanal, sabado, domingo) VALUES ('07:05', '08:05', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sbt_ml (saida, chegada, semanal, sabado, domingo) VALUES ('13:35', '14:35', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
INSERT INTO sbt_ml (saida, chegada, semanal, sabado, domingo) VALUES ('17:50', '18:50', TRUE, FALSE, FALSE) ON CONFLICT DO NOTHING;
