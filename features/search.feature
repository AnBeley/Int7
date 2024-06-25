Feature: The first link text Идёмвкино
    Scenario: I open a main page
        Given I open a main "/index.php" page
        Then I see "Идёмвкино"
      
    Scenario: I Buy tickets
        Given I open a main "/index.php" page
        Then I see "Идёмвкино"
        Given I open a main "/hall.php" page
        Then I see "Идёмвкино"
        When click tickets 
        Then I see tickets "Вы выбрали билеты:"

    Scenario: I No Buy tickets
        Given I open a main "/index.php" page
        Then I see "Идёмвкино"
        Given I open a main "/hall.php" page
        Then I see "Идёмвкино"
        When no click tickets 
        Then I see tickets "Унесенные ветром."
