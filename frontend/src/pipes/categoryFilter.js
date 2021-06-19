function Check(arr1,arr2){
	for (var i = 0; i < arr1.length; i++)
	{
  		if (arr2.includes(arr1[i])){return true;}
  	}
}

export const categoryFilter = (arr, category) => {
	//console.log(arr);
    if(!category) return arr;
    return arr.filter((product) => Check(product.category,category));
};