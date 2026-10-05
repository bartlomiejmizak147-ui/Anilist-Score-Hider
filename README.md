The file contains all needed script to make the extension work. Download the zip, unzip it and go to your extensions tab, enable developer mode, and just load the files in there and it
all should work just fine. 

icons folder just contain the images for the icon to make it less boring then just a single letter A

manifest.json is just a file that lists basic info like name, version, what images use for icons etc. also it includes what sites and scripts to access.
content.css is in charge of recoloring the text of the labeled scores so that they cannot be seen.
content.js is in charge of searching anilist for the right boxes, which contain the average and mean score. When it finds them, they get labeled, which causes content.css to recolor them, while also removing the
recolor if the user click on the score, and then again if it gets clicked on again

