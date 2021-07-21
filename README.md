# The Flaky Test Challenge Solution

*Out of the 3 main types of flaky tests that may occur during TDD with cypress, this test had a DOM-related flake which led to inconsistency of how elements were rendered in the DOM. Due to chaining, only the last query (.should('contains','...')) was being retried before timeout hence not finding the 'li' selector from get as it was only executed once. Using contains query with a selector and text content solves the problem as both are queried for before timeout.*

*In addition the number of retries for the test is increased so that there are two attempts if the first fails*

## Author

👤 **Elbie Moonga**

- GitHub: [@Elbie-Em](https://github.com/Elbie-em)
- Twitter: [ElbieEm](https://twitter.com/ElbieEm)
- LinkedIn: [elbie-moonga](https://www.linkedin.com/in/elbiemoonga/) 
