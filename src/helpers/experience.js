class JobExperience {
  constructor(company, position, date, place, detail) {
    this.company = company;
    this.position = position;
    this.date = date;
    this.place = place;
    this.detail = detail;
  }
}

const esso = new JobExperience(
  'Gas station Esso',
  'Shop employee',
  'February 2011 - March 2012',
  'Argentina',
  "In charge of attending the store's customers and administrative tasks, such as controlling the stock and the cash register"
);

const faena = new JobExperience(
  'Faena Hotel',
  'Waiter',
  'March 2012 - April 2014',
  'Argentina',
  'Worked in the most luxurious restaurant of this five star hotel, taking orders, serving customers and in general ensuring the customer enjoys an exclusive experience'
);

const faenaBellboy = new JobExperience(
  'Faena Hotel',
  'Bellboy',
  'April 2014 - June 2015',
  'Argentina',
  "Carrying guests' luggage to their room and attending to whatever needs they may have"
);

const rivadavia = new JobExperience(
  'Seguros Rivadavia',
  'Customer Support',
  'November 2015 - September 2018',
  'Argentina',
  'In charge of selling new insurance contracts, maintaining a relationship with clients to keep them happy and helping them when any claims that arise'
);

const art = new JobExperience(
  'Art Hotel',
  'Waiter',
  'Two winter seasons (2018/2019 - 2019/2020)',
  'Andorra',
  'Worked two winter seasons in one of the biggest hotels of the city Andorra La Vella. Taking orders, serving customers and providing a high quality customer service'
);

const cabanes = new JobExperience(
  'Olive Oil Les Cabanes',
  'Industry employee',
  'November 2020 - February 2021',
  'Spain',
  'Attending Olive dealers, performing machine maintenance and oil filtering'
);

export const experienceArray = [
  esso,
  faena,
  faenaBellboy,
  rivadavia,
  art,
  cabanes,
];
