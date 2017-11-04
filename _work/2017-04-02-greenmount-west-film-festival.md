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
slide-bg 				: "/img/bg_gwff.jpg"
slide-img 				: "/img/img_filmfestival.png"
slide-description 		: "a night of fundraising around film"

[//]: # (Links)
svncrwns-link			: http://www.svncrwns.com
---

<div class="template_wrapper">
	
	<!-- Image Content Block w/menu -->
	{% include

		content-block-image.html 
		
		content-image="/img/gwff-menu-image.gif" 
		content-title="Festival Launching May 2018" 
		content-text="Greenmount West Film Festival is a collaboration between Noisy Tenants and SVNCRWNS to spotlight local film makers with community based thmes. We will have 3 screenings leading up to the festival. We held our most recent screening on August 10, 2017 at the Charles Theatre. The following films were featured:" 
	%}

	<!-- Film List -->
	{% for film in site.data.greenmount-west-films %}
		{% include film-list.html %}
	{% endfor %}

</div>
