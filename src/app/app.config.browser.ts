import 'hammerjs';

import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app.config';
import { provideHammer } from '@st/core';

const browserConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideHammer()],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
