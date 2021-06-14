let bearer_token =
"BQA3f_kZGPz5leYI8DM9Lgz6Pg5OCmJFCa_6wMiap8x_gm2sZRWbF4oQRatavQ0W2f08BpLUrMDa5IOrq7bTI6yM8clGUDhWa8kjeprnggM1XyDPGbJ6ezTPp4m84x5I4rUJwJ7XcIwfylJ9A3uZ6ec2OP1QAAOFTDvVT5NJk6XBYwDw0qLbeZmt2fKMuy8mcOkjckRe7o8qzQdGhdC5sRJB1hchrZcTm3dbi4BsCKtCC78qUnY02mp4EE-HMN37DnngwDW3Mq2duSEB7kYs69UsdIC18Q1KyMHbWyRgrR9b-osS";
let url = "https://api.spotify.com/v1/shows";
let bearer = "Bearer " + bearer_token;

function fetch_featured(){
    let show_id = "5CfCWKI5pZ28U0uOzXkDHe";
    fetch(url + "?ids=" + show_id + "&market=US", {
        method:"GET",
        headers:{
            'Authorization': bearer,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then((data)=>{return data.json()})
    // .then(console.log)
    .then((data)=>{
        let show = data.shows[0]
        let featured_html = `
            <div class = 'featured'>
                <img src='${show.images[1].url}' />
                <div>
                    <h2>${show.name}</h2>
                    <h4>${show.description}</h4>
                    <h3>Don't forget to listen to today's episode!</h3>
                    <button>Listen now</button>
                </div>
            </div>
        `
        document.getElementById("featured").innerHTML = featured_html;
    })
    .catch(console.log)
}

function fetch_latest(){
    let show_id = "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ";
    fetch(url + "?ids=" + show_id + "&market=US", {
        method:"GET",
        headers:{
            'Authorization': bearer,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then((data)=>{return data.json()})
    .then((data)=>{
        data.shows.forEach(show => {
            let show_html = `
            <div class = 'show' onclick='location.href = "${show.external_urls.spotify}"'>
                <img src='${show.images[1].url}' />
                <div>
                    <h4>${show.name}</h4>
                    <h5>${show.publisher}</h5>
                </div>
            </div>
           `
            document.getElementById("shows").innerHTML += show_html;
        });

    })
    .catch(console.log)
}

function fetch_all(){
    fetch_featured();
    fetch_latest();
}

