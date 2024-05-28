// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "MYSQL", complete = false;
    let user = JSON.parse(localStorage.getItem("user"))


    let [q1, setQ1] = useState("")
    let [q2, setQ2] = useState("")


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    let quesAndAns = [];


    switch (conceptType) {
        case 'Variables, Constants and Keywords Of C':
            name = 'Variables, Constants and Keywords Of C';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>VARIABLES:</p>
                        <br />

                        <h5 className='Quotes'> " A variable is a temporary storage of data in a memory."</h5>
                        <br />
                        <p>Tha variable stores the data as a "value" like we store the gloceries in containers in the kitchen.</p>
                        <p>Examples: <br /><br /> a=3, b=5.6, c='A'</p>

                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p>But, for declaring a variable in C, we should follow some rules:</p>
                        <p>a. First character of a variable must be an alphabet or a underscore{`{ _ }`}.</p>
                        <p>b. No commas, blanks or any other special symbol other than {`{ _ }`} is allowed.</p>
                        <p>c. C is a case sensitive language so, in C a=3 and A=3 both are different variables</p>
                        <p>We should make our variable names meaningful to enhance the readability of our program.</p>

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>CONSTANTS:</p>
                        <br />

                        <h5 className='Quotes'> " An entity in which changing its value is not allowed, once its initialized is called a CONSTANT."</h5>
                        <br />
                        <p>for a variable we can change its value even after initialized based on our need.<br />But we cant do this with a Constant</p>
                        <br />
                        <p>Rather than this difference, the Constant acts same as a variable</p>

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>In C, there are three types of Constants:</p>
                        <br />
                        <p>a. Integer Constant:</p>
                        <p>Examples: 1, -6, 0, 10 </p>
                        <br />
                        <p>b. Real Constant</p>
                        <p>Examples: 2.6, 9.25, -569.4 </p>
                        <br />

                        <p>b. character Constant</p>
                        <p>Examples: 'a', '@', '%' </p>
                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>KEYWORDS:</p>
                        <br />

                        <h5 className='Quotes'> " These are reserved words, whose meaning is already known to the compiler is called a KEYWORD."</h5>
                        <br />
                        <p>There are 32 keywords available in C as follows.</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`auto     double   int    struct
break    long     else   switch
case     return   enum   typeof
char     register extern union
const    short    float  unsigned
continue signed   for    void
default  sizeof   goto   volatile
do       static   if     while`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>Note: </p>
                        <p>We can not use keywords as a Variables or Constants.</p>
                        <br />


                    </div>
                },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Introduction to Databases':
            name = 'Introduction to Databases';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>What is Data?</p>
                            <p>Data is a collection of a distinct small unit of information.</p>
                            <p>It can be used in a variety of forms like text, numbers, media, bytes, etc.</p>
                            <p>It can be stored in pieces of paper or electronic memory, etc.</p>
                            <p>Word 'Data' is originated from the word 'datum' that means 'single piece of information.' It is plural of the word datum.</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>What is Database?</p>
                            <p>A database is an organized collection of data, so that it can be easily accessed and managed.</p>
                            <p>You can organize data into tables, rows, columns, and index it to make it easier to find relevant information.</p>
                            <p>The main purpose of the database is to operate a large amount of information by storing, retrieving, and managing data.</p>
                            <p>There are many databases available like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL, SQL Server, etc.</p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>SQL</p>
                            <p>SQL stands for Structured Query Language. It is used for storing and managing data in relational database management system (RDMS).</p>
                            <p>It is a standard language for Relational Database System. It enables a user to create, read, update and delete relational databases and tables.</p>
                            <p>SQL allows users to query the database in a number of ways, using English-like statements.</p>


                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Characteristics of SQL</p>
                            <p>SQL is easy to learn.</p>
                            <p>SQL is used to access data from relational database management systems</p>
                            <p>SQL can execute queries against the database.</p>
                            <p>SQL is used to describe the data.</p>

                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Characteristics of SQL</p>
                            <p>SQL is used to define the data in the database and manipulate it when needed.</p>
                            <p>SQL is used to create and drop the database and table.</p>
                            <p>SQL is used to create a view, stored procedure, function in a database.</p>
                            <p>SQL allows users to set permissions on tables, procedures, and views.</p>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What can SQL execute against the database?", a: "Queries" },
                { q: "What is a collection of distinct small units of information?", a: "Data" },
                { q: "Where can data be stored?", a: "Memory" },
                { q: "What does the word data originate from?", a: "datum" },
                { q: "What is the plural form of datum?", a: "datum" }
            ]
            break;


        case 'Basic SQL Syntax':
            name = 'Basic SQL Syntax';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Rules:</p>
                            <p>SQL follows the following rules:</p>
                            <p>Structure query language is not case sensitive. Generally, keywords of SQL are written in uppercase.</p>
                            <p>Statements of SQL are dependent on text lines. We can use a single SQL statement on one or multiple text line.</p>
                            <p>Using the SQL statements, you can perform most of the actions in a database.</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Following are some most important points about the SQL syntax which are to remember:</p>
                            <p>You can write the keywords of SQL in both uppercase and lowercase, but writing the SQL keywords in uppercase improves the readability of the SQL query.</p>
                            <p>SQL statements or syntax are dependent on text lines. We can place a single SQL statement on one or multiple text lines.</p>
                            <p>You can perform most of the action in a database with SQL statements.</p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>SQL Statement</p>
                            <p>SQL statements tell the database what operation you want to perform on the structured data</p>
                            <p> what information you would like to access from the database.</p>
                            <p>The statements of SQL are very simple and easy to use and understand. <br></br> They are like plain English but with a particular syntax</p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Simple Example of SQL statement:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`SELECT "column_name" FROM "table_name"; `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Each SQL statement begins with any of the SQL keywords and ends with the semicolon (;).</p>
                            <p>The semicolon is used in the SQL for separating the multiple Sql statements which are going to execute in the same call</p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                //  { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What is the ending punctuation for each SQL statement?", a: ";" },
                { q: "How are multiple SQL statements separated when executing them in the same call?", a: ":" },
                { q: "What does each SQL statement begin with?", a: "SQL keywords " },
                { q: "SQL keywords typically written in which case?", a: "uppercase" },
                { q: "What does SQL stand for?", a: "Structured Query Language" }
            ]
            break;


        case 'Data Types in SQL':
            name = 'Data Types in SQL';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>SQL Data Types</p>
                            <p>Data types are used to represent the nature of the data that can be stored in the database table.</p>
                            <p>For example, in a particular column of a table, if we want to store a string type of data then we will have to declare a string data type of this column.</p>


                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>For every database, data types are primarily classified into three categories.</p>
                            <p>1. Numeric Datatypes<br></br>
                                2. Date and Time Database<br></br>
                                3. String Database</p>


                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Numeric Data Types in MYSQL</p>
                            <p><pre>{`
Data Type       From                                    To    
BigInt          -263 (-9,223,372,036,854,775,808)       263 -1 (9,223,372,036,854,775,807)
Int             -231 (-2,147,483,648)                   231-1 (2,147,483,647)
smallint        -215 (-32,768)                          215-1 (32,767)
tinyint         0                                       28-1 (255)
bit             0                                       1
decimal         -1038+1                                 1038-1
numeric         -1038+1                                 1038-1
money           -922,337,203,685,477.5808               922,337,203,685,477.5807
smallmoney      -214,748.3648                           214,748.3647
Float           -1.79E+308                              1.79E+308
Real            -3.40E+38                               3.40E+38
`}</pre></p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>String Data Types in MYSQL</p>
                            <p><pre>{`
Data Type           Description
char                The maximum length of 8000 characters.(Fixed-Length non-Unicode Characters)
varchar             The maximum length of 8000 characters.(Variable-Length non-Unicode Characters)
varchar(max)        The maximum length of 231 characters(SQL Server 2005 only).(Variable Length non-Unicode data)
text                The maximum length of 2,127,483,647 characters(Variable Length non-Unicode data)
nchar               The maximum length of 4000 characters(Fixed-Length Unicode Characters)
Nvarchar            The maximum length of 4000 characters.(Variable-Length Unicode Characters)
nvarchar(max)       The maximum length of 231 characters(SQL Server 2005 only).(Variable Length Unicode data)
Binary              The maximum length of 8000 bytes(Fixed-Length binary data)
varbinary           The maximum length of 8000 bytes(Variable Length binary data)
varbinary(max)      The maximum length of 231 bytes(SQL Server 2005 only).(Variable Length binary data)
text                Maximum Length of 2,147,483,647 bytes(Variable Length binary data)
                `}</pre></p>


                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Date and Time Data Type in SQL</p>
                            <p><pre>{`
Data Type	Description
DATE        A data type is used to store the data of date in a record 
TIME        A data type is used to store the data of time in a record
DATETIME    A data type is used to store both the data,date, and time in the record                
                `}</pre></p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What is the maximum length for the nchar data type?", a: "4000" },
                { q: "What is the maximum value for the BigInt data type?", a: "263 -1" },
                { q: "Which data type has a range from -2,147,483,648 to 2,147,483,647?", a: "int" },
                { q: "Which data type has a range from -1.79E+308 to 1.79E+308?", a: "Float" },
                { q: "Which data type is used for fixed-length non-Unicode characters?", a: "char" }
            ]
            break;


        case 'Creating Databases':
            name = 'Creating Databases';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>SQL Create Database</p>
                            <p>In SQL, the 'Create Database' statement is a first step for storing the structured data in the database.</p>
                            <p>The database developers and the users use this statement in SQL for creating the new database in the database systems. </p>
                            <p>It creates the database with the name which has been specified in the Create Database statement.</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Syntax of Create Database statement in SQL</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`CREATE DATABASE Database_Name;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>In this syntax, Database_Name specifies the name of the database which we want to create in the system.</p>
                            <p> We have to type the database name in query just after the 'Create Database' keyword.</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Following are the most important points which are required to learn while creating a database:</p>

                            <p>The database we want to create should be a simple and unique name, which can be easily identified.</p>
                            <p>Database name should be no more than 128 characters.</p>
                            <p>Example 1:<br></br>This example creates the Student database. </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`CREATE DATABASE Student ; `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>When this query is executed successfully, then it will show the following output:</p>
                            <h4>Database created successfully</h4>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>You can also check that your database is created in SQL by typing the following query</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`SHOW DATABASE ;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The SHOW DATABASES; command is used, to display a list of all available databases that the current user has access to.</p>
                            <p>This command is helpful when you want to see what databases are available on the server or to confirm whether a particular database exists before you perform operations on it.</p>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                //{ value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What SQL command is used to display a list of all available databases?", a: "SHOW" },
                { q: "What SQL keyword is used to create a new database?", a: "CREATE" },
                { q: "What SQL keyword specifies the action of creating a database?", a: "CREATE" },
                { q: "What is the maximum character limit for a database name in SQL?", a: "128" },
                { q: "What SQL statement is helpful for confirming the existence of a specific database?", a: "SHOW" }
            ]
            break;

        case 'Creating Tables':
            name = 'Creating Tables';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>SQL CREATE TABLE</p>
                            <p>SQL CREATE TABLE statement is used to create table in a database.<br></br>

                                If you want to create a table, you should name the table and define its column and each column's data type.<br></br>

                                Let's see the simple syntax to create the table.</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`create table "tablename"  
