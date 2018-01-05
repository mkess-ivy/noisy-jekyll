---
[//]: # (Meta Info)
layout 					: film
title 					: "Noisy Films"

[//]: # (Background Image)
hero_img				: /img/bigcity.png

[//]: # (Background for Work Page)
work_hover_img			: /img/hero-noisyfilms.jpg
---
<div class="single_post_wrapper noisyfilms_wrapper">
	{% 	include components/single_post_meta.html
		title="Now Playing"
	%}
	{% 	include components/film_highlight.html
		film_title="Big City - Minisode"
		film_runtime="5:01"
		film_crew_title="Directed &amp; Written By"
		film_crew_name="Edmond Cofie"
	%}
	{%	include components/film_summary.html
		film_summary="In a stifling New York City, Paul - a precarious young man, implores his friend and confident Mimi to help him meditate. What follows is a dream-like flight through memories of the past, lost love, family, and the quest for new beginnings."
	%}
</div>
