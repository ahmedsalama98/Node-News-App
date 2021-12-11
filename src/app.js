const express =require('express')
const path = require('path')
const hbs = require('hbs')
const app =express()
const port = 3000;

const getNews = require('./functions/news').getNews

const publicPath = path.join(__dirname,'../public')
const partialsPath =path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname,'../templates/views')

app.use(express.static(publicPath))
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.get('/news', function(req, res){
    
   getNews('egypt', (err,data)=>{

       if( err){
        res.send(data)
       }

       res.render('news',{articles:data.body.articles})

   })
    
})

  



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })