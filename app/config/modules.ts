import {ModuleManagerConfigInterface} from 'stix';
import GeneratorModule from 'stix-generator';
import HealthModule from '../module/Health';
import AppModule from '../module/App';

// prettier-ignore
export const modules: ModuleManagerConfigInterface = [
  HealthModule,
  AppModule,
  GeneratorModule,
];
