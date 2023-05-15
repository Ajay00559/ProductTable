import logo from './logo.svg';
import './App.css';
import json from './data.json'
import { useEffect } from 'react';
import Table from '../src/Components/Table';
// import products
import { asyncloadproducts } from './store/productAction';

import { useDispatch, useSelector } from "react-redux";
// import useDispatch from 
function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncloadproducts())
    }, [])
    const products = useSelector((state) => state.product);
    console.log(products)
    //   const DisplayData=json.products.map(
    //     (item)=>{
    //         return(
    //             <tr key={item.id}>
    //                 <td>{item.id}</td>
    //                 <td>{item.title}</td>
    //                 <td>{item.description}</td>

    //             </tr>
    //         )
    //     }
    // )
    return (

         
            <div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr className='tr'>
                            <th>Sr.NO</th>
                            <th>Name</th>
                            <th>photo</th>

                            <th>description</th>
                            <th>price</th>
                            <th>discountPercentage</th>
                            <th>brand</th>
                            <th>stock</th>
                            <th>rating</th>
                            <th>category</th>
                        </tr>

                    </thead>
                    <tbody className='data'>
                        {products && products.product.map((item, index) => (
                            <Table key={index} item={item} />
                        ))}

                    </tbody>
                </table>

            </div>

       

        //   <div>
        //       <table className="table table-striped">
        //           <thead>
        //               <tr>
        //               <th>Sr.NO</th>
        //               <th>Name</th>
        //               <th>description</th>
        //               </tr>

        //           </thead>
        //           <tbody className='data'>


        //               {/* {DisplayData} */}

        //           </tbody>
        //       </table>

        //   </div>
    )

}

export default App;
