import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();

console.log('+++> hi');
console.log(user);
console.log(company);

// new google.maps.Map(document.getElementById('map'), {
//   zoom: 12,
//   center: {
//     lat: 37.7749,
//     lng: -122.4194
//   }
// });

const map = new Map('map');
map.addUserMarker(user);
map.addCompanyMarker(company);