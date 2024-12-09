function getId(Id){
return new Promise((res,err)=>{
setTimeout(()=>{
res(res);
console.log("kjh");
},3000);
})

}

async function func1(){
await getId(100);
await getId(200);

}
func1();