---
[//]: # (Meta Info)
layout 					: project_layout
title 					: "Noisy <br />Burger"

[//]: # (Project Info)
project-hero-icon 		: "/img/logo-big-noisyburger.png"
project-title 			: "@noisyburger"
project-subtitle 		: "a pop up restaurant designed by mervo baking trade students"

[//]: # (Slide Info)
slide-template 			: "slide1"
slide-bg				: "/img/bg_noisyburger.jpg"
slide-img 				: "/img/noisy_burger.png"
slide-description 		: "a pop up restaurant designed and executed with students at Mervo High School"

[//]: # (Misc Settings)

---
<div class="template_wrapper">

	<!-- Image Content Block w/menu -->
	{% include

		content-block-image.html 
		
		content-image="/img/mervo-menu-image.jpg" 
		content-title="menu" 
		content-menuList="noisyburger-menu" 
	%}

	<!-- Slideshow -->
	{% include 

		content-block-slider.html

		content-slideList="noisyburger-slide"
	%}

	<!-- Testimonial Block -->
	{% include 

		content-block-testimonial.html 

		data-testimonialList='noisyburger2017-testimonials' 
		testimonial-title='c/o 2017 Mervo Tenants' 

	%}

	<!-- Testimonial Block -->
	{% include 

		content-block-testimonial.html

		data-testimonialList='noisyburger2018-testimonials'
		testimonial-title='c/o 2018 Mervo Tenants'

	%}

	<!-- Testimonial Block -->
	{% include 

		content-block-testimonial.html 

		data-testimonialList='noisyburger2019-testimonials' 
		testimonial-title='c/o 2019 Mervo Tenants' 

	%}

	<!-- Press Block -->
 	{% include
 		press.html

 		press-title="Press"
 		pressList="noisyburger-press"
 	%}


</div>