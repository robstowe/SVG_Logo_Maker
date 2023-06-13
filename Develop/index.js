const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./shapes');
const SVG = require('./svg');
const { writeFile } = require('fs/promises')
// const svg = ("http://www.w3.org/2000/svg", "svg");
// svg.setAttribute('style', 'border: 1px solid black');
// svg.setAttribute('width', '600');
// svg.setAttribute('height', '250');
// svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
// document.body.appendChild(svg);

inquirer.prompt([
    {
        type: "input",
        message: "Please enter up to three characters",
        name: "characterText",
        validate: textInput => {
            if (textInput.length <= 3) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please choose a text color",
        name: "textColors",
    },
    {
        type: "list",
        message: "Please choose one of the following shapes",
        name: "shapes",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        message: "Please choose a shape color",
        name: "shapeColors",
    },
])
    .then(({ characterText, textColors, shapes, shapeColors }) => {
        let chosenShape
        switch (shapes) {
            case "Square":
                chosenShape = new Square()
                break;
            case "Circle":
                chosenShape = new Circle()
                break;
            case "Triangle":
                chosenShape = new Triangle()
                break;

        }
        chosenShape.setColor(shapeColors)
        const svg = new SVG();
        svg.setText(characterText, textColors);
        svg.setShape(chosenShape);
        return writeFile("Logo.SVG", svg.render());
    })
    .then(() => {
        console.log('Generated Logo.SVG');
    })
    .catch((e) => {
        console.log('This is the error - ', e);
        console.log('Unsuccesful');
    })


// .then((banana) => {
//     svg = createSVG(banana)
//     fs.writeFile("logo.svg", svg, (error) => 
//     error ? console.log("This is the error", error) : console.log("SVG logo succesfully created"));
// })

// function createSVG(data) {
//     return `# ${data.colors}, 
//     `;
// }