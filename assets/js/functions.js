const { file } = require("@babel/types");


filterByName =(array,name)=>{
  let arr=[];
  const trimName=name.trim()
  array.filter((x)=>{
    if(x.Name.includes(trimName)){
      arr.push(x)
    }
  })
    return arr
}
module.exports = {
  filterByName
}