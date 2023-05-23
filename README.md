<h1 align="center">
  <br>
    <b>stackoverflow top users</b>
</h1>
<h4 align="center">Zepz Engineering Assessment</h4>
<p align="center">
  <a href="#purpose">Purpose</a> •
  <a href="#details">Application Details</a> •
  <a href="#deliverables">Deliverables</a> •
  <a href="#solution">Solution</a> •
  <a href="#techstack">Tech Stack</a> •
  <a href="#installing">Installing</a> •
  <a href="#thoughts">Final Thoughts</a> •
</p>

___

### Purpose

The purpose of this challenge is to showcase your coding proficiency and demonstrate your approach to code structure, standards, styling, and associated tooling. We encourage you to construct a React Web application that exemplifies your skills in these areas.

### Details

Application details: At a high level your application will fetch a list of StackOverflow users and display the list on the screen.

- It must compile without errors -  if there are any potential compilation issues highlight them in your documentation.
- When the app is launched, the user should be able to see a list of the top 20 StackOverflow users.
- Each list item should contain user's profile image, name and reputation
- If the server is unavailable (e.g. offline), the user should see a list of empty states with an error message.
- Have cells be expandable (upon tapping the cell), with additional options to 'follow' and 'block' a user
- Follow/block functionality should just be locally simulated, i.e. no actual API call should be made.
- The meaning of following and blocking is explained in the points below
  - Users that are followed should show an indicator in the main part of the list item
  - Users that are blocked should show in a disabled greyed-out list item; tapping on the item should not open the details view
  - Include the 'unfollow' option in the view when a user is followed

### Deliverables

- Write unit tests wherever you see fit
- Emphasize testing and architecture
- Written in either Javascript or Typescript (preferred)
- It should be designed such that the code can bridge to Native
- Explain in a few sentences the design decisions you took developing the above app, and describe anything that you were unable to do due to the time constraint

# Solution

This repository contains the application as described above

## 📸 Screencast

![Alt text - Home Screen](/public/Screenshot%202023-05-23%20at%2018.05.09.png)

### Techstack

Details of the tech stack that has been used and some of the decisions.

- [ReactJs@latest]() - Client Framework
- [vite]() - For bundling and packaging, I prefer vite over CRA mostly because of the instant HMR, faster server starts, better bundling
- [typescript]() - For static typechecking
- [ChakraUI]() - For rapid development and prototyping I prefer using ChakraUI component library for styling, it  puts accessibility first, it is highly customizable and mobile responsive out of the box.
- [Jest & React Testing Library]() - Jest for running the tests and RTL for test assertions

## Getting Started

Follow the instructions below to get up and running on your local machine for development and testing purposes.

### Prerequisites

you should already have the following preinstalled:

- Node >= 16
- git

### Installing

Below is a series of step-by-step instructions that will guide you on how to get a development environment running.

Create a local clone of the repository

```bash
git clone https://github.com/Segopotso-Zepz/Zepz-Engineering-Assessment.git
```

go to the newly cloned directory

```bash
cd zepz
```

Install the projects dependencies

```bash
npm i
```

Start the projects development server

```bash
npm run dev
```

### System Design

- I use a simple fetch to get data from the API
- The local caching mechanism I've opted for is React Context, upon mounting the home page I update the context.
- There's no routing library that I've used since I'm not navigating anywhere, but I do have a preference for React Router and TanStack Location
- I've opted for client side pagition and filtering of users, so I only make 1 API call when you land on the home page then the rest of the time I use the cache, this also means I am able to avoid the rate limiting on the API.

### Bonus

- added pagination with number of users per page filtering
- added filtering/searching of users using display name
- added toast notifications when users are followed or blocked
- expanded cells to show user badges

### Challenges

- when reloading the page, the select dropdown defaults to `5` but the list is showing `20` users, potential fix could be storing the defaultValue or last selectedValue in localStorage and that should maintain the state even after refreshing
- the search bar overlays the mobile nav menu, which looks weird, i couldn't get to fixing this due to time constraints.
- I had far greater issues with setting up my testing entry, my config files were not setup correctly and babel transforms were not working, but I persevered and managed to finally set it up.

### Time taken to complete

- Review: `10 mins` to read and review the requirements
- Design: `30 mins - 45 mins` to sketch wireframes and think about design decisions.
- Implementation: `1h:40mins` to implement the whole project including.
- Documentation: `20 mins` to write up the README document and gather my thoughts

```Total Time === just over 2h:30mins```

screenshot below from WakaTime:
![Alt text - WakaTime coding timeline](/public/Screenshot%202023-05-23%20at%2013.22.20.png)

## Future Enhancements

- add grid or list view filter
- add a no users found error page when search results return nothing

### Thoughts

- lovely project to test a variety of skills and complex problem solving, enjoyed working on this project.

## Authors

- **Segopotso Makhutja** <leketi.s@gmail.com>
