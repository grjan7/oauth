```curl
curl -X POST -H "content-type:application/json" --data "{\"firstname\": \"Jana\", \"lastname\":\"R\", \"email\":\"janagr6@gmail.com\", \"password\": \"success\" }" http://localhost:5000/signup

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"firstname\": \"Jana\", \"lastname\":\"R\", \"email\":\"janagr6@gmail.com\", \"password\": \"success\" }" http://localhost:5000/signup
{"status":"Invalid lastname."}

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"firstname\": \"Jana\", \"lastname\":\"R\", \"email\":\"janagr6@gmail.com\", \"password\": \"success\" }" http://localhost:5000/signup
{"status":"Invalid password."}

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"firstname\": \"Jana\", \"lastname\":\"R\", \"email\":\"janagr6@gmail.com\", \"password\": \"$uccess\" }" http://localhost:5000/signup
{"status":"Invalid password."}

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"firstname\": \"Jana\", \"lastname\":\"R\", \"email\":\"janagr6@gmail.com\", \"password\": \"$uccess100\" }" http://localhost:5000/signup
{"status":"Invalid password."}

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"firstname\": \"Jana\", \"lastname\":\"R\", \"email\":\"janagr6@gmail.com\", \"password\": \"$Success100\" }" http://localhost:5000/signup
{"status":"Account has been successfully created."}

C:\Users\Jana>

```