export class User {
    constructor(public name:string,public avatar_url:string,public html_url:string,public bio:string,
        public public_repos:string,public followers:string,public following:string,
        public created_at:Date,public updated_at:Date){
    }
}
