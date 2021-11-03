/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = (arr) => {
    // let zeros = [];
    // let auxArray = [];
    // arr.forEach((item) => {
    //     if (item === 0) {
    //         zeros.push(item);
    //     } else {
    //         auxArray.push(item);
    //     }
    // });

    // newArray = [...auxArray, ...zeros];

    // return newArray;

    const result = arr.filter((item) => item !== 0)
        .concat(arr.filter((item) => item === 0));

    return result;
};

// console.log(moveZeros([0,0,1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));