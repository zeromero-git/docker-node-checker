    const axios = require('axios');
    // const request = require('request');

    

    // request(userUrl), { json: true }, (err, res, body) => {
    //     if(err) { return console.log(err) }
    // }
    // console.log()
   
    (async () => {
        const username = 'ovasylenko'
        let userUrl = `https://api.github.com/users/${username}/repos`
        

        let repoArray = await axios.get(userUrl)
            .then(response => {
               let repos = response.data.map(it => it.name)
            console.log(repos) 

            for (let i = 0; i < repos.length; i+=1) {
                // let repoUrl = `https://api.github.com/repos/${username}/${repos[i]}/git/trees/master?recursive=1`
                    axios.get(repoUrl)
                    .then(response => {
                     let pathName = response.data.map(it => it.tree)
                     
                    console.log(response.data.map(it => it.tree)) 
                })
            }
    })
    .catch(err => {
        console.log(err);
    })

    function b64_to_utf8( str ) {
        return decodeURIComponent(escape(window.atob( str )));
      }

    })()
    // //2. get all files in repo

    // axios.get(`https://api.github.com/repos/${username}/[REPO]/git/trees/master?recursive=1`).then(response => {

    // }).catch(err => {
    //     console.log(err);
    // })