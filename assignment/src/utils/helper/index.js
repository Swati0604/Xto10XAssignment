export const isEmpty = (data) => {

    if(data?.length===0 || data === undefined || data === null) {
        return true
    }

    return false
}

export const getFilterData = (productsData, category) => {
    const filterData = productsData?.reduce((acc, curr) => {
        if(!acc.includes(curr[category])) {
            acc.push(curr[category])
        }
        return acc;
    }, []);
    return filterData
   
}