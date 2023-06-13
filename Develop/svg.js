class SVG{ 
    constructor(){
        this.characterText = ""
        this.shapesEl = ""

    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapesEl} ${this.characterText}</svg>`
    }
    setText(message, textColors){
        this.characterText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColors}">${message}</text>`

    }
    setShape(shape) {
        this.shapesEl = shape.render();
      }
    
}

module.exports = SVG