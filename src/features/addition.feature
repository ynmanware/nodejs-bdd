@Addition-2
Feature: Addition

  @scenario-21
  Scenario Outline: addition first + second
    Given I start with <first>
    When I add <second>
    Then I end up with <result>

    Examples:
      | result | first | second |
      | 12     | 5     | 7      |
      | 25     | 10    | 15     |
      | 35     | 10    | 25     |