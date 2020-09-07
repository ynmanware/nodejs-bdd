# BDD - Orders Aggregate

contain BDD test cases for Order Aggregate 

Feature files are located in src/features
Steps are located in src/steps

#### Configuration 
```
src/kafka/config
src/odata/config
```

The test cases should ideally be triggered on each commit to candidate branch

### install 
```
npm i
```

### run test 
```
npm test
```

For more information on Cucumber.js refer 
https://github.com/cucumber/cucumber-js
https://github.com/cucumber/cucumber-js/tree/master/docs
https://cucumber.io/docs/gherkin/reference/
https://github.com/cucumber/cucumber-js/tree/master/docs/support_files

##### reading data from table 
https://www.codementor.io/cuketest/bdd-web-automation-05-create-data-driven-automation-script-with-doc-string-data-table-n7o69vv28

##### html report formatting 
https://www.npmjs.com/package/cucumber-html-reporter