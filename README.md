# Hi, Earth. Iâ€™m Opportunity.

A responsive, high-school-friendly scrollytelling prototype about NASAâ€™s Mars Exploration Rover Opportunity. Built with plain HTML, CSS, and vanilla JavaScript.

## Run it

Open `index.html` in a browser, or open this folder in Visual Studio Code and use Live Server. No build tools or installs are required. An internet connection is needed for the NASA panorama background and Google Fonts.

## Project assets

- `assets/project-intro.MOV` â€” supplied project introduction video. This is 214 MB; browsers vary in MOV playback support. The page has a download fallback and recommends converting to MP4 for reliable playback. This file is kept in the local project but is too large for a normal GitHub file upload (100 MB per file). Host it separately or export a compressed MP4 before publishing.
- `assets/opportunity-orbit.gif` â€” supplied trajectory animation. Its measurements and labels are identified in the page as unverified project artwork, and it is clearly distinguished from Opportunityâ€™s Mars surface route.
- `assets/mars-global-view.jpg` â€” PIA04591, NASA/JPL/Malin Space Science Systems. Extracted from the supplied project archive.

The NASA Opportunity panorama in the story uses PIA05495, credited NASA/JPL/Cornell, via the NASA/JPL Photojournal asset library. NASA content should be used according to [NASAâ€™s image and media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/). This is an independent student project and does not imply NASA endorsement.

## Story framework

The first-person Oppy narration is imagined for storytelling; Opportunity was a robot and did not speak or have feelings. Scientific and mission facts are starter copy based on NASA sources. The team expects updated NASA material and can replace the current copy later. No live telemetry is shown.

The NASA-sourced facts currently included:

- Opportunity launched July 7, 2003, and landed at Meridiani Planum in January 2004.
- Its planned primary mission was 90 Martian days, or sols.
- It studied rocks and soils for evidence of past water; the â€œblueberriesâ€ are small hematite-rich spherules.
- The roverâ€™s last communication was June 10, 2018; NASA declared the mission complete February 13, 2019.
- Its end-of-mission odometry was 45.16 km (28.06 miles), after 5,111 sols.

Sources: [NASA Science / Opportunity](https://science.nasa.gov/mission/mer-opportunity/), [NASA / Spirit and Opportunity science objectives](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-objectives/), [NASA/JPL / Opportunity at El Capitan (PIA05495)](https://photojournal.jpl.nasa.gov/catalog/PIA05495), and [NASA media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/).

## Interactions

Scroll-driven reveals and narrative prompts, reading progress bar, responsive chapter navigation, expandable fact notes, and clickable rover instrument markers. The page respects reduced-motion preferences.

