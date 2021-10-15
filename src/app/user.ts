export class User {
  constructor(public login: string,
     public name: string, 
     public avatar_url: any, 
     public html_url: string, 
     public public_repos: number,
     public created_at: Date,
     public updated_at:Date) {}
}
