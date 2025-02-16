class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // ---> O(1)
  get(index) {
    return this.data[index];
  }

  // ---> O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // ---> O(1)
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // ---> O(n)
  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    const item = this.data[index];
    this.shift(index);
    return item;
  }
}

const array1 = new MyArray();

console.log(array1);
array1.push(0);
array1.push(1);
array1.push(2);
array1.push(3);
array1.push(4);
array1.push(5);
array1.push(6);
array1.push(7);
array1.push(8);
array1.push(9);
console.log(array1);
array1.pop();
array1.pop();
console.log(array1);
array1.delete(2);
console.log(array1);
