import stix, {Application, ApplicationModes, ServerService} from 'stix';
import * as config from './config';

(async () => {
  const mode: ApplicationModes = process.env.STIX_APPLICATION_MODE as ApplicationModes;
  const app: Application = await stix(config).launch(mode);

  if (app.getMode() === ApplicationModes.Server && !app.isProduction()) {
    const url = app
      .getServiceManager()
      .get(ServerService)
      .getURL();

    console.log(`Server running on ${url}`);
  }
})();
