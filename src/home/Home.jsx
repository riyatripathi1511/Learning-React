import axios from 'axios'
import { useEffect, useState } from 'react'

// url: https://fakestoreapi.com/carts

export default function Home() {
    const [cartList, setCartList] = useState();

    //useEffect hook accpets two arguemnets:
    // callback func , another one is dependency list
    useEffect(() => {
        const fecthCart = async () => {
            const carts = await axios.get("https://fakestoreapi.com/carts")

            // when we call the api it'll return data along with header footer etc
            // bt we need only data
            const cartData = await carts.data;
            setCartList(cartData)
        };
        fecthCart();
    }, [])

    return (
        <div>
            {
                cartList?.map((curCart) => {
                    return (
                        <ul className='list-group w-50 m-1' key={curCart.id}>
                            <li className='list-group-item'>UserId : {curCart.userId}</li>
                            <li className='list-group-item'>Date : {curCart.date.slice(0, 10)}</li>

                        </ul>
                    );

                })
            }
        </div>
    );
}
