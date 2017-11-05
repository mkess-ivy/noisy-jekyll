---
[//]: # (Meta Info)
layout 					: project_layout
title 					: "Noisy Films"
work_hover_img			: /img/hero-noisyfilms.png

[//]: # (Project Info)
project-hero-icon 		: "/img/logo-big-greenmount-west.png"
project-title 			: "noisy films"
project-subtitle 		: "a collection of films by local film makers"

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
