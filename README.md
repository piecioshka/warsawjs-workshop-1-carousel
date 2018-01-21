# warsawjs-workshop-1-carousel

> WarsawJS Workshop #1: Carousel

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Krok po kroku

### Projekt nr. 1 [ [demo](https://piecioshka.github.io/warsawjs-workshop-1-carousel/v1) ]

<details>
    <summary>Treść zadania nr. 1</summary>

1. ...

</details>

### Projekt nr. 2 [ [demo](https://piecioshka.github.io/warsawjs-workshop-1-carousel/v2) ]

<details>
    <summary>Treść zadania nr. 2</summary>

1. DevTools. Przeanalizować stworzone przez siebie strony internetowe.

2. DevTools. Przeanalizować już istniejące strony internetowe.

3. Stworzyć plik HTML z polskimi znakami i uruchomić bez zmiany
    domyślnego kodowania.

    > Rozwiązanie: polskie znaki nie będą dobrze się prezentować

4. Zdefiniować kodowanie UTF-8

    > Rozwiązanie: `<meta charset="utf-8"/>`

5. Zweryfikować plik HTML z wykorzystaniem walidatora: https://validator.w3.org/

    > Rozwiązanie: dobrą praktyką jest aby pliki były zgodne z walidatorem

6. Osadzić plik CSS i dodać jedną prostą regułę.

7. Osadzić plik JavaScript i wpisać do niego użycie funkcji `alert("text")`.

8. Stworzyć zmienną.

9. Wyświetlić zmienną za pomocą `console.log`.

10. Stworzyć kilka zmiennych i wstawić między ich definicję `debugger 
    statement` do zatrzymania interpretera JavaScript.

11. Podejrzeć i przeanalizować obecny stan aplikacji.

12. Stwórz zmienną globalną.

    > Rozwiązanie:
    
    ```javascript
    window.foo = 2;
    ```

13. Porównać zmienną lokalną stworzoną w kontekście globalnym oraz zmienną 
    globalną zdefiniowaną jako właściwość obiektu `window`.

14. Stworzyć listę obrazków wykorzystując `h1, ul, li, img`. 
    Wykorzystać serwis https://unsplash.it/ do pobierania obrazków. 

15. Zresetować domyślne style dla `body, ul`.

16. Zdefiniować wszystkim elementom listy pełną przezroczystość (wartość 
    równa 0).

17. Stworzyć klasę `.active`, która będzie ustawiała elementowi 
    przezroczystość na wartość domyślną (równą 1).
    
18. Dodać pierwszemu elementowi klasę `active` w HTMLu.

19. Stworzyć funkcję, która będzie uruchamia całą mechanikę, np. `setup`.

20. Nasłuchiwać na załadowanie DOMa (event: DOMContentLoaded).

21. Uruchomić funkcję `setup`, kiedy DOM już będzie załadowany.

22. Pobrać referencję to wszystkich elementów list i zapisać ją do zmiennej, 
    którą później wyświetlić. Wszystko to zrealizować w funkcji `setup`.

    > Rozwiązanie:

    ```javascript
    function setup() {
        let $list = document.querySelector('ul');
        console.log($list);
    }
    ```
    
23. Przetestować, co się będzie działo, kiedy nie poczekamy na załadowanie 
    DOMa, a będziemy chcieli wyświetlić elementy listy.

24. Dodać klasę CSS do drugiego elementu listy.

    > Rozwiązanie:

    ```javascript
    let $items = document.querySelector('.element');
    $items[1].classList.add('active');
    ```

25. Wyeliminować błąd pokazania dwóch obrazków jednocześnie poprzez 
    ustawienie elementów listy jeden na drugim za pomocą CSS `position`.

26. Stworzyć funkcję np. `displayNextPicture`, która będzie zawierała obecną 
    zawartość funkcji `setup`. Funkcja `setup` powinna mieć tylko jedną 
    linijkę którą będzie uruchomienie funkcji `displayNextPicture`.
    
27. Pobrać aktualny element z listy wykorzystując zmienną `$list`.

28. Pobrać kolejny element aktywnego za pomocą właściwości `nextElementSibling`.

29. Dodać warunek, że jeśli nie będzie następnego elementu to należy 
    wykorzystać pierwszy element listy. Do tego celu należy wykorzystać 
    właściwość `firstElementChild` na obiekcie listy.
    
30. Usunąć klasę `active` z aktywnego elementu listy za pomocą API `classList`

31. Dodać klasę `active` na kolejnym elemencie.

32. Uruchomić kilka razy funkcję `displayNextPicture` testując poprawność 
    działania.

33. Dopisać w funkcji `setup` interval, który będzie co 3 sekundy uruchamiał 
    funkcję `displayNextPicture`.
    
34. Zdefiniować stałą będącą liczbą milisekund.

---

