const request = require('request')



const getNews =(searchKeyWord , callBack)=>{
    const url = `https://newsapi.org/v2/everything?q=${searchKeyWord}&from=2021-12-10&sortBy=popularity&apiKey=5180e3b0cf6744e086c543dc925556d9`



    request.get({url,json:true}, (error, data)=>{

        if(error){
            return callBack(error , null)
        }else if(data.body.status != 'ok'){
           
            return callBack({error:'Error'} , null)

        }


        return callBack(null, data)


    })
}


module.exports ={getNews}


