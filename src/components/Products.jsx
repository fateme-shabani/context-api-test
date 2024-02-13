import React, { useContext } from 'react'
import Card from './Cards'
import { MyContext } from '../myContext/context';

const Products = () => {
    const [products, setproducts] = useContext(MyContext);

    // const [products, setproducts] = useState([
    //     {id:1,name:'book',price:14000},
    //     {id:2,name:'pencel',price:1000},
    //     {id:3,name:'lable',price:500}
    // ])
  return (
    <div>
        {products.map(item=>{return <Card key={item.id} product={item} />})}

    </div>
  )
}

export default Products  