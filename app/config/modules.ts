import {ModuleManagerConfigInterface} from 'stix';
import GeneratorModule from 'stix-generator';
import HealthModule from '../module/Health';

// prettier-ignore
export const modules: ModuleManagerConfigInterface = [
  HealthModule,
  GeneratorModule,
];
