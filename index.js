const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const open = require("open");
const util = require("util");
const pdf = require('html-pdf');
const api = require("./api");
const generateHTML = require("./generateHTML");


const prompt = [

    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["red","blue","green","black"]
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username."
    },

];

const writeFile = util.promisify(fs.writeFile);

function writetoFile(data, fileName) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(prompt)
        .then(({ github, color }) => {
            console.log("searching");
            api.getUser(github)
                .then(response =>
                    api.getStars(github)
                        .then(stars => {
                            console.log(github)
                            console.log(response)
                            return generateHTML({
                                stars, color, response
                            })
                        }
                        ))
                .then(async function (html) {

                    await writeFile("index.html", html);

                    var readHtml = fs.readFileSync('index.html', 'utf8');
                    var options = { 
                        format: 'Letter',
                        width: '1000px',
                        height: '900px'
                        };
                     
                    pdf.create(readHtml, options).toFile('gitprofile.pdf', function(err, res) {
                      if (err) return console.log(err);
                      console.log(res); 
                    });
            
                })
                .catch(function(error){
                    console.log(error)
                })
        })
}
init();