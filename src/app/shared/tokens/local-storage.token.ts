import { inject, InjectionToken } from '@angular/core';

import { WINDOW } from './index';

export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage', {
  factory: () => inject(WINDOW).localStorage,
});