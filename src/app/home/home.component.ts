import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public tagline="Welcome to Whatever! A stop solution for all your needs.";
public quote="The best customer service is if the customer doesn't need to call you, doesn't need to talk to you. It just works.";
	 languages : [{
        lang: string
    }];
    points:[{
    	point: string
    }];
    carausol:[{
    	heading:string,
    	quote: string,
    	cite: string
    }]
  constructor() { this.languages = [{
			lang: "English (UK)"
		},
		{
			lang: "English (US)"
		},
		{
			lang: "Hindi"
		},
		{
			lang: "Spanish"
		}]

		this.points = [{
			point : "Search for the product and add it to cart."
		},
		{
			point: "Login with your account and fill address details."
		},
		{
			point: "Select your desired payment option and order."
		}]

		this.carausol = [{
			heading: "Awesome Work ",
			quote:"Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.",
			cite:"Tyrion Lannister",
		},
		{
			heading: "Dedicated Team ",
			quote:"Ever loved someone so much, you would do anything for them? Yeah, well make that someone yourself and do whatever the hell you want.",
			cite:"Harvey Specter",	
		}]
	};

  ngOnInit() {
  }

}
