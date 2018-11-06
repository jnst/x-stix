import path from 'path';
import {ControllerManagerConfigType} from 'stix';

export const controller: ControllerManagerConfigType = {
  locations: [path.resolve(__dirname, '..', 'src', 'Controller')],
};
