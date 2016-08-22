
import {assert, expect, use} from 'chai';
use(require("chai-as-promised"));

import Greeter from '../src/Greeter';

describe('Greeter', () => {

    describe('greeting', () => {

        it('includes name in greeting', () => {
            var greeter = new Greeter();
            expect(greeter.greet("Mike")).to.have.string("Mike");
        });

    });

    describe('asynchronous greeting', () => {

        it('includes name in greeting', () => {
            var greeter = new Greeter();
            return expect(greeter.greetAsync("Mike")).to.eventually.have.string("Mike");
        });

        it('mentions it is asynchronous', () => {
            var greeter = new Greeter();
            return expect(greeter.greetAsync("Mike")).to.eventually.have.string("asynchronous");
        });

    });

});
