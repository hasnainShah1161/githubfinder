//crearting class of UI for interface


class UI {

    constructor(){

        this.profileDiv = document.querySelector('#profileContainer');
        this.reposDiv = document.querySelector('#reposContainer');
    }

    //show profile data

    showProfile(profile){
     this.profileDiv.innerHTML = `<div class ="card card-body">
       <div class ="row">
        <div class ="col-md-3 ">
        <img class ="img-fluid mt-2 mb-2" src="${profile.avatar_url}">
        <a class ="btn btn-block btn-info mt-1 mb-3 pt-2 pt-2" href="${profile.html_url}" target ="_blank">View Profile</a>
        </div>
       
       <div class ="col-md-9 ">
       <span class ="badge badge-primary">Repos:${profile.public_repos}</span>
       <span class ="badge badge-secondary">Gists:${profile.public_gists}</span>
       <span class ="badge badge-success">Followers:${profile.followers}</span>
       <span class ="badge badge-warning">Following:${profile.following}</span>
        <b><br>
        <ul class ="list-group bg-white">
        <li class="list-gropup-item lead text-info">Bio: ${profile.bio}</li>
        <li class="list-gropup-item lead text-info ">Created_at: ${profile.created_at}</li>
        <li class="list-gropup-item lead text-info">Email: ${profile.email}</li>
        <li class="list-gropup-item lead text-info">Email: ${profile.email}</li>
        <li class="list-gropup-item lead text-info">Location: ${profile.location}</li>
        <li class="list-gropup-item lead text-info">Login: ${profile.login}</li>
        <li class="list-gropup-item lead text-info">Name: ${profile.name}</li>
        <li class="list-gropup-item lead text-info">URL: ${profile.html_url}</li>
        </ul>
       </div>

      </div>
      <div class="card card-body">
      
      </div>
     
     </div>
     <h3 class = "page-heading mb-3 mt-3 text-info navbar-brand">Latest Repos </h3>
    
    `;
    }
    
    //show repos

    showRepos(Repos){

   

  Repos.forEach(repo => {

    this.reposDiv.innerHTML += `
    <div class ="card card-body ">
      <div class ="row">
      <div class ="col-md-6">
       <a href="#" src ="${repo.html_url}" class="text-info lead navbar-brand" target="_blank">${repo.name}</a>
       </div>
       <div class ="col-md-6">
        <span class ="badge" style ="background-color:#53C2E1">Forks:${repo.forks}</span>
       <span class ="badge" style ="background-color:#00BB83">Stars:${repo.stargazers_count}</span>
       <span class ="badge" style ="background-color:#D79499">Watchers:${repo.watchers_count}</span>
       </div>
      </div>
    </div>`;
      
  });
        
    
}  
//showAlert message

showAlert(message,className){

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message))
    const search = document.querySelector('.searchContainer');

    const mainContainer = document.querySelector('.container1')
    
    mainContainer.insertBefore(div,search);
    
}
//clear screen
clearScreen(){

    // const searchContainer = document.querySelector('.searchContainer');

    this.profileDiv.innerHTML = '';
    this.reposDiv.innerHTML='';
}

}
