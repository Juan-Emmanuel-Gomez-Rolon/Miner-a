var mongoose = require('mongoose');
const  { engine } = require('express-handlebars');

//Hacemos la conexion con mongodb
mongoose.connect('mongodb+srv://18460603:gomezrolon24@cluster1.iq7dwmw.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

const express = require('express');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Mandar llamar la vista 
app.get('/', (req, res) => {
    res.render('home');
});


var userRouter = require('./routers/userRoute');
const { collection } = require('./models/User');

app.use('/', userRouter);
app.use(express.static(__dirname + '/views'));


//Configuramos el purto del servidor
app.listen(3000, function(){
    console.log('app is running');
});