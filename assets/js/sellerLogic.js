let{products}=require("./data")


filterByName =(array,name)=>{
  let arr=[];
  const trimName=name.trim()
  array.filter((product)=>{
    if(product.name.includes(trimName)){
      arr=[...arr,product]
    }
  })
    return arr
  }
  filterByPrice=(array,price)=>{
    let arr=[];
    array.filter((product)=>{
      if(product.price==price){
        arr=[...arr,product]
      }
    })
      return arr
    }
    filterByCategory =(array,category)=>{
      let arr=[];
      const trimCategory=category.trim()
      array.filter((product)=>{
        if(product.category.includes(trimCategory)){
          arr=[...arr,product]
        }
      })
        return arr
      }
      addProduct=(productDetails)=>{
       products=[...products,productDetails]
        return products
      }

      removeProduct=(id)=>{
        let newProductArr=[]
        products.filter((product)=>{
         if(product.id !==id){
           newProductArr=[...newProductArr,product]
         }
        })
        return newProductArr
      }


  module.exports = {
  filterByName,
  filterByPrice,
  filterByCategory,
  addProduct,
  removeProduct
}

