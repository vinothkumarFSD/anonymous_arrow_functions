let array=[1,2,3,4,5,6,7,8,9,10,11];
let oddnumbers = (item)=>{

    if(item %2 !=0){
     return item;
     } 
     else{
        return item-1;
     }
     
    };

    array=array.map(oddnumbers);
     console.log(array);