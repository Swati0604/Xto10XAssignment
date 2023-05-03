import { useState, useEffect } from 'react';
import axios from 'axios';

//Custom Component
import Cards from '../../component/Cards';

//Api
import { apiUrl } from '../../utils/api';

import './productPage.css';
import { getFilterData, isEmpty } from '../../utils/helper';
import ProductPageRightSide from './ProductPageRightSide/ index';

const ProductPage = () => {
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [productsData, setProductData] = useState();
    const [brandData, setBrandData] = useState();
    const [categoryData, setCategoryData] = useState();
    

    useEffect(() => {
        fetchProductData(); 

        
    }, [])

    useEffect(()=> {
        const categoryData = getFilterData(productsData, 'category');
        setCategoryData(categoryData)
        
        const brandData = getFilterData(productsData, 'brand')
        setBrandData(brandData)
    }, [productsData])


    const fetchProductData = async () => {
        setLoading(true)
        try {
            const productsData = await axios.get(apiUrl);

            setLoading(true)
            setProductData(productsData?.data?.products);

        } catch (error) {
            setIsError(true)
        }
    }

    if(loading && !isError && isEmpty(productsData)) {
        return (
            <div>
                Loading ....
            </div>
        )
    }

    if(!loading && isError) {
        return (
            <div>
                Error ....
            </div>
        )
    }


    return (
        <>
            <div>
                {productsData && <ProductPageRightSide
                    productsData={productsData}
                    brandData={brandData}
                    categoryData={categoryData}
                 />}
            </div>
        </>
    )
}

export default ProductPage;