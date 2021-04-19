class JobExperience {
	constructor(company, position, date, place) {
		this.company = company;
		this.position = position;
		this.date = date;
		this.place = place;
	}
}

const esso = new JobExperience(
	'Gas station Esso',
	'Shop employee',
	'February 2011 - March 2012',
	'Argentina'
);

const faena = new JobExperience('Faena Hotel', 'Waiter', 'March 2012 - April 2014', 'Argentina');

const faenaBellboy = new JobExperience(
	'Faena Hotel',
	'Bellboy',
	'April 2014 - June 2015',
	'Argentina'
);

const rivadavia = new JobExperience(
	'Seguros Rivadavia',
	'Customer Support',
	'November 2015 - September 2018',
	'Argentina'
);

const art = new JobExperience(
	'Art Hotel',
	'Waiter',
	'Two winter seasons (2018/2019 - 2019/2020)',
	'Andorra'
);

const cabanes = new JobExperience(
	'Olive Oil Les Cabanes',
	'Industry employee',
	'November 2020 - February 2021',
	'España'
);

export const experienceArray = [esso, faena, faenaBellboy, rivadavia, art, cabanes];
