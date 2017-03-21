Selenium JS test for Google Calculator
+++
date        = "2017-03-21T11:27:27-04:00"
title       = "Selenium JS test for Google Calculator"
description = "This test can easy send expressions in Google Calculator using Selenium Webdriver"
tags        = [ "Google Calculator", "Node JS", "selenium" ]
topics      = [ "Automation", "Test" ]
project_url = "https://github.com/spf13/nitro"
+++

# Overview

Quick and easy automation test to verify Google Calculators work for Windows 7.

# External dependencies

You need
* Node JS (v6.10.0)
* Node JS modules: Selenium Webdriver (v2.0), Selenium Chrome Driver (v2.0)
* Windows 7 on your machine

# Usage

Just change arguments in the function called mytest(driver, expression, expected result) for your test purposes.
Result of expression compares with expected result and program returns in console "PASS" (result and expected result are same) or "FAIL" (if they are different). 

Example: mytest(driver, '2 + 5', '7') means: in Google Calculator sends expression 2 + 5 and after that Google Calculator will calculate the amount. 
Then, the test will compare amount with expected 7 and returns "PASS" in console.


