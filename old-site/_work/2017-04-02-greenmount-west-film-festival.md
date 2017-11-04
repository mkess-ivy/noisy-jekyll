---
[//]: # (Meta Info)
layout 					: project_layout
title 					: "Greenmount West Film Festival"

[//]: # (Project Info)
project-hero-icon 		: "/img/logo-big-greenmount-west.png"
project-title 			: "greenmount west film festival <br/> presented by noisy tenants"
project-subtitle 		: "a collection of films by local film makers"

[//]: # (Slide Info)
slide-template 			: "slide1"
slide-bg 				: "/img/bg_2.jpg"
slide-img 				: "/img/img_filmfestival.png"
slide-description 		: "a night of fundraising around film"
---

<div class="template_wrapper">
	
	<!-- Film List -->
	{% for film in site.data.greenmount-west-films %}
		{% include film-list.html %}
	{% endfor %}

</div>
