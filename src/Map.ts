// import { User } from './User';
// import { Company } from './Company';

interface Mappable {
  location: {
    lat: number,
    lng: number;
  };
}

export class Map {
  private googleMap: google.maps.Map;
 
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 37.7749,
        lng: -122.4194
      }
    });
  }

  // addUserMarker(user: User) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }
  
  // addCompanyMarker(company: Company) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }

  addMarker(mappable: Mappable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}
