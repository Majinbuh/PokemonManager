import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-generations',
  standalone: true,
	imports: [
		NgForOf
	],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {

	public generations: Array<any>;

	constructor() {
		this.generations = [];
		this.addGeneration();
	}

	public addGeneration(): void {
		this.generations.push({name: "Génération I"});
		this.generations.push({name: "Génération II"});
		this.generations.push({name: "Génération III"});
		this.generations.push({name: "Génération IV"});
		this.generations.push({name: "Génération V"});
		this.generations.push({name: "Génération VI"});
		this.generations.push({name: "Génération VII"});
	}


}