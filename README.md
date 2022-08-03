# Simple Node API Key Builder

## Overview

This is an example on how to create a NodeJS server that generates an API Key for developers. Please do not save any api key in plain text into the the database. Use best practices to save sensitive data and password into a database.
 
## Pre Requisites
* git
* node
* npm
* express
* generate-api-key

## Installation

```
git clone https://github.com/manuelkuffo/simple-api-key-builder-node.git
```

```
cd simple-api-key-builder-node
```


```
npm install
```

```
node server.js
```

## Test Server
You can use postman, or just a command on curl to test your server.

```
curl --location --request POST 'http://localhost:3000/api/developer/request-api-key' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'companyName=Truck Company'
```

## Security

IMPORTANT: Please do not save the api key in plain text into any database. 

## Reference

Please refer to the full article for more information. [Link](https://medium.com/@mkuffo/how-to-generate-a-developer-api-key-with-nodejs-42d38313208a).







