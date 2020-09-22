@directory-service
Feature: Directory Service
  In order manage directory
  As a developer
  I want to make sure CRUD operations through REST API works fine

  Scenario Outline: create a contact
    Given A contact <request>
    When I send POST request to /directory
    Then I get response code 201

    Examples:
      | request                                                                                               |
      | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890"}          |
      | {"id":7,"name":"Ian Weimann DVM","email":"Euna_Bergstrom@hotmail.com","phoneNumber":"(297) 962-1879"} |

  Scenario Outline: modify contact
    Given The contact with <id> exist
    When I send PATCH request with a <secondaryPhoneNumber> to /directory
    Then I get response code 200

    Examples:
      | id | secondaryPhoneNumber                       |
      | 99 | {"secondaryPhoneNumber": "(914) 249-3519"} |
      | 7  | {"secondaryPhoneNumber": "788.323.7782"}   |

  Scenario Outline: get contact
    Given The contact with <id> exist
    When I send GET request to /directory
    Then I receive <response>

    Examples:
      | id | response                                                                                                                                      |
      | 99 | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890","secondaryPhoneNumber": "(914) 249-3519"}         |
      | 7  | {"id":7,"name":"Ian Weimann DVM","email":"Euna_Bergstrom@hotmail.com","phoneNumber":"(297) 962-1879", "secondaryPhoneNumber": "788.323.7782"} |

  Scenario Outline: delete contact
    Given The contact with <id> exist
    When I send DELETE request to /directory
    Then I get response code 200

    Examples:
      | id |
      | 99 |
      | 7  |
