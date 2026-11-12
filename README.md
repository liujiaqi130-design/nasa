Warning: fs was declared with const; use let for reassignable variables.
Warning: b was declared with const; use let for reassignable variables.
# Hi, Earth. I’m Opportunity.

A responsive, high-school-friendly scrollytelling prototype about NASA’s Mars Exploration Rover Opportunity. Built with plain HTML, CSS, and vanilla JavaScript. The six chapters are Distance, Machine, Evidence, Journey, Passage of Time, and Not Forgotten.

## Run it

Open `index.html` in a browser, or open this folder in Visual Studio Code and use Live Server. No build tools or installs are required. An internet connection is needed for the NASA panorama background and Google Fonts.

## Project assets

- `assets/project-intro.MOV` — supplied project introduction video. This is 214 MB; browsers vary in MOV playback support. The page has a download fallback and recommends converting to MP4 for reliable playback. This file is kept in the local project but is too large for a normal GitHub file upload (100 MB per file). Host it separately or export a compressed MP4 before publishing.
- `assets/opportunity-orbit.gif` — supplied trajectory animation. Its measurements and labels are identified in the page as unverified project artwork, and it is clearly distinguished from Opportunity’s Mars surface route.
- `assets/mars-global-view.jpg` — PIA04591, NASA/JPL/Malin Space Science Systems. Extracted from the supplied project archive.

The NASA Opportunity panorama in the story uses the [first panoramic look at Meridiani Planum](https://science.nasa.gov/resource/first-panoramic-look-at-meridiani-planum-mars/), credited NASA/JPL-Caltech. A second Opportunity landscape image, PIA05495, is credited NASA/JPL/Cornell via the [NASA/JPL Photojournal](https://photojournal.jpl.nasa.gov/catalog/PIA05495). NASA’s 2017–18 Mars Exploration Rovers quick-facts calendar lists 200,000+ Opportunity images sent to Earth; the site uses that historical figure and does not call it a current raw-file count. The raw-image archive is linked to NASA’s Planetary Data System. NASA content should be used according to [NASA’s image and media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/). This is an independent student project and does not imply NASA endorsement.

## Story framework

The first-person Oppy narration is imagined for storytelling; Opportunity was a robot and did not speak or have feelings. Scientific and mission facts are starter copy based on NASA sources. The team expects updated NASA material and can replace the current copy later. No live telemetry is shown.

The NASA-sourced facts currently included:

- Opportunity launched July 7, 2003, and landed at Meridiani Planum in January 2004.
- Its planned primary mission was 90 Martian days, or sols.
- It operated for 5,111 sols, and drove 45.16 km (28.06 miles).
- It studied rocks and soils for evidence of past water; the “blueberries” are small hematite-rich spherules.
- The rover’s last communication was June 10, 2018; NASA declared the mission complete February 13, 2019.

The project foundation draft calls Opportunity active, but NASA records its mission as complete in 2019. The page uses the NASA mission status.

Sources: [NASA Science / Opportunity](https://science.nasa.gov/mission/mer-opportunity/), [NASA / Opportunity’s first panoramic look](https://science.nasa.gov/resource/first-panoramic-look-at-meridiani-planum-mars/), [NASA / Mars Exploration Rovers quick facts](https://mars.nasa.gov/files/resources/Mars-Exploration-Rovers-Calendar-2017_to_2018_optimized.pdf), [NASA PDS / raw Opportunity Pancam data](https://pds.nasa.gov/ds-view/pds/viewCollection.jsp?identifier=urn%3Anasa%3Apds%3Amer1_pancam_sci_raw%3Adata&version=1.0), and [NASA media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/).

## Interactions

Scroll-driven reveals and narrator prompts, reading progress bar, responsive chapter navigation, expandable fact notes, clickable rover instrument markers, a schematic Meridiani Planum route, and Opportunity’s first panorama. The page respects reduced-motion preferences. The route line is intentionally not presented as a measured traverse.
