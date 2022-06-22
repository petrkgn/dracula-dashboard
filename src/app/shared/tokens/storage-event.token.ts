import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from './index';
import {fromEvent, Observable} from 'rxjs';

export const STORAGE_EVENT = new InjectionToken<Observable<StorageEvent>>(
    'All changes to Storage',
    {
        factory: () => fromEvent<StorageEvent>(inject(WINDOW), 'storage'),
    },
);