# apis-are-fun

First time using an web api

Comments included to use as reference later. 

Commit 1: 
simple angular app set up, no server

---
### General GET request to a web API

```  
$http({
    method: 'GET',
    url: 'https://swapi.co/api/people/',
  }).then(function (response) {
    console.log(response);
  })
  ```



### Search Request
> specific to that api documentation

You can either hard code the url:
```
$http({
    method: 'GET',
    url: 'https://swapi.co/api/people/?search=skywalker',
  }).then(function (response) {
    console.log(response);
  })

```

Or use params: 
```
  $http({
    method: 'GET',
    url: 'https://swapi.co/api/people/',
    params: {
      search: 'skywalker'
    }
  }).then(function (response) {
    console.log(response);
  })
```