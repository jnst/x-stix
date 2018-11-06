import {AbstractActionController} from 'stix';

export class MyController extends AbstractActionController {
  public async myAction() {
    return this.okResponse({Hello: 'world!'});
  }
}
