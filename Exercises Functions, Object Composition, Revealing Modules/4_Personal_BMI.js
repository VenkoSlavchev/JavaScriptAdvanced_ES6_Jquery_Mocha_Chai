'use strict';
function solve(name, age, weight, height) {
    let profile = {
            name,
            personalInfo: {
                age,
                weight,
                height,
            }
        },
        bmi = Math.round(weight / (Math.pow(height / 100, 2)));
    profile.BMI = bmi;
    if (bmi < 18.5) {
        profile.status = 'underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
        profile.status = 'normal'
    } else if (bmi >= 25 && bmi < 30) {
        profile.status = 'overweight'
    } else {
        profile.status = 'obese';
        profile.recommendation = 'admission required'
    }

    return profile
}

//Test the code
// var chart = solve('Honey Boo Boo', 9, 57, 137);
//console.log(chart);