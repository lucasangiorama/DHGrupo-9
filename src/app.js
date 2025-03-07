const express = require('express');
const app = express();
const path = require('path');

//RUTAS GLOBALES

const carritoRoutes = require('./routes/carritoRoutes');
const indexRoutes = require('./routes/indexRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/carrito', carritoRoutes);
app.use('/', indexRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

//RUTAS GLOBALES

//ARCHIVOS PÚBLICOS

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const publicPath2 = path.resolve(__dirname, "./views");
app.use(express.static(publicPath2));

//ARCHIVOS PÚBLICOS

app.set('view engine', 'ejs');

//app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "./views/index.ejs"));
//});

app.listen(process.env.PORT || 3001, function() {
  console.log("Corriendo servidor en el puerto 3001");
}
)