("column1" "data type",  
"column2" "data type",  
"column3" "data type",  
...  
"columnN" "data type");  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The data type of the columns may vary from one database to another. For example, NUMBER is supported in Oracle database for integer value whereas INT is supported in MySQL.
                            </p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>

                            <p>Let's understand that code :</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`CREATE TABLE "tablename"`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>This part initiates the creation of a new table with the specified name. Replace "tablename" with the desired name of your table.
                            </p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`("column1" "data type",
"column2" "data type",
"column3" "data type",
...
"columnN" "data type");
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Here, you define the structure of your table by specifying the columns it will contain.<br></br>
                                Each column is defined with a name (e.g., "column1", "column2", etc.) followed by its data type (e.g., integer, varchar, date, etc.).<br></br>
                                Replace "data type" with the appropriate data type for each column.<br></br>
                                You can define as many columns as needed by repeating this pattern.</p>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`CREATE TABLE users (
    id INT,
    username VARCHAR(50),
    email VARCHAR(100),
    birthdate DATE
);

`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>

                            <p>SQL INSERT STATEMENT</p>
                            <p>SQL INSERT statement is a SQL query. It is used to insert a single or a multiple records in a table.</p>
                            <p>Syntax</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`INSERT INTO table_name  
VALUES (value1, value2, value3....);  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>In this method there is no need to specify the column name where the data will be inserted, you need only their values.</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`INSERT INTO table_name (column1, column2, column3....)  
VALUES (value1, value2, value3.....);  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>This method specifies both the column name and values which you want to insert</p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`
    INSERT INTO CUSTOMERS VALUES ('john_doe', 'john@example.com', '1990-05-15'); 
    INSERT INTO CUSTOMERS VALUES ('alice_smith', 'alice@example.com', '1985-12-10');   
                            `}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`
   INSERT INTO STUDENTS (username, email, birthdate)  
   VALUES ('jane_doe', 'jane@example.com', '1992-08-25');
   INSERT INTO STUDENTS (username, email, birthdate)  
   VALUES ('alice_smith', 'alice@example.com', '1985-12-10');     
                            `}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What SQL statement is used to insert records into a table?", a: "INSERT" },
                { q: "What SQL statement is used to create a new table in a database?", a: "CREAT" },
                { q: "What is the required keyword to specify the name of the table being created?", a: "table" },
                { q: "What keyword indicates the end of a CREATE TABLE statement in SQL?", a: ";" },
                { q: "Which SQL keyword is used to specify the data type of a column in the CREATE TABLE statement?", a: "data type" }
            ]
            break;


        case 'Inserting Data':
            name = 'Inserting Data';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>1. Inserting data in SQL involves adding new records or rows into a table within a database. This is typically done using the INSERT INTO statement. Here's a detailed explanation of how to insert data in SQL:<br></br>

Syntax of INSERT INTO statement:The basic syntax of the INSERT INTO statement is as follows:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>table_name: The name of the table into which you want to insert data.<br></br>
(column1, column2, column3, ...): The columns into which you want to insert data. This part of the statement is optional if you're inserting values into all columns of the table.<br></br>
VALUES (value1, value2, value3, ...): The values to be inserted into the specified columns. The number of values must match the number of columns specified or match the total number of columns if column names are not specified.</p>
            </div>
            },
                { value: 'Case2', data:
                <div className='case-div'>
                <p>2. Inserting data into a table:Let's consider a hypothetical table named employees with columns employee_id, first_name, last_name, and salary. Here's an example of inserting a new record into this table:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES (101, 'John', 'Doe', 50000);
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement inserts a new employee with an employee_id of 101, first_name of 'John', last_name of 'Doe', and a salary of 50000 into the employees table.</p>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>3. Inserting multiple rows at once:You can also insert multiple rows of data into a table in a single INSERT INTO statement. Here's an example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES
    (102, 'Jane', 'Smith', 60000),
    (103, 'Michael', 'Johnson', 55000),
    (104, 'Emily', 'Davis', 52000);
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement inserts three new records into the employees table.</p>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>4. Inserting data without specifying column names:If you want to insert data into all columns of a table, you can omit the column names from the INSERT INTO statement. However, you must provide values for all columns in the order in which they appear in the table's schema.Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`INSERT INTO employees
VALUES (105, 'David', 'Brown', 48000);
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement inserts a new record into the employees table without specifying column names.
</p>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>5. Inserting data from another table:You can also insert data into a table from another table using the INSERT INTO ... SELECT statement. This allows you to copy data from one table to another or to insert filtered data.Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`INSERT INTO employees_copy (employee_id, first_name, last_name, salary)
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > 50000;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement inserts records into the employees_copy table from the employees table, but only for employees whose salary is greater than 50000.</p>
            </div>
            },
            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What SQL statement is used to insert data into a table from another table?", a: "INSERT" },
                { q: "What SQL statement is used to add new records into a table?", a: "INSERT" },
                { q: "What keyword specifies the name of the table into which data will be inserted?", a: "INTO" },
                { q: "In SQL, what keyword is used to specify the columns into which data will be inserted?", a: "VALUES" },
                { q: "Which SQL clause allows you to specify the values to be inserted into a table?", a: "VALUESi" }
            ]
            break;


        case 'Selecting Data':
            name = 'Selecting Data';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>1. Selecting data in SQL involves retrieving information from a database table. This is typically done using the SELECT statement. Here's a detailed explanation of how to select data in SQL:<br></br>

Syntax of SELECT statement:The basic syntax of the SELECT statement is as follows:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT column1, column2, ...
FROM table_name;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>column1, column2, ...: The names of the columns you want to retrieve data from. You can select specific columns or use * to select all columns.<br></br>
table_name: The name of the table from which you want to retrieve data.</p>
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>2. Selecting all columns from a table:To retrieve all columns from a table, you can use the SELECT * statement:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM table_name;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>3. Selecting specific columns from a table:You can select specific columns from a table by listing their names after the SELECT keyword:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT column1, column2 FROM table_name;

`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>4. Filtering rows with WHERE clause:You can use the WHERE clause to filter rows based on specific conditions:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT column1, column2
FROM table_name
WHERE condition;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM employees WHERE department = 'Sales';

