const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/temperament'), async (req,res)=>{
  const temperamentApi = await axios.get('https://api.thedogapi.com/v1/breeds?api_key=a64ddc65-88f8-47ce-b7af-052639d2419b')
  const temperament = temperamentApi.data.map(el => el.temperament)
  const tempEach = temperament.map(el =>{
    for(let i=0; i < el.lenght; i++) return el[i]
  })
  tempEach.forEach(el => {
    Temperaments.finOrCreate({
      where : { name : el}
    })
  })
  const allTemperaments = await Temperaments.findAll();
  res.send(allTemperaments);
}

module.exports = router;
