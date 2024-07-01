import axios from 'axios';
import { useEffect, useState } from 'react'

export default function ShoppingList() {
    const [myList, setmyList] = useState();

    useEffect(() => {
        const getList = async () => {
            const fetchList = await axios.get("https://fakestoreapi.com/products")

            // when we call the api it'll return data alomg with header footer etc
            // bt we need only data
            const finalList = await fetchList.data;
            setmyList(finalList)
        };
        getList();
    }, [])

    return (
        <div>
            {myList?.map((item) => { // optional chaining
                return (
                    <ul key={item.id}>
                        <li>Title {item.title}</li>
                        <li>Category {item.category}</li>
                        <li>
                            <img className='w-25 h-25' src={item.image} alt="" />
                        </li>
                        <li>Price {item.price}</li>

                    </ul>
                )
            })}
        </div>
    )
}
