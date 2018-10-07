class Github {
    constructor(){

        this.client_id = '5328c864406a6fc9d6fb';

        this.client_secret = 'c38c08cdfb370cda97d99654c5880409b87e98aa';
        
        this.repos_count = 5;

        this.repos_sort = 'created:asc'

    }

    async getProfileData(userData){
       
        //for profile fetchin
        const getDataFromProfile =  await fetch(`https://api.github.com/users/${userData}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile= await getDataFromProfile.json();
        //for repos feching


        const getDataFromRepos =  await fetch(`https://api.github.com/users/${userData}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        
         
        const Repos = await getDataFromRepos.json();
        
        return {
          profile,
          Repos
        
         }
    }
    
}
