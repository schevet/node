const colors = {
    green: {
        headerBackground: "#6B8E23",
        headerColor: "black",
        photoBorderColor: "white",
        links: "blue"
    },
    blue: {
        headerBackground: "#6A5ACD",
        headerColor: "white",
        photoBorderColor: "white",
        links: "white"  
    },
    black: {
        headerBackground: "#808080",
        headerColor: "black",
        photoBorderColor: "black",
        links: "darkgray"
    },
    red: {
        headerBackground: "#CD5C5C",
        headerColor: "black",
        photoBorderColor: "white",
        links: "darkgray"
    }
};


function generateHTML(data) {
    console.log(data)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">    
        
        <style>
                #topCard{
                margin-right: 20px;
                margin-left: 20px;
                margin-top: 15px;
                position: relative;
                background-color: ${colors[data.color].headerBackground};
                margin: auto;
                color: ${colors[data.color].headerColor};
                border:1px solid black;
                }
    
                img{
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-radius:03%;
                max-width: 120px;
                }
    
                h1{
                    text-align: center;
                    font-family: 'arial', sans-serif;
                }
    
               
                h3{
                    font-size:15px;
                    text-align: center;
                    font-family: 'arial', sans-serif;
                }
    
                h4{
                    font-size: 20px;
                    font-family: 'arial', serif;
                }
                p{
                    font-family: 'arial', sans-serif;
                }
                   
                li{
                    text-align: left;
                    font-family: 'Josefin Slab', serif;
                    list-style-type: none;s
                }
                a{
                    color: ${colors[data.color].photoBorderColor};
                }
                .col-4{
                    text-align: center;
                    color: lightgray;
                }
                .posts{
                    text-align: center;
                }
                
                #bio{
                    background-color: "#C0C0C0";
                    color:black;
                    border:1px solid black;
                }
                #contact{
                    text-align: center;
                    padding:15px;
                }
    
                .infoCards{
                    margin: auto 0;
                    text-align: center;
                    background:white;
                    border: 1px solid black;
                }
                .left{
                    padding-right:0;
                }
  
        </style>
    
    
        <title>${data.response.name}'s Github Profile</title>
    </head>
    
<body>
<header>
</header>
<div class = "container">
    <div id="topCard">
        <div class = "row"> 
            <div class = "col-4">
                <img id="frontpageimage" src="${data.response.avatar_url}"/>
            </div>
            <div class = "col-8">
                <ul>
                    <li><h2>My name is ${data.response.name}</h2></li>
                    <li><h2>I work at ${data.response.company}</h2></hi>
                </ul>
            </div>
        </div>
    
    <div class = "links">
        <div class = "row">
        
            <div class = "col-4">  
                <a class="github" style="text-align:center" href="${data.response.html_url}">My Account</a>
            </div>
            <div class = "col-4">    
                <nav>
                ${data.response.location ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/
                ${data.response.location}"><i class="fas fa-location-arrow"></i> ${data.response.location}</a>` : " "}</nav>
            </div>
            <div class = "col-4">  
                <a class="posts" style="text-align:center" href="${data.response.blog}">My Posts</a>
            </div>
        </div>
    </div>
    
    
     <!-- git hub bio  -->
    <div id="bio">
        <div class = "row"> 
            <div class = "col-12">
                <h3>${data.response.bio ? `${data.response.bio}` : " "} </h3>
            </div>
        </div>
    </div>
    
        <div class="infoCards">
        
            <div class = "row">
                <div class = "col-6">
                    <div class = "row"> 
                        <div class = "col-12">
                            <h4>Public Repositories ${data.response.public_repos}</h4>
                        </div>
                    </div>
                </div>
                                    
                <div class = "col-6">
                    <div class = "row"> 
                        <div class = "col-12">
                            <h4>Stars ${data.response.stars ? `${data.response.stars}` : "None"}</h4>
                        </div>
                    </div>
                </div>
            </div>         

            <div class = "row">
                    <div class = "col-6">
                        <div class = "row"> 
                            <div class = "col-12">
                                <h4>Followers ${data.response.followers}</h4>
                            </div>
                        </div>
                    </div>

                <div class = "col-6">
                    <div class = "row"> 
                        <div class = "col-12">
                            <h4>Following ${data.response.following}</h4>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>            
    
    
    </body>
    
    </html>`;
}

module.exports = generateHTML;