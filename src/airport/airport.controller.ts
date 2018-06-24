import { Controller, Get, Param } from "@nestjs/common";
import { getMongoManager } from "typeorm";
import { Airport } from "./airport.entity";

@Controller('api')
export class AirportController {

	@Get('all/stats')
	async allStats() {

		return getMongoManager().aggregate<Airport, Airport>(Airport, [
			{
				$group: {
					_id: '$airport_name',
					count: {
						$sum: 1
					}
				}
			},
			{
				$sort: {
					count: -1
				}
			},
			{
				$project: {
					_id: 0,
					'airport-name': '$_id',
					count: '$count'
				}
			},

		]).toArray();
	}

	@Get(':airport/stats')
	airportStats(@Param('airport') airportName: string) {

		return getMongoManager().aggregate(Airport, [
			{
				$match: {
					'airport_name': airportName
				}
			},
			{
				$group: {
					_id: '$airport_name',
					count: {
						$sum: 1
					},
					avg: {
						$avg: '$overall_rating'
					},
					recommended: {
						$sum: '$recommended'
					}
				}
			},
			{
				$project: {
					_id: 0,
					airport_name: '$_id',
					reviews_count: '$count',
					overall_rating_avg: '$avg',
					recommended_count: '$recommended'
				}
			}
		]).toArray();
	}

	@Get(':airport/review')
	airportReview(@Param('airport') airportName: string) {

		return getMongoManager().aggregate(Airport, [
			{
				$match: {
					'airport_name': airportName
				}
			},
			{
				$project: {
					_id: 0,
					overall_rating: 1,
					recommendation: '$recommended',
					date: 1,
					author_country: 1,
					content: 1
				}
			},
			{
				$sort: {
					date: -1
				}
			}
		]).toArray();
	}
}