35. Stworzyć w HTMLu dwa elementy będące przyciskami. Nadać im odpowiednie 
    identyfikatory.

36. Pobrać referencję do tych obiektów w DOMie. Zrealizować to w funkcji 
    `setup` ze względu na to, że jest ona uruchomiona gdy DOM jest już 
    załadowany.
    
37. Stworzyć dwie funkcje, które będą uruchamiane po kliknięciu w wcześniej 
    stworzone przyciski. Propozycję nazw: `onClickLeftHandler` oraz 
    `onClickRightHandler`.
    
38. Zapisać się na event kliknięcia w oba przyciski.

39. Przetestować działanie dodając w funkcjach uruchomienie funkcji
    `console.log` z odpowiednimi argumentami.
    
40. Zdefiniować zmienną, która będzie zawierała referencję do zegara interval.
    Zmienna musi być współdzielona między funkcjami `setup`, 
    `onClickLeftHandler` oraz `onClickRightHandler`.
    
41. W funkcjach, które uruchamiają się po kliknięciu w przyciski strzałek 
    należy wyczyścić interval za pomocą funkcji `clearInterval`.
    
42. Dodać uruchomienie funkcji `displayNextPicture` w funkcji 
    `onClickRightHandler`, tak aby można było pokazywać następne zdjęcie 
    klikając w przycisk strzałki w prawo.
    
43. Skopiować funkcję `displayNextPicture` i nazwać nową funkcję 
    `displayPrevPicture`. Celem tej funkcji jest pokazanie poprzedniego 
    zdjęcia. Tak, aby zasadne było klikanie w przycisk strzałki w lewo.
    
44. Zmienić w funkcji `displayPrevPicture` użycie właściwości 
    `nextElementSibling` na rzecz `previousElementSibling` oraz 
    `firstElementChild` na rzecz `lastElementChild`.
    
45. Uruchomić funkcję `displayPrevPicture` w handlerze `onClickLeftHandler`.

---

46. Stworzyć funkcję, która będzie się uruchamiała, gdy użytkownik naciśnie 
    dowolny znak na klawiaturze. Proponowana nazwa funkcji to 
    `onKeydownHandler`.

47. Nasłuchiwać w funkcji `setup` na naciśnięcie (`keydown`) na klawiaturze 
    dowolnego przycisku. Wykorzystać funkcję `onKeydownHandler`.

48. Funkcja `onKeydownHandler` będzie korzystała z parametrów, które 
    otrzymuje. Zarejestrować parametr funkcji jako `evt`.
 
49. Zapisać w zmiennej lokalnej kod naciśniętego klawisza. Wykorzystać 
    właściwość `evt.keyCode`.

50. Wykorzystać instrukcję `switch`, aby rozpatrzeć kilka przypadków wartości
    zmiennej `keyCode`.

51. Stworzyć przypadek (`case`) dla lewej strzałki (kod klawisza 37). 
    Zdefiniować stałą, która będzie przechowywać tą "magiczną cyfrę". 
    Proponowana nazwa stałej to `LEFT_ARROW`.

52. Uruchomić funkcję `onClickLeftHandler`, kiedy wystąpi przypadek 
    naciśnięcie strzałki w lewo.

51. Stworzyć przypadek (`case`) dla prawej strzałki (kod klawisza 39). 
    Zdefiniować stałą, która będzie przechowywać tą "magiczną cyfrę". 
    Proponowana nazwa stałej to `RIGHT_ARROW`.

52. Uruchomić funkcję `onClickRightHandler`, kiedy wystąpi przypadek 
    naciśnięcie strzałki w prawo.

---

53. Stworzyć kontener pod zdjęciami, w którym będą wyświetlone kropki do 
    przełączania na konkretne zdjęcie.

54. Rozwiązać ewentualny problem, że zdjęcia zakrywają nowo stworzony 
    kontener. Przykładowym rozwiązaniem, może być określenie szerokości i 
    wysokości dla listy (kontener `ul`).

55. Stworzyć funkcję, która będzie budowała listę kropek. Liczba kropek 
    będzie równa liczbie obrazków. Proponowana nazwa to `displayDots`.

56. Funkcja `displayDots` jest uruchomiona w funkcji `setup`.

57. Pobrać referencję do kontenera na kropki w funkcji `displayDots`.

58. Stworzyć zmienną przechowującą `DocumentFragment`, do którego będą 
    dodawana kolejne kropki. Gdy `DocumentFragment` będzie zawierał 
    wszystkie kropki zostanie wyrenderowany w kontenerze w DOMie.

59. Pobrać referencję do listy elementów z obrazkami.

60. Pobrać listę elementów-dzieci za pomocą właściwości `children`.

61. Iterować pętlą `for..of` po liście uruchamiając funkcję anonimową.

