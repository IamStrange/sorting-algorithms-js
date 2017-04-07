function BubbleSort(list) {
    var n = list.length;
    do {
        var swapped = false; 
        for (var i = 0; i < n; i++){
        if (list[i-1] > list[i]) {
                list.swap(i-1, i)
                swapped=true
            }
        }
    } while(!swapped); 
    return list
}


Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}


/*

    procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat 
        swapped = false
        for i = 1 to n-1 inclusive do
            // if this pair is out of order 
            if A[i-1] > A[i] then
                // swap them and remember something changed 
                swap( A[i-1], A[i] )
                swapped = true
            end if
        end for
    until not swapped
end procedure

 */