Array.prototype.quicksort = function(lo, hi) {
    if (lo < hi) {
        var p = partition(lo, hi);
        this.quicksort(lo, p - 1); 
        this.quicksort(p+1, hi); 
    }
}

Array.prototype.partition = function(lo, hi) {
    var pivot = this[hi];
    var i = lo - 1; 

    for (var j = lo; j < hi; j++) {
        if (this[j] <= pivot) {
            i = i + 1; 
            this.swap(i, j); 
        }
    }
    this.swap(i+1, hi) ; 
    return i + 1; 
}


Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

/*


algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p – 1)
        quicksort(A, p + 1, hi)

algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo - 1    
    for j := lo to hi - 1 do
        if A[j] ≤ pivot then
            i := i + 1
            swap A[i] with A[j]
    swap A[i+1] with A[hi]
    return i + 1


*/