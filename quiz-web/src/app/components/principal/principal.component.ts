import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  socials: social[];


  constructor() { }

  ngOnInit() {
    this.socials = new Array;
    this.setSocials();
  
  }


  setSocials(){
    const instagram:social ={
      'title':"Instagram",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      'iconClass':"fa fa-instagram",
      'active': true
    }
    const twitter:social ={
      'title':"Twitter",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      'iconClass':"fa fa-twitter",
      'active': true
    }
    const facebook:social ={
      'title':"Facebook",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      'iconClass':"fa fa-facebook",
      'active': true
    }
    const pinterest:social ={
      'title':"Pinterst",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      'iconClass':"fa fa-pinterest",
      'active': true
    }
    const google:social ={
      'title':"Google",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      'iconClass':"fa fa-google-plus",
      'active': true
    }
    const github:social ={
      'title':"GitHub",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      'iconClass':"fa fa-github",
      'active': true
    }

    this.socials.push(instagram);
    this.socials.push(twitter);
    this.socials.push(facebook);
    this.socials.push(google);
    this.socials.push(pinterest);
    this.socials.push(github);
  }

}
