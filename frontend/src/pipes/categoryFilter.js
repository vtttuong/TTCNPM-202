export const categoryFilter = (arr, category) => {
    if(!category) return arr;
    return arr.filter((product) =>{ 
        var a=false;
        for (var p in product.category){
            if (category.includes(p)){
                a=true;
            }
        }
        return a;
    }
    );
};