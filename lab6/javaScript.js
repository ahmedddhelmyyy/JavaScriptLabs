class Engine {
    static #count = 0;
  
    constructor(source) {
      if (new.target === Engine) {
        throw new Error("Cannot instantiate abstract class Engine");
      }
      this._source = source;
      Engine.#count++;
    }
  
    get getSource() {
      return this._source;
    }
  
    static getCount() {
      return Engine.#count;
    }
  }
  
  // Car class
  class Car extends Engine {
    constructor(top, left, source) {
      super(source);
      this._top = top;
      this._left = left;
      this._carElemnt = document.getElementById("car");
  
      // initial positions
      this._carElemnt.style.top = `${top}px`;
      this._carElemnt.style.left = `${left}px`;
    }
  
    set setTop(val) {
      this._top = val;
      this._carElemnt.style.top = `${val}px`;
    }
  
    set setLeft(val) {
      this._left = val;
      this._carElemnt.style.left = `${val}px`; 
    }
  
    moveLeft() {
      if (this._left > 0) {
        this._left = this._left - 10;
        this._carElemnt.style.left = `${this._left}px`;
      }
    }
  
    moveRight() {
      const screenWidth = window.innerWidth;
      if (this._left + this._carElemnt.offsetWidth < screenWidth) {
        this._left = this._left + 10;
        this._carElemnt.style.left = `${this._left}px`;
      }
    }

    moveUp(){
        if(this._top > 0){
            this._top=this._top -10;
            this._carElemnt.style.top= `${this._top}px`;
        }
    }

    // moveDown(){
    //     if(this._top + this._carElemnt.offsetHeight < window.innerHeight){
    //         this._top=this._top +10;
    //         this._carElemnt.style.top= `${this._top}px`;
    //     } 
    // }

    moveDown() {
        if (this._top + this._carElemnt.offsetHeight < window.innerHeight) {
          this._top += 10;
          this._carElemnt.style.top = `${this._top}px`;
        }
      }
      
  
    changeStyles(styles) {
      Object.assign(this._carElemnt.style, styles);
    }
  
    moveCar(direction) {
      const move = () => {
        if (direction === "left" && this._left > 0) {
          this.moveLeft(); 
          requestAnimationFrame(move);
        } else if (
          direction === "right" &&
          this._left + this._carElemnt.offsetWidth < window.innerWidth
        ) {
          this.moveRight();
          requestAnimationFrame(move);
        }else if (direction === "up" && this._top > 0) {
            this.moveUp();
            requestAnimationFrame(move);
          }else if (direction === "down" && 
            this._top + this._carElemnt.offsetHeight < window.innerHeight) {
            this.moveDown();
            requestAnimationFrame(move);
          }

      };
      move();
    }
  }
  
  // Create the car
  let car1 = new Car(100, 100, 'car1.jpg');
  