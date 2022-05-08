import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
<div>
<h2 className='blog-title'>Question and Answer session</h2>
<div className='blog-container'>
           
           <div className='blog'>
               <h2>Difference between javascript and nodejs ?</h2>
               <h6>Javascript</h6>
               <p>It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.It lets us use JS on the server-side as well since it works on the server-side.It runs on the server-side. Thus, it helps in the server-side development via the JS.C, C++, and also Javascript are used for writing Node.JS.</p>
               <h6>Nodejs</h6>
               <p>It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.It is utilised on the web page’s client-side.It runs mainly on the client-side. Thus, it is used in the development of the front end.The Javascript is nothing but the ECMA script’s updated version that makes use of the Chrome V8 engine that is written in the C++ language.</p>
           </div>

           <div className='blog'>
               <h2>When should you use nodejs and when should you use mongodb ?</h2>
               <p>Node.js is one of the most popular environments, taking the lead for the second consecutive year.  While JavaScript is a programming language, Node.js is an ecosystem built on JS, leveraging the V8 – Google server engine.Node.js is also a great choice for constructing an API application with both relational and non-relational databases.This makes Node.js good to handle the requests, make database operations, and expose JSON objects for clients. In the past, some say Node.js is only suitable for non-relational database because of a lack of ORMs for relational database.</p>
               <p>MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p>
               

           </div>

           <div className='blog'>
               <h2>Difference between sql and nosql database ?</h2>
               <h6>SQL</h6>
               <p>SQL databases are primarily called RDBMS or Relational Databases.Structured query language (SQL).SQL databases are table based databases.SQL databases are not suitable for hierarchical data storage.It should be configured for strong consistency.Highly Available Storage (SAN, RAID, etc.).Examples	Oracle, Postgres, and MS-SQL.</p>
               <h6>NO SQL</h6>
               <p>NoSQL databases are primarily called as Non-relational or distributed database.No declarative query language.NoSQL databases can be document based, key-value pairs, graph databases.More suitable for the hierarchical data store as it supports key-value pair method.Use when you need to scale based on changing requirements.Many different types which include key-value stores, document databases, and graph databases.Examples, MongoDB, Redis, Neo4j, Cassandra, Hbase.</p>


           </div>


           <div className='blog'>
               <h2>What is the purpose of jwt and how does it work ?</h2>
               <p>JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.API Basics.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.his is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. </p>
           </div>
           
       </div>
</div>
    );
};

export default Blog;
