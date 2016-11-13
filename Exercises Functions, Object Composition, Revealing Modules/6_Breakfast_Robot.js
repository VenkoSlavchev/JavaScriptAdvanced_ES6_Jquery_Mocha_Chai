'use strict';
function solve() {
    let robot = (function () {
        let ingredients = new Map();
        ingredients.set('protein', 0);
        ingredients.set('carbohydrate', 0);
        ingredients.set('fat', 0);
        ingredients.set('flavour', 0);
        let oldQuantity = 0;

        function restock(ingredient, quantity) {
            oldQuantity = ingredients.get(ingredient);
            oldQuantity += Number(quantity);
            ingredients.set(ingredient, oldQuantity);
            return 'Success';
        }

        function check(name, quantity) {
            let carbsValue = ingredients.get('carbohydrate'),
                flavourValue = ingredients.get('flavour'),
                proteinValue = ingredients.get('protein'),
                fatValue = ingredients.get('fat');
            switch (name) {
                case 'apple' :
                    if ((carbsValue - (1 * quantity)) >= 0 && (flavourValue - (2 * quantity)) >= 0) {
                        ingredients.set('carbohydrate', carbsValue - (1 * quantity));
                        ingredients.set('flavour', flavourValue - (2 * quantity));
                        return 'Success';
                    } else if ((carbsValue - (1 * quantity)) < 0) {
                        return `Error: not enough carbohydrate in stock`;
                    } else if ((flavourValue - (2 * quantity)) < 0) {
                        return `Error: not enough flavour in stock`;
                    }
                    break;
                case 'coke' :
                    if ((carbsValue - (10 * quantity)) >= 0 && (flavourValue - (20 * quantity)) >= 0) {
                        ingredients.set('carbohydrate', carbsValue - (10 * quantity));
                        ingredients.set('flavour', ingredients.get('flavour') - (20 * quantity));
                        return 'Success';
                    } else if ((carbsValue - (10 * quantity)) < 0) {
                        return `Error: not enough carbohydrate in stock`;
                    } else if ((flavourValue - (20 * quantity)) < 0) {
                        return `Error: not enough flavour in stock`;
                    }
                    break;
                case 'burger' :
                    if ((carbsValue - (5 * quantity)) >= 0 && (flavourValue - (3 * quantity)) >= 0
                        && (fatValue - (7 * quantity)) >= 0) {
                        ingredients.set('carbohydrate', carbsValue - (5 * quantity));
                        ingredients.set('flavour', flavourValue - (3 * quantity));
                        ingredients.set('fat', fatValue - (7 * quantity));
                        return 'Success';
                    } else if ((carbsValue - (5 * quantity)) < 0) {
                        return `Error: not enough carbohydrate in stock`;
                    } else if ((fatValue - (7 * quantity)) < 0) {
                        return `Error: not enough fat in stock`;
                    } else if ((flavourValue - (3 * quantity)) < 0) {
                        return `Error: not enough flavour in stock`;
                    }
                    break;
                case 'omlet' :
                    if ((proteinValue - (5 * quantity)) >= 0 && (flavourValue - (1 * quantity)) >= 0
                        && (fatValue - (1 * quantity)) >= 0) {
                        ingredients.set('protein', proteinValue - (5 * quantity));
                        ingredients.set('flavour', flavourValue - (1 * quantity));
                        ingredients.set('fat', fatValue - (1 * quantity));
                        return 'Success';
                    } else if ((proteinValue - (5 * quantity)) < 0) {
                        return `Error: not enough protein in stock`;
                    } else if ((fatValue - (1 * quantity)) < 0) {
                        return `Error: not enough fat in stock`;
                    } else if ((flavourValue - (1 * quantity)) < 0) {
                        return `Error: not enough flavour in stock`;
                    }
                    break;
                case 'cheverme' :
                    if ((carbsValue - (10 * quantity)) >= 0 && (flavourValue - (10 * quantity)) >= 0
                        && (fatValue - (10 * quantity)) >= 0 && (proteinValue - (10 * quantity)) >= 0) {
                        ingredients.set('carbohydrate', carbsValue - (10 * quantity));
                        ingredients.set('flavour', flavourValue - (10 * quantity));
                        ingredients.set('fat', fatValue - (10 * quantity));
                        ingredients.set('protein', proteinValue - (10 * quantity));
                        return 'Success';
                    } else if ((proteinValue - (10 * quantity)) < 0) {
                        return `Error: not enough protein in stock`;
                    } else if ((carbsValue - (10 * quantity)) < 0) {
                        return `Error: not enough carbohydrate in stock`;
                    } else if ((fatValue - (10 * quantity)) < 0) {
                        return `Error: not enough fat in stock`;
                    } else if ((flavourValue - (10 * quantity)) < 0) {
                        return `Error: not enough flavour in stock`;
                    }
                    break;
            }
        }


        function report() {
            let result = '';
            Array.from(ingredients).map(x => {
                result += `${x[0]}=${x[1]} `
            });
            return result;
        }

        return {
            restock,
            check,
            report
        }
    })();


    let arrayInput = Array.from(arguments);
    for (let i = 0; i < arrayInput.length; i++) {
        let command = arrayInput[i].split(' ')[0],
            stockName = arrayInput[i].split(' ')[1],
            stockQuantity = arrayInput[i].split(' ')[2];
        if (command === 'restock') {
            robot.restock(stockName, stockQuantity);
        } else if (command === 'report') {
            robot.report();
        } else {
            robot.check(stockName, stockQuantity)
        }
    }

}

solve(
    'prepare cheverme 1',
    'restock protein 10',
    'prepare cheverme 1',
    'restock carbohydrate 10',
    'prepare cheverme 1',
    'restock fat 10',
    'prepare cheverme 1',
    'restock flavour 10',
    'prepare cheverme 1',
    'report'
);
