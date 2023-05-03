import { useState, useEffect } from "react";

import Cards from "../../../component/Cards";

import Filters from "../Filters";

import './productPageRightSide.css'

const ProductPageRightSide = (props) => {
    const { productsData, brandData, categoryData } = props;


    const [filteredProductData, setFilteredProductData] = useState(productsData)

    const [isBrandChecked, setIsBrandChecked] = useState(new Array(brandData?.length).fill(false));
    const [isCategoryChecked, setIsCategoryChecked] = useState(new Array(categoryData?.length).fill(false));

    useEffect(() => {
        if(brandData?.length) {
            setIsBrandChecked(new Array(brandData?.length).fill(false))

        }
    }, [brandData]);

    useEffect(() => {
        if(categoryData?.length) {
            setIsCategoryChecked(new Array(categoryData?.length).fill(false))

        }
    }, [categoryData]);





    const handleBrandDataChange = (position) => {
        const updatedCheckedState = isBrandChecked.map((item, index) =>
            index === position ? !item : item
        );

        setIsBrandChecked(updatedCheckedState);

    }


    const handleCategoryDataChange = (position) => {
        const updatedCheckedState = isCategoryChecked.map((item, index) =>
            index === position ? !item : item
        );

        setIsCategoryChecked(updatedCheckedState);
    }


    useEffect(()=> {
        filterProductData();
    }, [isBrandChecked, isCategoryChecked])


    const filterProductData = () => {
        const brandFilter = brandData && brandData?.reduce((acc, curr, index)=> {
            if(isBrandChecked[index]){
                acc.push(curr)
            }

            return acc;
        }, []);

        const categoryFilter =categoryData&& categoryData?.reduce((acc, curr, index)=> {
            if(isCategoryChecked[index]){
                acc.push(curr)
            }

            return acc;
        }, []);

        const allBrandFalse = isBrandChecked.every(elem => !elem);
        const allCategoryFalse = isCategoryChecked.every(elem => !elem);

        if(!allBrandFalse || !allCategoryFalse) {
            const filteredProducData =  productsData.filter(productData => {
                return brandFilter?.includes(productData?.brand) || categoryFilter?.includes(productData.category)
            });

            setFilteredProductData(filteredProducData);
        } else if(allBrandFalse && allCategoryFalse) {
            setFilteredProductData(productsData)
        }
        
    }


    return (
        <div className="right-side-ui">
            <Filters
                productsData={productsData}
                handleBrandDataChange={handleBrandDataChange}
                handleCategoryDataChange={handleCategoryDataChange}
                isBrandChecked={isBrandChecked}
                isCategoryChecked={isCategoryChecked}
                categoryData={categoryData}
                brandData={brandData}
            />

            <div className='right-side-container valign-wrapper'>
                {filteredProductData?.map((product, index) => {
                    const { searchImage, productName, mrp, brand } = product ?? {};
                    return (
                        <div key={index} className='cards'>
                            <Cards
                                imgSrc={searchImage}
                                productName={productName}
                                mrp={mrp}
                                brand={brand}
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductPageRightSide;
