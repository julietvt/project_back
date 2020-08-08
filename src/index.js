const express = require('express');
const {UserController} = require('./controllers');
const  PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.json());
// создание нового пользователя
app.post('/user', UserController.createUser);
// получение инфы о пользователе по id
app.get('/user/:id', UserController.getUser);
// обновление инфы пользователя
app.patch('/user/:id', UserController.updateUser);
// удаление пользователя
app.delete('/user/:id', UserController.deleteUser);
app.listen(PORT, ()=>console.log(`App listening on ${PORT} port!`));