import {read} from './local-storage-service';

export function getFavoritesAmount() {
  const amount: unknown = +(read('favoritesAmount'))
  if (typeof amount === 'number') {
    console.log('amount', amount)
  }
}
