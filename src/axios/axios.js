
import axios from 'axios'

export const fetchProducts= async (setProducts,setError)=>{

    try{
        const products= await axios.get('https://amazon24.p.rapidapi.com/api/todaydeals',{
            headers: {
                'X-RapidAPI-Key': '2565c29410msh5d5d2f756f9eed5p130a89jsn0a7a959312b9',
                'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
            }
        }) 

        setProducts(products.data.deal_docs);

        console.log(products)
    }
    catch(error){
        setError(error);
    }

}
