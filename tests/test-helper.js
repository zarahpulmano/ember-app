import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';

import startApp from "./helpers/start-app";
startApp();


setResolver(resolver);
