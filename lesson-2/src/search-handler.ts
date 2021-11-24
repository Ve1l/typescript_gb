import {search} from './search.js';

export interface SearchFormData {
  checkInDate: Date,
  checkOutDate: Date,
  price: number,
}

export function searchHandler() {
  const form: HTMLFormElement = document.querySelector('#search-form')
  const formData = new FormData(form);

  const sfd: SearchFormData = {
    checkInDate: new Date(formData.getAll('checkin').toString()),
    checkOutDate: new Date(formData.getAll('checkout').toString()),
    price: +(formData.getAll('price')),
  }

  search(sfd)

}
