import { Injectable } from '@angular/core';

interface ShareObj {
  [id: string]: any;
}

@Injectable()
export class GlobaldataService {

  shareObj: ShareObj = {};

  constructor() { }

}
