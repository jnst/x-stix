import {Route, RouterConfigInterface} from 'stix';
import {MyController} from '../src/Controller/MyController';
import {RootController} from '../src/Controller/RootController';

export const router = {
  // prettier-ignore
  routes: [
    Route.get('/', RootController, 'root'),
    Route.get('/my', MyController, 'myAction'),
  ]
};
