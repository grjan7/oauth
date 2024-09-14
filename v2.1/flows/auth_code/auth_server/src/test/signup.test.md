```sh
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



# ChangePassword Test

```sh
Microsoft Windows [Version 10.0.19045.4780]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
^C
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
curl: (56) Recv failure: Connection was reset

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
curl: (56) Recv failure: Connection was reset

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
curl: (56) Recv failure: Connection was reset

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
curl: (56) Recv failure: Connection was reset

C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"error":"Invalid credentials."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$1000%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"error":"Invalid credentials."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"$Win100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"status":"Password is successfully changed."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"$Win100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"error":"Invalid credentials."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr6@gmail.com\", \"oldPassword\":\"Win$1000*\", \"newPassword\":\"$Win100%\"}" http://localhost:5000/account/settings/changePassword
{"error":"Invalid credentials."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"oldPassword\":\"Win$1000*\", \"newPassword\":\"$Win100%\"}" http://localhost:5000/account/settings/changePassword
{"error":"email, oldPassword, newPassword cannot be undefined."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"oldPassword\":\"Win$1000*\", \"newPassword\":\"$Win100%\"}" http://localhost:5000/account/settings/changePassword
{"error":"email, oldPassword, newPassword cannot be undefined."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr6@gmail.com\", \"newPassword\":\"$Win100%\"}" http://localhost:5000/account/settings/changePassword
{"error":"email, oldPassword, newPassword cannot be undefined."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr6@gmail.com\", \"newPassword\":\"$Win100%\"}" http://localhost:5000/account/settings/changePassword
{"error":"email, oldPassword, newPassword cannot be undefined."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"$Win100%\", \"newPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"error":"Invalid credentials."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"error":"email, oldPassword, newPassword cannot be undefined."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$1000*\"}" http://localhost:5000/account/settings/changePassword
{"error":"email, oldPassword, newPassword cannot be undefined."}
C:\Users\Jana>curl -X POST -H "content-type:application/json" --data "{\"email\": \"janagr7@gmail.com\", \"oldPassword\":\"Win$1000*\", \"newPassword\":\"$Win100%\"}" http://localhost:5000/account/settings/changePassword
{"status":"Password is successfully changed."}
C:\Users\Jana>

```