import {AbstractActionController} from 'stix';

export class RootController extends AbstractActionController {
  public async root() {
    return this.okResponse({Hello: 'world!'});
  }
}
