# Blogging App enhancing Prisma ORM and Postgresql understanding 
**What is ORM?**

-- as latest udpates, orm take important role of **bridging between oop and relational db**. it simplify db operations/interaction by converting data between incompetable system, allow developer to work with object instead of raw sql queries.
In hindi :
ORM --db set connect karne ki  language ha sql by defualt is not easy... so manage karna ,more productive banana like as bridge

--prisma ORM => how to write model and handling it,interact it 
**Prisma is a popular ORM tool **that provides a type-safe, declarative API for interacting with databases, simplifying development and improving code maintainability.
-  npm i -D prisma
-  npx prisma init. -- its initialize 
    - we got folder -prisme/prismaSchema
    - .env --db-url
- how to define relations -- as one-to-one || one to many || many to many
- npm i @prisma/client-- what i do  
- geneate prisma. as alway anthing done with schema. 
- it creaate couple of cmd that cp in index js --this is connection of prisma to schema ...just take it outsise and export prisma to all controllers.

### project on Prisma with Postgress:
- creates models ...user,post,commnet with relationship them
- after show in db postgress table `﻿npx prisma migrate dev --name "naming of udates as developer easyness"` 
using prisma for fetching data as many method. prisma.user.findUnique,findMany,update,delete... etc in 


**Prisma vs mongooose** 


### Feature of ORM
**Lazy Loading**
--Lazy Loading is an ORM technique that delays the loading of associated data until it is actually needed, improving performance by only retrieving the data that is required at a given time. \\
**Eager Loading**
--Eager Loading is an ORM feature that loads all the related data for an object at the same time, in contrast to Lazy Loading which retrieves data only when it is needed.

**first Level Caching vs Second Level Caching ORM**
- The first-level cache in an ORM system is a cache that **stores data within A application's memory**, allowing for faster access to frequently used data objects.
- A second-level cache in an ORM system provides a higher-level cache that **stores data across multiple application sessions**, unlike the first-level cache which is specific to a single session.

### Data Mapping 
**Oject Relation mapping**
**Data Schema Abstraction** platform Indepandent Model and Schema migration tools


<img width="276" alt="Screenshot 2025-01-07 at 8 37 09 PM" src="https://github.com/user-attachments/assets/1126bb1e-1e75-456e-a467-145fa8adaad6" />
