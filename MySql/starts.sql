show databases;
use db_test1;
-- create table user(
-- 	id varchar(10) primary key not null,
-- 	password varchar(20) not null,
-- 	age int unsigned
-- );

-- 컬럼 추가 명령어 
alter table user add gender enum('여자','남자') default '여자';
-- 컬럼 삭제 명령어 
alter table user drop column age;
-- 컬럼을 수정하는 명령어
alter table user modify gender varchar(4)
show tables;

select * from user;

-- 테이블을 삭제하는 명령어
drop table user;

desc user;



show databases;

-- 데이터 베이스 생성하는 명령어
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use sesac_test;


-- 테이블을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 만들어진 테이블에 
-- 1) 컬럼을 추가하는 명령어 
alter table user add gender enum('여자','남자'); 
-- 2) 컬럼을 삭제하는 명령어 
alter table user drop column age;
-- 3) 컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;

-- 테이블을 삭제하는 명령어
drop table user;

-- 테이블 구조를 확인하는 명령어
desc user;

--insert 문
insert into user (id, password) values ('lily', '1234');

-- select 문
-- select [속성...] from [테이블 이름] [where [조건...]]
-- user 테이블의 id 속성을 모두 조회
select id from user;


-- 참조하고 있는 데이터가 삭제되면 자동으로 삭제하겠다는 명령어

foreign key (custid) reference customer(custid) on delete cascade


