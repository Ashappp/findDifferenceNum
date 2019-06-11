function findDifference(arr) {
  let minValue = arr[0];
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  let maxIndex = minIndex;
  let maxValue = minValue;
  for (let i = maxIndex; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  const result = maxValue - minValue;
  console.log(result);
}

findDifference([1, 34, 68, 6, 2, 7, 45, 66]);
