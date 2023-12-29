"Tee kaavio tilanteesta, jossa käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa eli muistiinpanojen Single Page App-versioon"

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br/>{content: "single page app does not reload the whole page", date: "2023-12-29T13:43:09.031Z"}
    activate server
    server-->>browser: HTTP 201 created
    deactivate server

    Note right of browser: The browser stays on current page and no additional HTTP requests are executed.

```