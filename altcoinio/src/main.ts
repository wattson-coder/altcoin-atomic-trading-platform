import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/combineLatest";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/first";
import "rxjs/add/operator/filter";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/delay";
import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {environment} from "./environments/environment";
import {StartModule} from "./app/start/start.module";

const t0 = performance.now();
console.log("START", t0);

if (environment.production) {
  enableProdMode();
}

if (!environment.console) {
  window.console.log = function () {
  };
}

platformBrowserDynamic().bootstrapModule(StartModule)
  .then(() => {
    const t1 = performance.now();
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds. at ", performance.now());

    if (environment.production && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/ngsw-worker.js");
    }
  }).catch(err => console.log(err));
