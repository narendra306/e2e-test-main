Feature: Demo

@Demo
Scenario Outline: Data driven framework

Given We open Google web page
When we search with <keyword>
Then we click on first result
Then We should see this url <expUrl>

Examples:
    | TC number | keyword | expUrl |
    | TC01  | webdriver io  | https://webdriver.io/  |
