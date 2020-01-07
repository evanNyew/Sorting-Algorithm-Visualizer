export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    doQuickSort(array, 0, array.length - 1, animations);
    return animations;
}
  
function partition(array, pivot, left, right, animations) {
    var pivotValue = array[pivot];
    var partitionIndex = left;

    for(var i = left; i < right; i++) {
        
        if(array[i] < pivotValue) {
            animations.push([i, partitionIndex]);
            animations.push([i, partitionIndex]);
            var temp1 = array[i];
            var temp2 = array[partitionIndex];
            swap(array, i, partitionIndex);
            animations.push([i, temp2]);
            animations.push([partitionIndex, temp1]);
            partitionIndex++;
        }
    }
    animations.push([right, partitionIndex]);
    animations.push([right, partitionIndex]);
    var temp3 = array[right];
    var temp4 = array[partitionIndex];
    swap(array, right, partitionIndex);
    animations.push([right, temp4]);
    animations.push([partitionIndex, temp3]);
    return partitionIndex;
}

function doQuickSort(array, left, right, animations) {
    var pivot, partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right, animations);
        doQuickSort(array, left, partitionIndex - 1, animations);
        doQuickSort(array, partitionIndex + 1, right, animations);
    }
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}