62. Funkcja anonimowa będzie tworzy element "input" typu radio.

63. Aby wyeliminować problem brakiem kasowania poprzedniego wyboru kropki 
    należy zdefiniować inputom atrybut name z tą samą wartością. Może to być 
    dowolny string, lub aktualny czas (zapisany w zmiennej).

64. Tak stworzony element typu input dodać do `DocumentFragment`.

65. Poza pętlą dodać `DocumentFragment` do kontenera stworzonego na potrzeby 
    wyświetlenia kropek.
    
---

66. Stworzyć funkcję, która będzie nasłuchiwać na kliknięcie w kropkę. 
    Proponowana nazwa to `setupDotsClick`. Funkcję należy uruchomić w funkcji
    `setup`, zaraz po uruchomieniu funkcji `displayDots`.

67. Pobrać referencję do kontenera z kropkami.

68. Nasłuchiwać na kliknięcie w ten kontener.

69. Zarejestrować parametr `evt` w handlerze eventu kliknięcia w kontener.

70. Stworzyć lokalną zmienną `$item`, która będzie przechowywać właściwość 
    `evt.target`.

71. Stworzyć lokalną zmienną `itemName`, która będzie przechowywać nazwę 
    klikniętego tagu (wykorzystać właściwość `$item.nodeName`). Ważne jest, 
    aby zmniejszyć wielkość liter za pomocą funkcji na stringu `toLowerCase`.

72. Sprawdzić, czy nazwa klikniętego elementu nie równa się `input`. Gdy 
    warunek zostanie spełniony to przerwać działanie funkcji za pmocą 
    operatora `return`.

73. W funkcji `displayDots` przed pętlą `for..of` zdefiniować zmienną `index`, 
    która będzie kolejną cyfrą od `0` oznaczającą indeks kolejnego elementu 
    kropki.

74. W pętli `for..of` do obiektu `$input.dataset` dopisać właściwość `index` 
    przypisując jej wartość zmiennej `index`.
    
    Obiekt `dataset` jest agregatem wszystkich atrybutów z prefiksem `data-`.

75. Na samym końcu pętli zwiększyć zmienną `index` za pomocą "inkrementacji 
    postfiksowej", czyli `index++`;

76. W funkcji `setupDotsClick` w handlerze kliknięcia, po warunku 
    weryfikującym, że użytkownik kliknął w element typu `input`, pobrać 
    właściwość `index` z obiektu `$item.dataset` i zapisać do zmiennej `index`.

77. Ze względu na to, że wartości atrybutów elementów HTML zawsze są łańcuchami
    znaków, to trzeba skonwertować wartość na liczbę za pomocą konstruktora 
    `Number`.

78. Przerwać działający interval za pomocą funkcji `clearInterval`.

79. Stworzyć funkcję, która będzie pokazywała obrazek ze zdefiniowanym w 
    parametrze indeksie. Proponowana nazwa to `displayPictureByIndex`.

80. Funkcja `displayPictureByIndex` będzie oczekiwać parametru będącego 
    indeksem, więc zarejestrować taki parametr. Proponowana nazwa to 
    `pictureIndex`.

81. W funkcji `displayPictureByIndex` stworzyć referencję do listy elementów 
    z obrazkami.

82. Wyszukać aktywnego elementu w liście i zapisać w zmiennej. Proponowana 
    nazwa to `$active`.

83. Pobrać docelowy element wykorzystując właściwość `children` i nawiasy 
    kwadratowe i zapisać w zmiennej. Proponowana nazwa to `$next`.

84. Usunąć klasę `active` z aktywnego elementu za pomocą API `classList`.

85. Dodać klasę `active` do wybranego elementu.

---

86. Stworzyć funkcję `markDot`, która będzie przechowywała referencje do:
    - listy kropek
    - listy elementów listy obrazków

87. Za pomocą pętli `forEach` iterować po liście elementów listy obrazków.

88. Zarejestrować dwa parametry w handlerze pętli. Pierwszy z nich będzie 
    przechowywał referencję do elementu w DOMie. Drugi będzie przechowywał 
    indeks.

89. W ciele handlera sprawdzić za pomocą API `classList` czy iterowany 
    element posiada klasę `active`.

90. Jeśli posiada to pobrać kropkę za pomocą składni nawiasów kwadratowych i 
    ustawienie właściwość `checked` na `true`.

91. Funkcję `markDot` uruchomić w ostatnich linijkach następujących funkcji: 
    - `setup`
    - `displayNextPicture`
    - `displayPrevPicture`

---

## Pomysły

1. Wygenerować całą strukturę HTML za pomocą JavaScript, przekazując 
    listę zdjęć w formacie tablicy.
    
2. Stworzenie multi-platformowej biblioteki JavaScript

3. Wykorzystania komponentu kilka razy na jednej stronie

</details>


## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
