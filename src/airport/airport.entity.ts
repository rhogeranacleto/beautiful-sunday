import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('Airport')
export class Airport {

	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	airport_name: string;

	@Column()
	link: string;

	@Column()
	title: string;

	@Column()
	author: string;

	@Column()
	author_country: string;

	@Column()
	date: Date;

	@Column()
	content: string;

	@Column()
	experience_airport: string;

	@Column()
	date_visit: Date;

	@Column()
	type_traveller: string;

	@Column()
	overall_rating:number

	@Column()
	queuing_rating:number

	@Column()
	terminal_cleanliness_rating:number

	@Column()
	terminal_seating_rating:number

	@Column()
	terminal_signs_rating:number

	@Column()
	food_beverages_rating:number

	@Column()
	airport_shopping_rating:number

	@Column()
	wifi_connectivity_rating:number

	@Column()
	airport_staff_rating:number

	@Column()
	recommended:boolean
}