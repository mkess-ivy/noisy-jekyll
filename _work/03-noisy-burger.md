---
[//]: # (Meta Info)
layout 					: project_layout
title 					: "Noisy <br />Burger"
work_hover_img			: /img/hero-noisyburger.png

[//]: # (Project Info)
project-hero-icon 		: "/img/logo-big-noisyburger.png"
project-title 			: "Noisy Burger"
project-subtitle 		: "a pop up restaurant designed by mervo baking trade students"

---
<div class="template_wrapper">

	<!-- Image Content Block w/menu -->
	{% include

		content-block-image.html

		content-image="/img/noisyburger-menu-image.jpg"
		content-title="The Concept"
		content-text="@NoisyBurger was developed with students in the commercial baking trade at Mergenthaler Vocational Technical High School. This project was student led and designed. Noisy Tenants guided students through all phased of the project including concept development, marketing, and operation logistics."
	%}

	<!-- Image Content Block w/menu -->
	{% include

		content-block-image.html

		content-image="/img/gallery-noisyburger3.png"
		content-title="menu"
		content-menuList="noisyburger-menu"
	%}

	<!-- Image Content Block w/menu -->
	{% include

		content-block-image.html

		content-image="/img/gallery-noisyburger5.png"
	%}

	<!-- Testimonial Block -->
	{% include

		content-block-testimonial.html

		data-testimonialList='noisyburger2017-testimonials'
		testimonial-title='What We Heard'

	%}

	<!-- Press Block -->
 	{% include
 		press.html

 		press-title="Press"
 		pressList="noisyburger-press"
 	%}


</div>
