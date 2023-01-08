# hotelsRegAPI

###### This API can be tested using POSTMAN.
---
#### Endpoints:
---
##### To register a user:<br>
Send `POST` request to `localhost:3000/api/v1/auth/register` 
```
{
    "username":"jack",
    "email":"jack@gmail.com",
    "password":"password",
    "contact":"981233212",
    "address":"pokhara-20, Nepal"
}
```

##### For login:
Send `POST` request to `localhost:3000/api/v1/auth/login`
```
{
    "email":"jack@gmail.com",
    "password":"password"
}
```
##### For registering a hotel:
You must be logged in to register a hotel so, use the bearer token:<br>
Send `POST` request to `localhost:3000/api/v1/hotel/register-hotel`
```
{
    "name":"Hotel OP",
    "owner":"luffy",
    "address":"pokhara",
    "contact_details":{
        "email":"op@gmail.com",
        "phone":"9811434466"
    }
}
```
##### To get list of hotels:
Non logged in users can also get the list of registered hotels:<br>
Send `GET` request to `localhost:3000/api/v1/hotel/hotels`
