# CSS Styles, Tags, and Elements Organized

# Element Structure

Top element is layout, containing
- Header: Global Orange Header, not made yet
- Main: S4YT.jsx, the page
- Footer: Global Magenta Footer, not made yet

## Main

The main Element of the page. Classed with s4ytsection. Currently Only contains 1 tag:
- Div, class: leftRightContainer

## leftRightContainer

The leftRightContainer Element of the page? not sure what the class name means. Classed with leftRightContainer.

### Tags:
- Div, class: s4ytLeftsec
- Div, class: contentContainer

## s4ytLeftsec

Contains the left side main content of the page, this is static, and has the Dollars for your thoughts logo paper and the click me to
access popup speech bubble. Both within this element.

### Tags:
- Img, class: s4ytPaper
- Img, class: s4ytClick -> the Click me speech bubble, this class name is misleading

## contentContainer

Contains the right side main content of the page, this is dynamic, and has the navigation buttons and the section content.

## NavButtons

Top Navigation Button Div has 2 states, desktop and mobile, with the respective classes:
- s4ytInfobuttonsDesktop: Styles for desktop navigation container
- s4ytInfobuttonsMobile: Styles for mobile navigation container

Within Top Navigation Button Div is 5 img tags, each with the general class of navBtn and the respective classes:
- s4ytWhat: Styles for What section button
- s4ytAmi: Styles for Ami section button
- s4ytWhen: Styles for When section button
- s4ytHowdo: Styles for Howdo section button
- s4ytWhatare: Styles for Whatare section button
These Individual Classes might not be that useful, maybe for hover or states though when specific images are needed
plus seperate spacing for Top and Bottom buttons as they are on the edges

## SectionContent

Contains the Info which is dynamic from react and changes from which nav button is active
Structure:
<div class="textInfo">
    <hgroup>
        <h3 class="textHeader"></h3>
        <div class="line"></div>
    </hgroup>
    <ul>
        <li class="listinfo"></li>
        ...
    </ul>
    <img class="infoImg" src="" alt=""> -> This is the White Palm Tree Image
</div>
