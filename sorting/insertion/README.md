# Blog Notes: Insertion Sort

Given the pseudocode below we can determine the outputs at each iteration.

``` javascript
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

1. create a function called insertionSort that takes in an array
2. begin a `for` loop that will execute the length of the array: `for(i=1; i < arr.length; i++)`
3. declare the following variables and values: `let j = i-1` and `let temp = arr[i]`
4. nest a `while` loop that will execute as long as the following is true: `(j >= 0 && temp<arr[j])`
5. the `while` loop will execute the following code block:

``` javascript
while(j >= 0 && temp < arr[j]){
  arr[j+1] = arr[j];
  j = j-1;
}
```

6. once the condition is no longer true, assign `arr[j-1]` to equal the temp value
