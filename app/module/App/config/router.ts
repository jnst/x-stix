import {Route} from 'stix';
import {RootController} from '../src/Controller';

/**
 * This config is where you configure the routes for your module.
 */
export const router = {
  routes: [
    // prettier-ignore
    Route.get('/', RootController, 'root'),
  ],
};
