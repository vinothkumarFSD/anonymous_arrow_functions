let array=[1,2,3,4,5];

sum = array.map((i)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          });
      console.log(sum[0]);