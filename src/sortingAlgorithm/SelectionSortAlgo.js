export function getselectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  
  var minIdx, temp,
    len = array.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    animations.push([i, minIdx]);
    animations.push([i, minIdx]);
    var temp2 = array[minIdx];
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;

    

    animations.push([i, temp2]);
    animations.push([minIdx, temp]);
  }
  return array;
}