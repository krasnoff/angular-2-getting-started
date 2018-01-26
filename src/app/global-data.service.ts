import { Injectable } from '@angular/core';

interface ShareObj {
  [id: string]: any;
}

@Injectable()
export class GlobalDataService {

  constructor() { }

  shareObj: ShareObj = {};

}
