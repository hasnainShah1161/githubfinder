//creating object of the class Github

let github = new Github;
//creating obj of UI class
 const ui = new UI;

//creating event on the input field

const inputField = document.querySelector('.search');

inputField.addEventListener('keyup',( e) => {
   const inputValue = document.querySelector('.search').value;
   // const inputValue = e.target.value;
   //checking the condition whether input field in empty or not
  if(inputValue !==''){
      
 // to clear the previous data from the DOM
  ui.clearScreen();

    github.getProfileData(inputValue).then(response => {
       if (response.profile.message === 'NOT FOUND'){
           //display alert
           ui.showAlert('No MAtch Found','alert alert-danger')
       }
       //showprofile
       else{
           //show profile
           ui.showProfile(response.profile)
           //show repos
           ui.showRepos(response.Repos)
           
       }
    })
  } 
  else {
      //clear profile
   if(document.querySelector('.search').value ===''){
    document.getElementById('profileContainer').innerHTML ='';
    document.getElementById('reposContainer').innerHTML ='';
   }
  }
e.preventDefault();
})