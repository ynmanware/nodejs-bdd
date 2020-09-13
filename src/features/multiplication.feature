Feature: Multiplication
  in order to do math as a developer ...
  @scenario-21
  Scenario Outline: addition first + second
    Given I start with <first>
    When I add <second>
    Then I end up with <result>

    Examples:
      | result | first | second |
      | 35     | 5     | 7      |
      | 150     | 10    | 15     |
      | 250     | 10    | 25     |