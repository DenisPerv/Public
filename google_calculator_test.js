var path = require('chromedriver').path
var assert = require('assert')

const {Builder, By, until} = require('selenium-webdriver')
// IDs of the search, result fields and search button ID
const SEARCH_FIELD_ID = 'lst-ib'
const SEARCH_BUTTON_ID = '_fZl'
const RESULT_FIELD_ID = 'cwos'

var driver = new Builder().forBrowser('chrome').build()

driver.onetest = function(expected, got) {
// This function compares expected and actual results
    var passed = expected === got

    console.log('Expecting ' + expected +
                ', Got ' + got + ' [' +
                (passed ? 'PASS' : 'FAIL') +
                ']')
    if (!passed) {

    }
}

function mytest(driver, expression, expected) {
    driver.get('http://www.google.com/ncr')
    // Navigate to Google Calculator by sending expression in Google Search (search by Google Calculator is not working)
    driver.wait(until.elementLocated(By.id(SEARCH_FIELD_ID)), 1000)
    // Clearing of the field
    driver.findElement(By.id(SEARCH_FIELD_ID)).clear()
    // Sending an expression
    driver.findElement(By.id(SEARCH_FIELD_ID)).sendKeys(expression)
    // Click on search button
    driver.findElement(By.id(SEARCH_BUTTON_ID)).click()
    // Getting a result
    driver.wait(until.elementLocated(By.id(RESULT_FIELD_ID)), 2000)
    driver.findElement(By.id(RESULT_FIELD_ID)).getText().then(function(q) {

        driver.onetest(expected, q)

    })
}



// Examples of tests(you can change expression in brachets for your own test)
// Second argument is an expression, that you want to test and third argument is expected result.
// Positive tests
mytest(driver, '2 + 5', '7')
mytest(driver, '5 - 1', '4')
mytest(driver, '6 / 2', '3')

// Negative test
mytest(driver, '5 * 8', '39')


