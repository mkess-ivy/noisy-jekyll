---
layout: our_team
title: Our Team Draft
permalink: /our-team-draft/
---

<!-- Member 1 + 2 -->
<section class="team_row_2">
	{% for member in site.data.our-team limit:2 %}

	{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
	{% if thecycle == 'odd' %}
	<div class="team_member_mk">
		<div class="team_member_info_mk" id="team_member_info_mk">
			<div class="frow centered">
				<div class="team_member_meta">
					<div class="team_member_name_mk">
						{{ member.name }}
					</div>
					<div class="team_member_summary_mk">
						{{ member.summary }}
					</div>
					<div class="team_member_social_mk">
						<span><a href="{{ member.twitter }}"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></span>
						<span><a href="{{ member.instagram }}"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
					</div>
				</div>
			</div>
		</div>
		<div class="team_member_img_wrapper_mk">
			<button type="button" class="btn_more" id="btn_more"><img src="/img/btn_more.png" /></button>
			<div class="team_member_img_mk" style="background-image: url('{{ member.image }}');"></div>
		</div>
	</div>
	{% endif %}
	{% if thecycle == 'even' %}
	<div class="team_member_mk">
		<div class="team_member_info_even_mk" id="team_member_info_even_mk">
			<div class="frow centered">
				<div class="team_member_meta">
					<div class="team_member_name_mk">
						{{ member.name }}
					</div>
					<div class="team_member_summary_mk">
						{{ member.summary }}
					</div>
					<div class="team_member_social_mk">
						<span><a href="{{ member.twitter }}"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></span>
						<span><a href="{{ member.instagram }}"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
					</div>
				</div>
			</div>
		</div>
		<div class="team_member_img_wrapper_mk">
			<button type="button" class="btn_more" id="btn_more_even_mk"><img src="/img/btn_more.png"  /></button>
			<div class="team_member_img_mk" style="background-image: url('{{ member.image }}');"></div>
		</div>
	</div>
	{% endif %}
	{% endfor %}
</section>

<!-- Member 3 + 4 -->
<section class="team_row_2">
	{% for member in site.data.our-team offset:2 limit:2 %}

	{% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
	{% if thecycle == 'odd' %}
	<div class="team_member_mk">
		<div class="team_member_info_mk" id="team_member_info_mk">
			<div class="frow centered">
				<div class="team_member_meta">
					<div class="team_member_name_mk">
						{{ member.name }}
					</div>
					<div class="team_member_summary_mk">
						{{ member.summary }}
					</div>
					<div class="team_member_social_mk">
						<span><a href="{{ member.twitter }}"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></span>
						<span><a href="{{ member.instagram }}"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
					</div>
				</div>
			</div>
		</div>
		<div class="team_member_img_wrapper_mk">
			<button type="button" class="btn_more" id="btn_more"><img src="/img/btn_more.png" /></button>
			<div class="team_member_img_mk" style="background-image: url('{{ member.image }}');"></div>
		</div>
	</div>
	{% endif %}
	{% if thecycle == 'even' %}
	<div class="team_member_mk">
		<div class="team_member_info_even_mk" id="team_member_info_even_mk">
			<div class="frow centered">
				<div class="team_member_meta">
					<div class="team_member_name_mk">
						{{ member.name }}
					</div>
					<div class="team_member_summary_mk">
						{{ member.summary }}
					</div>
					<div class="team_member_social_mk">
						<span><a href="{{ member.twitter }}"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></span>
						<span><a href="{{ member.instagram }}"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
					</div>
				</div>
			</div>
		</div>
		<div class="team_member_img_wrapper_mk">
			<button type="button" class="btn_more" id="btn_more_even_mk"><img src="/img/btn_more.png"  /></button>
			<div class="team_member_img_mk" style="background-image: url('{{ member.image }}');"></div>
		</div>
	</div>
	{% endif %}
	{% endfor %}
</section>
