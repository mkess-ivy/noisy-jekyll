---
layout: page_template_gray
title: FEWD Docs
permalink: /docs/
---
<style>
	p {
		text-transform: initial;
		font-weight: normal;
	}
	a {
		color: #e44d4e;
		text-decoration: none;
	}
	a:hover {
		border-bottom: 1px solid;
	}
	li {
		list-style: none;
		padding: 0;
		margin: 0 0 0 20px;
	}
	pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>

<div id="home"></div>

TABLE OF CONTENTS
-----------------
<div class="backtop-icon" id="js-backtop"><a href="#home"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a></div>

### Pages ![NT Logo](/img/logo_nt_micro.png "NT Logo") 
+ [index.html](#index)
+ [page_about.html](#about)
+ [page_work.html](#work)
+ [page_contact.html](#contact)
+ [page_thank_you.html](#thank_you)


### Template - Layouts ![NT Logo](/img/logo_nt_micro.png "NT Logo")
+ [coming_soon.html](#comingsoon)
+ [page_template.html](#pagetemplate)
+ [black_bg.html](#black)
+ [hero_bg.html](#hero)
+ [red_bg.html](#red)
+ [work_event_layout.html](#event)
+ [work_film_layout.html](#film)
+ [work_video_layout.html](#video)


### Projects ![NT Logo](/img/logo_nt_micro.png "NT Logo")
+ [noisy-burger.md](#noisyburger)
+ [mervo-tenants.md](#mervotenants)
+ [bus-stop-buddies.md](#busstop)


---


THINGS TO KNOW - PAGES
--------------
<div id="index"></div>
### index.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This is the home page where the slider lives. There are a max of 3 slides that will show on the slider.  The information for each slider, is pulled from the front matter code at the very beginning of each project file. (Ex: 2017-04-02-noisy-burger.md)

There are two templates for slides within the slideshow.  Slide 1 is the general image with text below.   Slide 2 has date, general image with text below.  There is a max of 3 slides that can be shown on the home page.  It can be changed by altering this line of code:
```
{% raw %}{% for work in features limit: 3 %}{% endraw %}
```

```
Slide 1

<div class="slide">
  <div class="slide_img_wrapper">
    <img src="{{ work.img-path }}" class="slide_img" />  
  </div>
  <div class="headline">
    {% raw %}{{ work.description }}{% endraw %}
  </div>
  {% raw %}{% include btn.html btn_color='on_brand_dark' url-location='work/noisy-burger' url-text="read more" %}{% endraw %}
</div>

```

This slide feature has been setup with the idea of being able to pick which projects you would like to show in the slide show.  In addition to selecting which projects can be featured, the projects can also be sorted by rank.

```
{% raw %}{% assign features = site.work | where:"featured", "yes" | sort:"featured-rank" %}{% endraw %}
```

Variables like from the slide 1 code block listed below are also found on the individual project files in the front matter:
```
{% raw %}
{{ work.img-path }}
{{ work.description }}
featured
featured-rank
{% endraw %}
```

Where to find project files:

```
|-- noisy-jekyll
    |-- _work
        |-- 2017-04-02-noisy-burger.md
```

At the beginning of any jekyll file, there is front matter. This is the code that sits between three dash marks - below is the front matter for the NOISY BURGER project site

```
---
layout: work_event_layout

title: "Noisy <br />Burger"
description: "a pop up restaurant designed and executed with students at Mervo High School"
img-path: "/img/noisy_burger.png"

featured: "yes"
featured-rank: "1"
slide: "slide1"
---
```

To update the slide, just change the variables in the front matter of the project site. Notice how [img-path: "/img/noisy-burger.png"] is listed in the front matter, and how work.img-path is listed in the code block for Slide 1. They work together.

For any slide that should be featured on the index.html page - use the __featured__ and __featured-rank__ variables in the front matter of that project file.

---
<div id="about"></div>
### page-about.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 


This is the About page. This page has information on the team members. Consists of a bio and picture.  There are two spaces for team members, however, this can easily increase, by copying the code and then editing from one team member.

There's only three things to know about this section.  Where to put the bio, title and image.  I recommend hosting images somewhere else like Google+ Photos. It saves a bunch of time by uploading somewhere else and then just copying that code into the class below in the code for '.member_bio_img' Here's what the code looks like below:

```
<div class="noisy_wrapper_member clearfix">
	<div class="default_text_med half_float_left">
		<div class="wrapper_30 default_text_lg">
			Jay Nwachu, Director of Development and Communications
		</div>
		<div class="default_text_lg">
			Jay's Role:
		</div>
		<div class="wrapper_30">
			I serve as Director of both the Development and Communications departments at Baltimore Corps. After spending my last 9 years in non profit organizations, I recognize two key components to living out an organizational mission are the organization's ability to share its good works and find the resources necessary to allow the staff to be their best selves. My role at Baltimore Corps today allows me to play an integral role in ensuring that the citizens of Baltimore, a city which I adore, are given an opportunity to live their best lives in an equitable manner.
		</div>
		<div class="default_text_lg">
			Jay's Background:
		</div>
		<div class="wrapper_30">
			A few things best capture my background: I was born and raised in Nigeria and am still very much connected to home. However, Baltimore has become a second home between attending undergraduate and graduate schools here, and living here throughout my adult life. While I have enjoyed (and continue to) my work life thus far, I am happily enjoying family life as well. I spend my free time today spending time with or thinking about my family and friends.....and Baltimore Corps.
		</div>
	</div>
		<div class="member_bio_img">
			<img src="/img/member1.png" />
		</div>
```
---
<div id="work"></div>
### page_work.html ![NT Logo](/img/logo_nt_micro.png "NT Logo")

The work page lists all the projects that have either been completed or are a work-in-progress for the NT Team.  Each project layout has 4 different layout options: (1) work_event_layout.html, (2) work_film_layout, (3) work_video_layout.html or (4) coming_soon.html

There's three variables used in the loop: (1) work.date, (2)work.url, (3)work.title, (4) work.description. These variables are listed in each project file in the front-matter at the very top of the file.  __page_work.html__ never has to be updated or edited because it's a loop to call __all projects__ that exist in this folder below:

```
|-- noisy-jekyll
    |-- _work
        
```

the front matter for page_work.html looks like this:

```
---
layout: page_template
title: Work
permalink: /work/
--- 
```

This means that the layout used for this page is called page_template which can be found in the _layouts folder.  The title of this page is __Work__ and the permalink for this page is /work/ which means once the page is loaded - the url is: siteurl.com/work

---
<div id="contact"></div>
### page_contact.html ![NT Logo](/img/logo_nt_micro.png "NT Logo")

The Contact page is simple, there is only a contact form. When users submit information through this form, an email is sent to nick at noisytenants dot com.

---
<div id="thank_you"></div>
### page_thank_you.html ![NT Logo](/img/logo_nt_micro.png "NT Logo")

The only time a user will see this page is after they submit their email address to join the NT newsletter through mailchimp.  This form is only accessible through the Noisy Burger Project Site. Once the user enters their email address and presses SUBMIT, they will be forwarded to the Thank You page, which has an option to re-route the user back to home.

---

THINGS TO KNOW - LAYOUTS
--------------
<div id="comingsoon"></div>
### coming_soon.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This is a placeholder web page. This is for the instance that you want to list projects but do not have content for the project site yet. A simple COMING SOON and RETURN HOME button for this page.

---

<div id="pagetemplate"></div>
### page_template.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

The ABOUT, WORK and CONTACT pages use this template. This template sets a wrapper for this page, as well as lists the page title at the very top of the page. Helps to keep all three of these pages uniform in styling.

If any additional pages need to be created for the site, make sure to use this layout.  To be sure you are using the right layout, check out some front-matter from a page file like contact.html:

```
---
layout: page_template
title: Contact
permalink: /contact/
--- 
```

---

<div id="black"></div>
### black_bg.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This template layout file changed the default background color of the website from white to black. It has a minimum height of 100% so that the footer is revealed once scrolled to the bottom of page.

---

<div id="hero"></div>
### hero_bg.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This template layout file is for the web page that uses the same background image as the home or index.html web page. The hero extends 100% in height.

---

<div id="red"></div>
### red_bg.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This template layout file changed the default background color of the website from white to red. It has a minimum height of 100% so that the footer is revealed once scrolled to the bottom of page.

---

<div id="event"></div>
### work_event_layout.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This template layout file is used for projects that are events like the Noisy Burger Pop Up Restaurant. This template layout is controlled mostly from the project file, instead of from the template layout file work_event_layout.html. The idea behind this: If there is another event project, it can be modified based on parameters added to the single project file and the layout can be reused for other projects(ex: 2017-04-02-noisy-burger.md). Parameters that can be added: hero section, foodmenu, testimonials, text and Call-to-action buttons and newsletter signup. At the bottom of the content for the project, there is a RETURN TO WORK cta so the user can easily return to the list of projects on the WORK page. Other parameters can be easily added to this list as well.

List of variables used in work_event_layout.html:
+ hero-color
+ color-text
+ event-picture
+ event-picture_width
+ event-description
+ etc.

So the front-matter of the project file will include these variables. Once the variables are loaded, an html file will generate.  Project files work closely with Layout files.

```
---
layout: black_bg
--- 

<div class="noisy_hero flex" style="background: none; background-color: {% raw %}{{ page.hero-color }}{% endraw %}; color: {% raw %}{{ page.color-text }}{% endraw %};">
	<div class="wrapper_30"><img src="{% raw %}{{ page.event-picture }}{% endraw %}" width="{% raw %}{{ page.event-picture_width }}{% endraw %}" /></div>
	<div class="wrapper_30 pull_center pull_tight">{% raw %}{{ page.event-description }}{% endraw %}</div>
	<div class="wrapper_30">{% raw %}{{ page.event-date }}{% endraw %}</div>

	<div class="default_text_micro">{% raw %}{{ page.location-name }}{% endraw %}</div>
	<div class="default_text_micro">{% raw %}{{ page.location-address }}{% endraw %}</div>
	<div class="default_text_micro">{% raw %}{{ page.locale }}{% endraw %}</div>
</div>

{% raw %}{{ content }}{% endraw %}

{% raw %}{% include btn.html btn_color='on_brand_light' url-location='work' url-text="return to work" %}{% endraw %}

<div class="footer-line"></div>
{% raw %}{% include template-footer.html %}{% endraw %}
```

Where {% raw %}{{ content }}{% endraw %} is, this is where the information from the project site AFTER the front-matter section goes.  This is where the additional sections like foodmenu, testimonials, text and CTA buttons can be added on the project file.

---

<div id="film"></div>
### work_film_layout.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This template layout file is used for projects that are films like the BUS STOP BUDDIES SHORT FILM. This template layout is controlled mostly from the project file, instead of from the template layout file work_film_layout.html. This layout consists of a hero background that extends 100% in height. There is also some text overlays for the hero section that include the name of the film, date of screening, screening locations and a section to purchase tickets. Other parameters can be easily added to this list as well.

Code from work_film_layout.html - 

```
---
layout: black_bg
--- 

<div class="noisy_hero flex noisy-hero_film" style="background-image: url('{% raw %}{{ page.hero-img }}{% endraw %}');">
	<div class="film-wrapper">
		<span class="film-text">{% raw %}{{ page.title }}{% endraw %}</span>
		<span class="film-spacer"></span>
		<span class="film-text">{% raw %}{{ page.film-date }}{% endraw %}</span>
		<span class="film-spacer"></span>
		<span class="film-text">{% raw %}{{ page.film-location }}{% endraw %}</span>
		<span class="film-spacer"></span>
		<span><a href="{% raw %}{{ page.film-url }}{% endraw %}">tickets</a></span>
	</div>
</div>

{% raw %}{% include btn.html btn_color='on_brand_light' url-location='work' url-text="return to work" %}{% endraw %}

<div class="footer-line"></div>
{% raw %}{% include template-footer.html %}{% endraw %}
```

As you can see, here are some of the variables being used in this layout:
+ hero-img
+ title
+ film-date
+ film-location
+ film-url

This layout doesn't have a {% raw %}{{ content }}{% endraw %} listed because of the way this layout is intended to be used.  There isn't much content to this layout, just a hero image, and text overlays.  No need for additional content to be used on this layout.

---

<div id="video"></div>
### work_video_layout.html ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This template layout file is used for projects that have video hero sections like MERVO TENANTS. This template layout is controlled mostly from the project file, instead of from the template layout file work_video_layout.html. This layout consists of a set of values, testimonials, and a gallery lightbox. Other parameters can be easily added to this list as well.

The most important code for this layout file is:

```
<div class="noisy_hero flex" style="background-image: url('{{ page.hero-img }}');">
	<div class="play-btn">
		<a href="#"><img src="/img/play-btn.png" width="95" /></a>
	</div>
</div>
```

Basically this code is saying - use a background image for the hero section, and then overlay a play button on top of the hero section.  All the other elements added to this page are controlled from the individual project files.

---

THINGS TO KNOW - PROJECTS
--------------
<div id="noisyburger"></div>
### 2017-04-02-noisy-burger.md ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This project site uses the work_event_layout.html template layout file. 

The most important directories for project files are:

```
|-- noisy-jekyll
    |-- _includes
    |-- _layouts
    |-- _work
        
```

the items in the _includes folder are code fragments that are reusable all throughout the site.  It helps with keeping DRY (do not repeat yourself) code.  For example - the header and footer for this website are actually code fragments stored in the _includes folder.

For this particular project file - the layout section in the front-matter will determine which layout needs to be used, like : 

```
---
layout: work_event_layout
---
```

After the variables have been satisfied for the layout, in the {% raw %}{{ content }}{% endraw %} section, we can call include statements to grab those fragments from the _includes folder, like (this is all the code to fill out the entire page for NOISY BURGER) :

```
---
layout: work_event_layout

color-text: "#000"
hero-color: "#FFF"
title: "Noisy <br />Burger"
description: "a pop up restaurant designed and executed with students at Mervo High School"
img-path: "/img/noisy_burger.png"

featured: "yes"
featured-rank: "1"
slide: "slide1"

event-title: /img/event-title_noisy-burger.png
event-title_width: 260
event-description: "a mervo tenants x noisy tenants collaboration"
event-picture: /img/event_noisy-burger_img.jpg
event-picture_width: 200
event-date: "April 26, 2017 - May 2, 2017"
event-date_width: 200

location-name: "R. House - Pop Up Stall"
location-address: "301 W. 29th Street"
locale: "Baltimore, MD 21211"
---


<div class="white-bg">
{% raw %}{% include testimonial.html %}{% endraw %}

</div>

```

After the three dashes to end the front-matter section, this is technically the content section.  Here we can see that we are adding the foodmenu, testimonials, event cta, and signup. To reuse the include fragments, it's best to use variables within those code fragments as well.  

value.html code fragment from the _includes folder is used for a different project, here is what the code looks like with variables - 

```
<div class="noisy-values">
	<div class="brand_icon brand_icon_short value-margin"><img src="{% raw %}{{ include.value-icon }}{% endraw %}" width="50" /></div>
	<div class="headline_lg wrapper_30">{% raw %}{{ include.value-title }{% endraw %}</div>
	<div class="default_text_med wrapper_30">{% raw %}{{ include.value-text }}{% endraw %}</div>
</div>
```

The variables are:
+ value-icon
+ value-title
+ value-text

To call this fragment, we use the following code in one of our project files like this:

```
{% raw %}{% include value.html value-icon='/img/rooster-icon.png' value-title='Noisy Tenants &amp; Mervo High School' value-text='<p>Mervo is a trade school in Baltimore City and one of the largest schools in the city at that. They feature trades like nursing, accounting, culinary arts, and welding just to name a few, and they thrive to offer an experience that impacts students live forever.</p>  <p>After meeting with the principal we were able to design a program plan that pushed the school’s agenda for the year, access to our network of resources and created opportunities for students to gain entrepreneurial&nbsp;skills.</p>' %}{% endraw %}
```

Here, all we're doing is filling in the variables with actual content.

---

<div id="mervotenants"></div>
### 2017-04-02-mervo-tenants.md ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This project site uses the work_video_layout.html template layout file, since the hero section is a video.

This project file operates similar to NOISY BURGER.  The difference is how the include statements are used.

```
---
layout: work_video_layout

creditList: "mervo-credits"
galleryList: "mervo-gallery"
---

{% raw %}{% include credits.html %}{% endraw %}
{% raw %}{% include gallery.html %}{% endraw %}
```

For credits.html, because we want to reuse the credits.html include fragment over and over for other project files, we use a list of variables to fill in our content for us.  Instead of listing each variable like how we do for value.html, instead we introduce the _data folder.

```
|-- noisy-jekyll
    |-- _data
        
```

Code for the credit.html file:

```
<div>
	<div class="wrapper_30 pull_center"><img src="/img/noisy-logo_credits.png" width="40" /></div>
	<div class="default_initial pull_center wrapper_30">Special Thanks</div>
	<ul class="noisy-credits" id="double">
		{% raw %}{% for person in site.data.[page.creditList] %}{% endraw %}
		<li>{% raw %}{{ person.name }}{% endraw %}</li>
		{% raw %}{% endfor %}{% endraw %}
	</ul>
</div>
```

page.creditList is the most important piece of code, because we also call that variable in the front-matter for MERVO-TENANTS.html.  Because the value associated with this variable is mervo-credits, we can look for that file in the _data folder.  It's an itemized list that can easily be duplicated or copied to fill in credits for another project.

---

<div id="busstop"></div>
### 2017-04-02-bus-stop-buddies.md ![NT Logo](/img/logo_nt_micro.png "NT Logo") 

This project site uses the work_film_layout.html template layout file.

This is a very limited project file because it uses the work_film_layout.  There isn't much content, so just the hero, and text overlays.

---

RESOURCES
---------

+ [Jekyll Docs Site](http://www.jekyllrb.com)
+ [Stack Overflow, Jekyll Thread](http://stackoverflow.com/questions/tagged/jekyll)
+ [My Github Repo](https://github.com/mkess-ivy?tab=repositories)


{% include btn.html btn_color='on_brand_dark' url-location='index.html' url-text="return home" %}
