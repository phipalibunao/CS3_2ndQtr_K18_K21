# CS3 3rd Qtr Update
Project Proposal of Phipa Libunao and Tomas Macalintal

Team: WDProjPotassiumLibunaoMacalintal

# Fractured Night 🌚

## Titles and Logo
- **Main Title:** Fractured Night  
- **Tagline:** One Event. Four stories. Broken pieces of the truth.  
- **Logo/Favicon:**  

![Fractured Night Logo](https://github.com/phipalibunao/CS3_2ndQtr_K18_K21/blob/main/assets/cspairproj_favicon2.png?raw=true)

---

## Website Overview
**Fractured Night** is an interactive website that shows the events of a bridge collapse through different perspectives.  
Players explore the event as four people: a journalist, an engineer, a supervisor, and a mayor.

Each act presents clues and mini-games that reveal how each person acted and what information is known.  
The public story may be different from the real story, so players must piece together clues to better understand what truly happened.

> Can you find the full story or only the version that people believe?

---

## New Feature for 3rd Quarter: HTML Form Integration

To incorporate HTML forms into the website, **Fractured Night** will include a simple **Player Information Form** that personalizes the user’s experience and supports the theme of perception and trust in information.

The form will collect basic user input and save it locally on the user’s computer using **localStorage**.  
The saved data will be reused across multiple webpages of the website.

---

## New Webpages Added

### 1. Player Information Page (Form Page)
**Title:** Before the Story  

**Purpose:**  
This page appears before the game begins. Players enter basic information that will be referenced throughout the website.

**Form Elements Used:**  
- Text input: Player name or alias  
- Dropdown menu: How the player usually views news  
  - Always trust it  
  - Sometimes question it  
  - Rarely trust it  
- Submit button: “Begin Story”

**Data Handling:**  
The input data is saved using **localStorage**.

---

### 2. Welcome Page (Uses Form Data)
**Title:** Welcome  

**Purpose:**  
This page retrieves the saved form data and greets the player using their name.  
It also displays the player’s selected response about trusting news.

---

### 3. Reflection Page (Uses Form Data Again)
**Title:** Your Experience  

**Purpose:**  
This page appears near the end of the website.  
It reuses the saved data to reflect on the player’s initial mindset compared to what they learned throughout the story.

---

## Website Outline

---

### 1. Home / The Beginning
- Title screen with “Start” button  
- Description of the website  
- Short introduction explaining that a bridge collapsed in the city  
- Navigation bar: **Home | Act 1 | Act 2 | Act 3 | Act 4 | About Us**  
- Explains that the public story may not be the full truth  

---

### Public Story Summary
The bridge collapses one night. A journalist discovers a photo of a shadowy figure on the bridge and reports it.  
The journalist also finds a memo telling the engineer not to fix the bridge.

The mayor blames the engineer and supervisor, claiming sabotage.  
The public praises the mayor, while the engineer and supervisor are arrested.

> The website lets players explore each character’s perspective to understand how the official story is formed from partial information.

---

### 2. Act 1: The Journalist
**Title:** Headline  
**Perspective:** The Journalist  
**Mini-Game:** Spot the Detail / Memory Matching  

- Shows how selected evidence shapes public opinion  
- Highlights how exciting stories can overshadow probable truths  

---

### 3. Act 2: The Engineer
**Title:** Silent Night  
**Perspective:** The Engineer  
**Mini-Game:** Wires  

- Demonstrates how actions can be misunderstood  
- Shows how partial evidence can frame someone as guilty  

---

### 4. Act 3: The Supervisor
**Title:** Orders and Conflict  
**Perspective:** The Supervisor  
**Mini-Game:** Scheduling / Organizing  

- Shows decision-making under limited resources  
- Highlights how intent can be misinterpreted  

---

### 5. Act 4: The Mayor
**Title:** Public Duty  
**Perspective:** The Mayor  
**Mini-Game:** Budget Allocation  

- Shows how public image affects decision-making  
- Reveals restricted maintenance funding  

---

### True Story Summary
The bridge was already weak.  
The engineer tried to fix it.  
The supervisor was protecting the engineer.  
The mayor restricted maintenance funds.

The truth was never fully reported. Only incomplete stories reached the public.

---

### 6. About Us
- Information about the creators  
- Images of the creators  

---

### 7. Features
- **Interactive Narrative Experience**  
- **Multiple Perspectives Gameplay**  
- **Mini-Game Based Progression**  
- **Public Story vs True Story Mechanic**  
- **Replayability**

---

## Use of JavaScript
JavaScript will be used for:
- Mini-games (drag and drop, points, randomization)  
- Buttons and navigation  
- Audio and visual effects  
- Saving and retrieving form data using `localStorage`

## Definition of Done
- **Content:** The story is complete and readable, and all interactive elements are functional.
- **Navigation:** All links between pages work correctly and are easily recognized.
- **Design:** Visual elements (images, styles) display correctly, and are used to enhance the story.
- **User:** The teacher or anyone as a user finds the website smooth to play, and at least a little enjoyable or enganging with its story and games.

---

## Wireframe
[Wireframe](https://www.canva.com/design/DAG3Kq1fF2w/QB8ZXY0owkpqdNUfHf5pgw/edit?utm_content=DAG3Kq1fF2w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

# FINAL MODIFICATION PROPOSAL
This 4th Quarter, the website will completely implement the CRUD process on saved data with new pages. Each processes' purpose on the website and how they are utilized are as follows:

## Create and Read 
From last quarter, local storage data created from forms and won games are read from different pages and used to show different pieces of information (Name of Detective, True Story).

## Update
A new webpage marking 'The End' of the game is created. After the user has reflected and pieced together their story, this page allows them to save their score among many other runs. What saves includes the time they ended their journey, name, view on the news, and score.

**Means to implement Update** 
- One element holds the run history
- Updated to add another run when user clicks on save button
- Combines different local storage items in a specific format
- Placed on top of previous runs, then that text is saved as the new history

## Delete
On the same page, all local storage items may be deleted here. Once the user's adventure is saved, they may reset and try again in a new name. All game history will be erased so you can have a chance to get a better score. Additionally, they may also reset the run history if needed.

**Means to implement Delete**
- New game button, once pressed, necessary local storage items are erased (Name of Detective, Game History, View on News)
- Delete history button, once pressed, previous runs are deleted from local storage

---

## Wireframe
[Wireframe](https://www.canva.com/design/DAG3Kq1fF2w/QB8ZXY0owkpqdNUfHf5pgw/edit?utm_content=DAG3Kq1fF2w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
