create table users_tbl(
   username VARCHAR(100) NOT NULL,
   name VARCHAR(100) NOT NULL,
   surname VARCHAR(100) NOT NULL,
   phone_number VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL,
   gender NULL,
   bank VARCHAR(100) NOT NULL,
   bank_account_number VARCHAR(100) NOT NULL,
   bank_account_holder VARCHAR(100) NOT NULL,
   branch_code VARCHAR(100) NOT NULL,
   country VARCHAR(100) NOT NULL,
   lvl INT NOT NULL,
   lvl_ID VARCHAR(100) NOT NULL,
   collect_remain int,
   password VARCHAR(100) NOT NULL,
   approved VARCHAR(100) NOT NULL,

   PRIMARY KEY, UNIQUE ( username )
);
