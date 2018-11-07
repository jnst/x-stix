import {AbstractActionController, ContextInterface, Response} from 'stix';

/**
 * This is a controller. A controller holds the actions that run when a route matches.
 *
 * The name of the controller can be anything and it's a coincidence that it has the same name as the module.
 */
export class RootController extends AbstractActionController {
  public async root(ctx: ContextInterface): Promise<Response> {
    return this.okResponse('Hello, World');
  }
}
