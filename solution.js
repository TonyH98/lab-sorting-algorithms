const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => {
  const sort = someNums.sort((a , b) => {
    return Number(a) - Number(b)
  })
  return sort
};

// sort numbers in descending order
const sortNumsD = () => {
  const sort = someNums.sort((a , b) => {
    return Number(b) - Number(a)
  })
  return sort
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
 
  return someWords.sort()

};

// sort words in descending order case insensitive
const sortWordsD = () => {
  const sort = someWords.sort((a , b) => {
    return b.localeCompare(a)
  })
  return sort
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  const sort = someProducts.sort((a , b) => {
    return a.name.localeCompare(b.name)
  })

  return sort
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  const sort = someProducts.sort((a , b) => {
    return a.price - b.price
  })
  return sort
};

// sort products by price, descending order
const sortProductPriceD = () => {
  const sort = someProducts.sort((a , b) => {
    return b.price - a.price
  })
  return sort
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  const sort = someProducts.sort((a , b) => {
    return a.price - b.price || a.name.localeCompare(b.name)
  })
  return sort
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  const sort = catArt.sort((a , b) => {
    return a.designedBy.localeCompare(b.designedBy)
  })
  return sort
};

// sort catArt by price

const catArtSortByPriceA = () => {
  
  const sort = catArt.sort((a, b) => {
    const getPriceValue = (price) => {
      if (typeof price === "string" && price.includes("♇♇")) {
        return Number(price.slice(2)) * 10;
      } else {
        return Number(price);
      }
    };
  
    const price1 = getPriceValue(a.price);
    const price2 = getPriceValue(b.price);
  
    return price1 - price2;
  });
  
  return sort;
  

};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
   const sort = arr.sort((a , b) => {
     if(typeof a === "number" && typeof b === "number"){
       return Number(a) - Number(b)
     }
     if(a < b){
       return - 1
     }
     else{
       return 1 
     }
   })

   return sort
};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
