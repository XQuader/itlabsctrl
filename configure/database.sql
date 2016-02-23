/*
Navicat PGSQL Data Transfer

Source Server         : ITLabs
Source Server Version : 90501
Source Host           : localhost:5432
Source Database       : itlabs
Source Schema         : public

Target Server Type    : PGSQL
Target Server Version : 90501
File Encoding         : 65001

Date: 2016-02-23 12:47:45
*/


-- ----------------------------
-- Sequence structure for person_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "person_id_seq";
CREATE SEQUENCE "person_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 206
 CACHE 1;
SELECT setval('"public"."person_id_seq"', 206, true);

-- ----------------------------
-- Sequence structure for subject_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "subject_id_seq";
CREATE SEQUENCE "subject_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 3
 CACHE 1;
SELECT setval('"public"."subject_id_seq"', 3, true);

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS "person";
CREATE TABLE "person" (
"id" int4 DEFAULT nextval('person_id_seq'::regclass) NOT NULL,
"first_name" varchar(2044) COLLATE "POSIX" NOT NULL,
"last_name" varchar(2044) COLLATE "POSIX" NOT NULL,
"surname" varchar(2044) COLLATE "POSIX",
"birth" date NOT NULL,
"sex" int4 NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of person
-- ----------------------------
BEGIN;
INSERT INTO "person" VALUES ('1', 'Max', 'Matush', null, '1981-11-13', '1');
INSERT INTO "person" VALUES ('2', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('194', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('196', 'Max', 'Matush', null, '1981-11-13', '1');
INSERT INTO "person" VALUES ('197', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('198', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('200', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('203', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('204', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('205', 'Serhey', 'Kuhta', null, '1972-10-21', '1');
INSERT INTO "person" VALUES ('206', 'Max', 'Matush', null, '1981-11-13', '1');
COMMIT;

-- ----------------------------
-- Table structure for person_subject
-- ----------------------------
DROP TABLE IF EXISTS "person_subject";
CREATE TABLE "person_subject" (
"person" int4 NOT NULL,
"subject" int4 NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of person_subject
-- ----------------------------
BEGIN;
INSERT INTO "person_subject" VALUES ('1', '1');
INSERT INTO "person_subject" VALUES ('1', '2');
INSERT INTO "person_subject" VALUES ('2', '1');
COMMIT;

-- ----------------------------
-- Table structure for subject
-- ----------------------------
DROP TABLE IF EXISTS "subject";
CREATE TABLE "subject" (
"id" int4 DEFAULT nextval('subject_id_seq'::regclass) NOT NULL,
"name" varchar(2044) COLLATE "POSIX" NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of subject
-- ----------------------------
BEGIN;
INSERT INTO "subject" VALUES ('1', 'OOP');
INSERT INTO "subject" VALUES ('2', 'OSiSP');
INSERT INTO "subject" VALUES ('3', 'PDI');
COMMIT;

-- ----------------------------
-- Alter Sequences Owned By 
-- ----------------------------
ALTER SEQUENCE "person_id_seq" OWNED BY "person"."id";
ALTER SEQUENCE "subject_id_seq" OWNED BY "subject"."id";

-- ----------------------------
-- Indexes structure for table person
-- ----------------------------
CREATE INDEX "index_id" ON "person" USING btree ("id");

-- ----------------------------
-- Primary Key structure for table person
-- ----------------------------
ALTER TABLE "person" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table subject
-- ----------------------------
ALTER TABLE "subject" ADD UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table subject
-- ----------------------------
ALTER TABLE "subject" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Key structure for table "person_subject"
-- ----------------------------
ALTER TABLE "person_subject" ADD FOREIGN KEY ("person") REFERENCES "person" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "person_subject" ADD FOREIGN KEY ("subject") REFERENCES "subject" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
