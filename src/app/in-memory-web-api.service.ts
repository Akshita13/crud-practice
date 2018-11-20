import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './order.model';


export class InMemoryWebApiService implements InMemoryDbService {

  createDb():{} {
    const order :Order[]= [{ id: 1, itemName: 'watch', price: 1400, address: 'adajan,surat', mobileNumber: 9898954000 },

    { id: 2, itemName: 'clothes', price: 2000, address: 'godhdod,surat', mobileNumber: 9067543246 },

    ];

    return { order };
  }


}
