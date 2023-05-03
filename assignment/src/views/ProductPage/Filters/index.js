import { useState, useEffect } from "react";
import Checkbox from "../../../component/Checkbox";

import { getFilterData } from "../../../utils/helper";

import './filters.css'

const Filters = (props) => {
    const { handleBrandDataChange, handleCategoryDataChange, isBrandChecked, isCategoryChecked, brandData, categoryData } = props;


    return (
        <div className="filter-container">
            <div className="brand-filter">
               
                {
                    brandData?.map((item, index) => {
                        return (<div className="filter-item">
                            <Checkbox
                                index={index}
                                name={item}
                                isChecked={isBrandChecked[index]}
                                handleOnChange={() => handleBrandDataChange(index)}
                            />
                            {item}
                        </div>)
                    })
                }
            </div>

            <div className="brand-filter">
               
               {
                   categoryData?.map((item, index) => {
                       return (<div className="filter-item">
                           <Checkbox
                               index={index}
                               name={item}
                               isChecked={isCategoryChecked[index]}
                               handleOnChange={() => handleCategoryDataChange(index)}
                           />
                           {item}
                       </div>)
                   })
               }
           </div>
        </div>
    )
}

export default Filters;
