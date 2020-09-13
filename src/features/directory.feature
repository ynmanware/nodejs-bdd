@directory
Feature: Directory Service
  In order manage directory
  As a developer
  I want to make sure CRUD operations through REST API works fine

  Scenario Outline: create, read, update, delete works as expected
    Given a contact <request>
    When I post contact, new contact is created in DB
    And I add <secondaryPhoneNumber> to the contact using <id>
    Then I read directory for <id>, I receive <contactResponse>
    Then I am able to delete the contact with <id>

    Examples:
      | request                                                                                      | id | secondaryPhoneNumber | contactResponse                                                                                                                       |
      | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890"} | 99 | '(914) 249-3519'     | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890","secondaryPhoneNumber": "(914) 249-3519"} |
