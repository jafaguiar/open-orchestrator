import { Card } from "../types/card.type"

export class CardService {

    validateExpDate = async (card: Card): Promise<boolean> => {

        const currentDate: Date = new Date();
        const cardExpDate = new Date(card.expYear, card.expMonth);

        return currentDate < cardExpDate;

    }

    validateNumber = (card: Card): Boolean => {

        return this.validateLuhnsCheck(card.number);

    }

    // implement Luhns Checksum algorithm
    private validateLuhnsCheck = (number: Number): Boolean => {

        let numbers: number[] = Array.from(String(number), Number);

        let sumOfOddIndexesContent = 0;
        let sumOfDoubledEvenIndexesContent = 0;

        let shouldCheck = false; // to check every other number


        for (let i = numbers.length - 1; i >= 0; i--) {

            if (shouldCheck) {

                if (numbers[i] <= 4) { // in case doubling it produces a 1 digit result, double it and sum

                    sumOfDoubledEvenIndexesContent += numbers[i] * 2;

                } else {// in case doubling it produces a 2 digits result, double it and sum it's digits

                    let double = numbers[i] * 2;
                    let digits: number[] = Array.from(String(double), Number);

                    sumOfDoubledEvenIndexesContent += digits[0] + digits[1];

                }

                shouldCheck = false;

            } else {

                sumOfOddIndexesContent += numbers[i];
                shouldCheck = true;
            }

        }

        return (sumOfOddIndexesContent + sumOfDoubledEvenIndexesContent) % 10 == 0;

    }


}