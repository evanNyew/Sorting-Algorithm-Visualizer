export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSort(array, auxiliaryArray, animations);
    return animations;
}
  
function bubbleSort(array, auxiliaryArray, animations){
    var len = array.length;
    for (var i = len-1; i >= 0 ; i--){
        for(var j = 1; j <= i; j++){
        if(array[j-1] > array[j]){
            animations.push([j-1, j]);
            animations.push([j-1, j]);
            var temp1 = array[j-1];
            var temp2 = array[j];
            array[j-1] = array[j];
            array[j] = temp1;
            animations.push([j-1, temp2]);
            animations.push([j, temp1]);
            }
        }
    }
    return array;
}