`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement selects all columns from the employees table where the department column equals 'Sales'.
</p>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>5. Sorting results with ORDER BY clause:You can use the ORDER BY clause to sort the results based on one or more columns:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT column1, column2
FROM table_name
ORDER BY column1 ASC|DESC;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM employees ORDER BY salary DESC;

`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement selects all columns from the employees table and sorts the results based on the salary column in descending order.</p>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>6. Limiting the number of rows with LIMIT clause:You can use the LIMIT clause to limit the number of rows returned by a query:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT column1, column2
FROM table_name
LIMIT number_of_rows;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM customers LIMIT 10;

`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement selects all columns from the customers table but limits the result set to the first 10 rows.</p>
            </div>
            },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What SQL keyword is used to retrieve data from a database table?", a: "SELECT" },
                { q: "How do you sort the results of a SQL query based on a specific column?", a: "ORDER BY" },
                { q: "What SQL clause allows you to specify conditions for filtering rows in a SELECT statement?", a: "WHERE" },
                { q: "What SQL keyword is used to sort query results in ascending or descending order?", a: "ORDER BY" },
                { q: "How do you specify the number of rows you want to retrieve in a SQL query?", a: "LIMIT" }
            ]
            break;

        case 'Filtering Data':
            name = 'Filtering Data';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>Filtering data in SQL involves retrieving specific rows from a table that meet certain criteria. This is typically done using the WHERE clause in conjunction with the SELECT statement. Here's a detailed explanation of how to filter data in SQL:<br></br>

Syntax of WHERE clause:The WHERE clause is used to specify conditions that must be met for a row to be included in the result set.<br></br> Here's the basic syntax</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT column1, column2, ...
FROM table_name
WHERE condition;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>column1, column2, ...: The names of the columns you want to retrieve data from.<br></br>
table_name: The name of the table from which you want to retrieve data.<br></br>
condition: The condition that must be met for a row to be included in the result set.</p>
            </div>
            },
                { value: 'Case2', data: 
            
                <div className='case-div'>
                <p>Using comparison operators in conditions:Conditions in the WHERE clause are typically constructed using comparison operators such as <pre>{`=, <, >, <=, >=, !=,`}</pre> etc. These operators allow you to compare values in columns with other values or expressions.Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM employees WHERE salary > 50000;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement retrieves all columns from the employees table where the salary column is greater than 50000.</p>
            </div>},

                { value: 'Case3', data: 
            
                <div className='case-div'>
                <p>3. Using logical operators to combine conditions:You can use logical operators such as AND, OR, and NOT to combine multiple conditions in a WHERE clause.Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM employees WHERE department = 'Sales' AND salary > 60000;
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement retrieves all columns from the employees table where the department is 'Sales' and the salary is greater than 60000.</p>
            </div>},
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>4. Using wildcards for pattern matching:SQL provides wildcard characters such as % and _ that can be used in conditions to perform pattern matching.Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM products WHERE product_name LIKE 'Apple%';
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement retrieves all columns from the products table where the product_name starts with 'Apple'.</p>
            </div>
            },
                { value: 'Case5', data: 
            
                <div className='case-div'>
                <p>Using IN and NOT IN operators:The IN and NOT IN operators allow you to specify a list of values for comparison.Example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`SELECT * FROM customers WHERE city IN ('New York', 'Los Angeles', 'Chicago');
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>This statement retrieves all columns from the customers table where the city is either 'New York', 'Los Angeles', or 'Chicago'.
</p>
            </div>},
             { value: 'Case8' },
             { value: 'Case9' },
             { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },

            ];
            ques = [
                { q: "What clause in SQL is used to retrieve specific rows from a table based on certain criteria?", a: "WHERE" },
                { q: "What SQL operator is used to negate a condition?", a: "NOT" },
                { q: "What type of operators are used in conditions to compare values in SQL?", a: "Comparison" },
                { q: "What SQL keyword is used to combine multiple conditions in a WHERE clause?", a: "AND" },
                { q: "What SQL operator is used to check if a value exists within a specified list of values?", a: "IN" }
            ]
            break;


        case 'Sorting Data':
            name = 'Sorting Data';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Updating Data':
            name = 'Updating Data';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Deleting Data':
            name = 'Deleting Data';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Aggregating Data':
            name = 'Aggregating Data';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Aggregate Functions':
            name = 'Aggregate Functions';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Joining Tables':
            name = 'Joining Tables';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Subqueries':
            name = 'Subqueries';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Aliases':
            name = 'Aliases';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Views':
            name = 'Views';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Indexes':
            name = 'Indexes';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Transactions':
            name = 'Transactions';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Constraints':
            name = 'Constraints';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;
    }

    ques = shuffleArray(ques);

    if (ques.length >= 4) {
        for (let i = 0; i < 4; i++) {
            quesAndAns.push({ q: ques[i].q, a: ques[i].a });
        }
    }

    // quesAndAns.push({complete:false})
    // console.log(quesAndAns);

    return (
        <div>

            <ContentPage name={name} cases={cases} ques={ques} language={language} questions={quesAndAns} complete={complete} />
        </div>
    );
}