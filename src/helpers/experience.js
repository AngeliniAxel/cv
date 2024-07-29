class JobExperience {
  constructor(company, position, date, place, detail) {
    this.company = company;
    this.position = position;
    this.date = date;
    this.place = place;
    this.detail = detail;
  }
}

export const experienceArray = [
  new JobExperience(
    'Aurion Removals Australia',
    'Removalist',
    'Oct 2023 - Jan 2024',
    'Australia',
    'Worked in Melbourne during the high season, not only moving goods, but also in charge of the administrative tasks such as inventories while also serving as the primary interface with the client.'
  ),
  new JobExperience(
    'Central Lounge Australia',
    'Bartender',
    'Mar 2023 - Jun 2023',
    'Australia',
    'Efficiently managed high-volume drink orders, maintained a clean and organized bar environment, and provided exceptional service to a diverse clientele.'
  ),
  new JobExperience(
    'Mamaine Bar',
    'Bartender',
    'Feb 2022 - Jan 2023',
    'Spain',
    'Worked in a small but really busy bar in the heart of Barcelona, attending customers, making cocktails and in charge of managing the stock.'
  ),
  new JobExperience(
    'Webhelp',
    'Software Support Engineer',
    'Apr 2021 - Dec 2021',
    'Spain',
    'Attending Google customers with technical inquiries, and helping them with background issues using Google software.'
  ),
  new JobExperience(
    'Olive Oil Les Cabanes',
    'Industry Labourer',
    'Oct 2020 - Dec 2020',
    'Spain',
    'Performing machine cleaning and maintenance, organizing heavy stock using a forklift, oil filtering, and being prepared for any task that may appear during the day.'
  ),
  new JobExperience(
    'Art Hotel',
    'Waiter',
    'Nov 2018 - Mar 2020',
    'Andorra',
    'Worked two winter seasons in one of the biggest hotels of the city Andorra La Vella. Taking orders, serving customers and providing high quality customer service.'
  ),
  new JobExperience(
    'Seguros Rivadavia',
    'Customer Support',
    'Nov 2015 - Sep 2018',
    'Argentina',
    'In charge of selling new insurance contracts, maintaining a relationship with clients to keep them happy and helping with any claims that arise.'
  ),
  new JobExperience(
    'Faena Hotel',
    'Waiter',
    'Mar 2012 - Jun 2015',
    'Argentina',
    'Worked in the most luxurious restaurant of this five star hotel, taking orders, serving customers and ensuring the customer enjoys an exclusive experience.'
  ),
  new JobExperience(
    'Gas Station Esso',
    'Shop Employee',
    'Feb 2011 - Mar 2012',
    'Argentina',
    "In charge of attending the store's customers and administrative tasks, such as controlling the stock and the cash register."
  ),
];

/* const removalist = new JobExperience(
  'Aurion Removals Australia',
  'Removalist',
  'Oct 2023 - Jan 2024',
  'Australia',
  'Worked in Melbourne during the high season, not only moving goods, but also in charge of the administrative tasks such as inventories while also serving as the primary interface with the client.'
);



export const experienceArray = [
  removalist,

]; */
