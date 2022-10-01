import { expect } from 'chai'
import { Card } from '../src/types/card.type';
import { CardService } from '../src/services/card.service'

describe('Is card date valid',

    () => {

        it('validateCardExpDate', async () => {

            let card: Card = {
                number: 4111111111111111,
                expMonth: 10,
                expYear: 2023,
                cvv: 123
            }

            let cardService = new CardService();
            let isCardValid = await cardService.validateExpDate(card);

            expect(isCardValid).to.equal(true);

        });

    }

);

describe('Is card number valid',

    () => {

        it('validateNumber', async () => {

            let card: Card = {
                number: 3845952741978790,
                expMonth: 10,
                expYear: 2023,
                cvv: 123
            }

            let cardService = new CardService();
            let isCardValid = cardService.validateNumber(card);

            expect(isCardValid).to.equal(true);

        });

    }

);