console.log("wefw");
console.log(fetch("https://api.chucknorris.io/jokes/categories").then((res)=>res.json));
const promise=new Promise((res,rej)=>{
    var value=false;
    if(value){
        res(490)
    }else{
        rej(-500)
    }
})

function promise(){
    return new Promise((res,rej)=>{
            var value=false;
            if(value){
                res(490)
            }else{
                rej(-500)
            }
    })
}


promise()
.then((amt)=>console.log(`Success Resolved...!!!!!!!!!!!!!!!${amt}`))
.catch((amt)=> console.log(`Failed .............!${amt}`)
)
   

function toss(){
    return new Promise((res,rej)=>{
        var value=Math.floor(Math.random()*2);
        if(value==0){
            res("Won The Match!!!!");
        }else{
            rej("Rejected From Match");
        }
    })
}

toss()
.then((message)=>console.log(`Your are ${message}`))
.catch((message)=>console.log(`Your are ${message}`));


//Promise Methodsss..................................


let recA=new Promise((res,rej)=>{
    var value=true;
    if(value){
        setTimeout(res,3000,"surjith");
    }else{
        rej("surjith not reached");
    }
})


let recB=new Promise((res,rej)=>{
    var value=false;
    if(value){
        setTimeout(res,2000,"kumar");
    }else{
        rej("kumar not reached");
    }
})

let recC=new Promise((res,rej)=>{
    var value=true;
    if(value){
        setTimeout(res,1000,"gobi");
    }else{
        rej("gobi not reached");
    }
})

//pending resolved rejected

Promise.all([recA,recB,recC])
.then((message)=>console.log(message+"   all"))
.catch((message)=>console.log(message))

Promise.allSettled([recA,recB,recC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))


Promise.race([recA,recB,recC])
.then((message)=>console.log(message+"   race"))
.catch((message)=>console.log(message))

Promise.any([recA,recB,recC])
.then((message)=>console.log(message+" any"))
.catch((message)=>console.log(message))