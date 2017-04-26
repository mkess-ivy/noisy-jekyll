---
layout: page_template_gray
title: Docs
permalink: /docs/
---
<style>
	p {
		text-transform: initial;
		font-weight: normal;
	}
	a {
		text-decoration: underline;
		color: #000;
	}
</style>

TABLE OF CONTENTS
-----------------

### Pages
+ index.html

This is the home page where the slider lives. There are a max of 3 slides that will show on the slider.  The information for each slider, is pulled from the front matter code at the very beginning of each project file. (Ex: 2017-04-02-noisy-burger.md)

+ page_about.html

This is the About page. This page has information on the team members. Consists of a bio and picture.  There are two spaces for team members, however, this can easily increase, by copying the code from one team member and editing.

+ page_work.html

The work page lists all the projects that have either been completed or are a work-in-progress for the NT Team.  Each project layout has 4 different layout options: (1) work_event_layout.html, (2) work_film_layout, (3) work_video_layout.html or (4) coming_soon.html

+ page_contact.html

The Contact page is simple, there is only a contact form.  When users submit information through this form, an email is sent to nick at noisytenants dot com.

+ page_thank_you.html

The only time a user will see this page is after they submit their email address to join the NT newsletter through mailchimp.  This form is only accessible through the Noisy Burger Project Site. Once the user enters their email address and presses SUBMIT, they will be forwarded to the Thank You page, which has an option to re-route the user back to home.

### Projects
+ Noisy Burger

This project site uses the work_event_layout.html template layout file. 

+ Mervo Tenants

This project site uses the work_video_layout.html template layout file, since the hero section is a video.

+ Bus Stop Buddies

This project site uses the work_film_layout.html template layout file.



### Template - Layouts
+ coming_soon.html

This is a placeholder web page.  This is for the instance that you want to list projects but do not have content for the project site yet.  A simple COMING SOON and RETURN HOME button for this page.

+ page_template.html

The ABOUT, WORK and CONTACT pages use this template.  This template sets a wrapper for this page, as well as lists the page title at the very top of the page.  Helps to keep all three of these pages uniform in styling. 

+ black_bg.html

This template layout file changed the default background color of the website from white to black.  It has a minimum height of 100% so that the footer is revealed once scrolled to the bottom of page.

+ hero_bg.html

This template layout file is for the web page that uses the same background image as the home or index.html web page.  The hero extends 100% in height.

+ red_bg.html

This template layout file changed the default background color of the website from white to red.  It has a minimum height of 100% so that the footer is revealed once scrolled to the bottom of page.

+ work_event_layout.html

This template layout file is used for projects that are events like the Noisy Burger Pop Up Restaurant.  This template layout is controlled mostly from the project file, instead of from the template layout file work_event_layout.html.  The idea behind this: If there is another event project, it can be modified based on parameters added to the single project file (ex: 2017-04-02-noisy-burger.md). Parameters that can be added: hero section, foodmenu, testimonials, text and Call-to-action buttons and newsletter signup.  At the bottom of the content for the project, there is a RETURN TO WORK cta so the user can easily return to the list of projects on the WORK page. Other parameters can be easily added to this list as well.

+ work_film_layout.html

This template layout file is used for projects that are films like the BUS STOP BUDDIES SHORT FILM.  This template layout is controlled mostly from the project file, instead of from the template layout file work_film_layout.html. This layout consists of a hero background that extends 100% in height. There is also some text overlays for the hero section that include the name of the film, date of screening, screening locations and a section to purchase tickets. Other parameters can be easily added to this list as well.

+ work_video_layout.html

This template layout file is used for projects that have video hero sections like MERVO TENANTS.  This template layout is controlled mostly from the project file, instead of from the template layout file work_video_layout.html. This layout consists of a set of values, testimonials, and a gallery lightbox. Other parameters can be easily added to this list as well.

---


THINGS TO KNOW
--------------

### index.html

There are two templates for slides within the slideshow.  Slide 1 is the general image with text below. Slide 2 has date, general image with text below.  



---

{% include btn.html btn_color='on_brand_dark' url-location='index.html' url-text="return home" %}
