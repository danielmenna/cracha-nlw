
      const linksSocialMedia = {
        github: 'falacomomenna',
        youtube: 'rocketseat',
        facebook: 'danielmenna',
        instagram: 'danielrmenna',
        twitter: 'falacomomenna'
      }

      function changeSocialMediaLinks(){

        for(let li of socialLinks.children) {
          const social =li.getAttribute('class')
          li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        }
      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos(){
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

       fetch(url)
       .then(response => response.json())
       .then(data => {
       userName.textContent = data.name
       userBio.textContent = data.bio
       userLink.href = data.html_url
       photoProfile.src = data.avatar_url
       userLogin.textContent = data.login  
       })  
      }

      getGitHubProfileInfos()