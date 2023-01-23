# portfolioBendik2023

## table of content

- [about the project](#about-the-project)
- [design](#design)
  - [colors](#colors)
  - [Design elements](#design-elements)
  - [colors](#fonts)
- [javascript](#javascript)
  - [Navigation](#navigation)
  - [JSON](#json)
- [assets](#assets)
- [links](#links)

## about the project

This is my new portfolio website. where you can find information about me, my projects or skills i know.
For this project I have only used CSS, HTML, and JS. No frameworks

For design I have used Figma, Here I also created an prototype

for hosting of my website i have used Netlify.

I have not initiated npm, since I did not see a need for packages.

## design

---

### colors

I created the design with very dark colors, kind of like a dark mode. This is because I originally planned to have a dark and light mode.
I scrapped the light mode(I still have it in the Figma prototype) to use only a dark theme because I was unhappy with the light mode. It might be added in the future.

### design elements

I wanted the website to be very simple, with a focus on showing information about what I have made and myself.
The front page has most of the relevant information, with little need to browse other pages, but it is there if someone wants to check it out.

The design is optimized for multiple screen sizes, using the width on bigger screens, and less width on smaller ones.

There are a few "animations" / effects on the website. such as hovering on buttons for pc, and a side nav that slides in.

In my original design, I had a contact page, this was scrapped as I did not like the outcome. so contact information can be found in the footer as a linkedin link and email.

I have experimented with blur effects on backgrounds, for example on the front page. I quite liked the combination of blur and an image as a background.

### fonts

I have used Oswald and Roboto as fonts.
Oswald is used for most headers.
Roboto is used for most of the main text.

## javascript

---

I have only used javascript for two things, navigation and displaying JSON content.

### navigation

The navigation is triggered by javascript event listeners, which toggles some CSS classes.

### JSON

On all pages, there is JSON content. I wanted to show I understand how to fetch content, so I wrote most of the content in 3 JSON files.
So on all the pages, there is a js file to run through all the needed JSON and display the content.

On the single project page, I send a search param through, so it knows what project to display.

## assets

---

Most of the content comes from JSON, except for some images that is hardcoded, like in the footer.

Images i have used comes from several sorces:

- unsplash.com - the background image on front page, as well as about me images.
- Picture of me - Taken by my friend Preben Standal
- icons for the diffrent websites are from their brand assets or wikimedia.org

## links

---

[figma prototype](https://www.figma.com/proto/BpxNQeQktKxFrQ4Oolo2R6/new-portfolio?page-id=101%3A1988&node-id=101%3A2134&viewport=-4565%2C1736%2C0.23&scaling=min-zoom&starting-point-node-id=101%3A2134)

[netlify](bendikkvam.netlify.app)
