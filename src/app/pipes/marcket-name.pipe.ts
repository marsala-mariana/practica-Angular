import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marcketName',
})
export class MarcketNamePipe implements PipeTransform {
  marckets = [
    { id: 'amazon_price', name: 'Amazon' },
    { id: 'cardmarket_price', name: 'Cardmarket' },
    { id: 'coolstuffinc_price', name: 'Coolstuff Inc' },
    { id: 'ebay_price', name: 'Ebay' },
    { id: 'tcgplayer_price', name: 'TCG Player' },
  ];

  transform(value: string): string {
    const market = this.marckets.find((m) => m.id === value);

    return market?.name || '';
  }
}
