class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length

    
  }

  add(item) {
    this.items.push(item);
    this.items.sort ((a,b) => a - b);
    this.length ++;
    
    
  }

  get(pos) {
    if (pos <= this.items.length && pos >= 0 ){
      let number = this.items[pos]
      return number;
    } else {
      throw new Error('OutOfBounds');
      
    }

  }
  
  
   
  max() {
    if (!this.items.length == 0) {
      let highNumber = this.items[this.items.length - 1]
      return highNumber;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  

  min() {

    if (!this.items.length == 0) {
      let lowerNumber = this.items[0]
      return lowerNumber;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (!this.items.length == 0) {
    let sum = this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum
  } else {
    return 0;
  }
  }

  avg() {}

}
module.exports = SortedList;
