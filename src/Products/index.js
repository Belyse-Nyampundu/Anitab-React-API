import React,{useState, useEffect} from "react";

const Products =()=>{

    //CREATING STATES

    const [products,setProducts] = useState([]);
    //WHEN SERVER
    const [loading,setLoading] = useState([])

     //use effect function and fetching api

    useEffect(()=>{
        (async () => {
            await getProducts();
        })();
    }, []);


    //fetchin api

    const getProducts = async () =>{
        try{
            setLoading(true)
        const response =await fetch ('https://dummyjson.com/products')
        const result = await response.json()
        setProducts(result.products);
        setLoading(false)
    }
    catch(error){
        console.log(error.message);
    }
};

console.log({products});

if(loading){
    return <h1>Loading ...</h1>
}

return(
   <div> 
  {products.map(item =>(
    <div key={item.id}>
      <h3>{item.title}</h3>
    </div>
     ))}
   </div>

);
  }
 

export default Products;