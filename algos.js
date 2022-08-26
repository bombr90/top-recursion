// fibonacci iterative
const fibs = (num) => {
  if(num===0) return [0];
  if(num===1) return [0,1];
  let result = [0,1];
  for(let i = 2; i<num; i++)  {
    result.push(result[result.length-1]+result[result.length-2]);
  }
  return result;
}

//fibonacci recursive
const fibsRec = (num) => {
    if(num === 1 ){ 
      return [0];
    } else if (num === 2) {
      return [0,1];
    }  else {
      const arr = fibsRec(num-1);
      return arr.concat(arr[num-2]+arr[num-3]);
    }
}

// mergeSort recursive 
const mergeSort = (array) => {
  if(array.length <=1)  {
    return array;
  }
  const left = array.splice(0, Math.trunc(array.length / 2) + array.length % 2);
  const right = array.splice(0);
  return merge(mergeSort(left),mergeSort(right));
}

const merge = (left, right) => {
  const finalLen = left.length + right.length;
  const mergedArr = [];
  
  while(mergedArr.length < finalLen)  {
    if(left.length === 0) {
      mergedArr.push(...right.splice(0));
      break;
    }
    if(right.length === 0) {
      mergedArr.push(...left.splice(0));
      break;
    }
    if((left[0] === right[0]))  {
      mergedArr.push(left.shift());
      mergedArr.push(right.shift());
    }
    if(left[0] < right[0])  {
      mergedArr.push(left.shift())
    }
    if((left[0] > right[0])) {
      mergedArr.push(right.shift())
    }
  }
  return mergedArr;
}

export {fibsRec, mergeSort};
