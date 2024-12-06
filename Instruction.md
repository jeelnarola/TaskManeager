# Task Management App.

## Running the Server.
##### You are tasked with building an API for a Task Management App. The project should include the following features.

- Register And Login JWT use and cooike set.
- CURD Operation performance For Task.
- JWT Use A LOGIN || Signup.
- Middleware User For Task Opertions.
- role base authorization.
- forgetPassword With Email Send To OTP.

## Project Link.
- [This Project Github Link](https://github.com/jeelnarola/blogPersonal.git)
<!-- - Live Link :- https://blogpersonal-nlcc.onrender.com/ -->

## Follow these instructions strictly.

### Implement in MVC Structure.

#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'db.config.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.


#### Database Schema Design.

2. Create a 'models' folder.
    - create a file named 'user.models.js' with the following schema.
```
username,
email,
password,
role:{
    type:String,
    enum:['user','admin'],
    default:'user',
}
```

3. create a file named 'task.models.js' with the following schema.
```
title,
description,
status: {
  type: String,
  enum: ['pending', 'in-progress', 'completed'],
  default: 'pending',
},
dueDate: {
  type: Date,
  required: false,
},
priority: {
  type: String,
  enum: ['low', 'medium', 'high'],
  default: 'medium',
},
createdBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user', // Assuming there is a User model
  required: true,
}
```

## Sign Up and Login.

### POST route - Sign Up
- Endpoint: Create a POST route at ```/auth/register```.
- JWT authentication Use.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email
    - role // role send to database store and not send to default user set.

### POST route - Login.
- Create a POST route named ```/auth/login```.
- JWT authentication Use.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

### POST route - LogOut.
- Create a POST route named ```/api/auth/logout```.
- Clear Cookies.

### POST route - emailVerify.
- Create a POST route named ```/auth/emailVerify```.
- Enter a email and Verify to Database data in email extis or not Extis.
- Extis Email to Send to OTP.
- not Extis email to send message.

### POST route - OTPverify.
- Create a POST route named ```/auth/OTPverify```.
- Enter a OTP and Verify OTP.
- OTP Match after a Froget Password Popup Open And Rest The password.
- OTP NOT MAtch to send message.

### POST route - forgetPassword.
- Create a POST route named ```/auth/forgetPassword/:id```.
- Reset The Password API.

## Task Management App API EndPoint.
- All Post Opertion in check a Login || Signup After a performance Task.
- Role Based Asscess Route.

### GET route :- All Task Show.
- Create a GET route at ```/task/show```.


### GET route :- All Task Show Filters.
- Create a GET route at ```/task/tasks```.
- Task Filters Like Filed status AND dueDate.
- Ex :- ``` localhost:9090/task/tasks?status=pending&dueDate=2024-12-01```

### POST route :- Create Task.
- Create a Post route at ```/task/add```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup True to Create A Task And False to res message Unauthorize.
- Admin and User Create A Task And Paticluar Store A Login User.
- User Max Create A Task 10. Completed less than 10 task after a create A Task.

### PATCH route :- Update Task.
- Create a Patch route at ```/task/taskUpdate/:TaskID```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup Required True to Update A Post And False to res message Unauthorized

### DELETE route :- DELETE Task.
- Create a Delete route at ```/task/taskDelete/:DeleteTaskID```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup Required True to Update A Post And False to res message Unauthorized.

### Steps:
1. Clone the repository.
```bash
 git clone <repository-url>
```
2. Install dependencies:

``` bash
npm install
```
3. Create a .env file and add your MongoDB connection string:
``` bash
PORT=9090
MONGODB_URL=mongodb+srv://TaskManager:TaskManager@cluster0.dgwjmgh.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=Cluster0
EMAILUSER=narolajeel29@gmail.com
EMAILPASS=eyid nyik augf eoql
JWT_SECRET=my_project_Elibray_jwt_SECRET
```

4. Start the server:
``` bash
npm start
```


