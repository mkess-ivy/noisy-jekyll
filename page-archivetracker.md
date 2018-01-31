---
layout: hero_bg
title: Bus Stop Tracker Archive
permalink: /busstoptracker/

summary: "<p>Bus Stop Buddies began as an effort to ensure that students in Greenmount West have a positive start to their school day. On too many occasions, the bus did not arrive at all and adults were able to escort youth across busy North Avenue to school. Today, the fun at the stop continues and we’ve established a bus tracking system to hold city schools accountable for the lack of reliable transportation for youth.</p>

<p>This tracker is updated weekly.</p>"

[//]: # (Background Image)
hero_img: /img/bg_tracker.jpg
---
<div class="bsbtracker_masthead_wrapper">
    <div class="bsbtracker_wrapper">
        <div class="frow justify-between">
            <div class="title">{{ page.title }}</div>
            <div class="summary">{{ page.summary }}</div>
        </div>
    </div>
</div>

<div class="bsbtracker_wrapper" id="tracker_archive_height">

    {% assign sorted = (site.bsbtracker | sort: 'week') | reverse %}
    {% for track in sorted %}
    <div class="bsbtracker_single">
        <div class="frow justify-between">
            <div class="group_alpha">
                <div class="week">week {{ track.week }}</div>
                <div class="week-header">{{ track.week-start | date: "%b %d" }} &ndash;<br /> {{ track.week-end | date: "%b %d" }}</div>
            </div>
            <ul class="group_beta">
                <div class="frow justify-between">
                    {% for day in track.day1 limit: 1 %}
                    <li class="bsbday">
                        Mon <div class="light-log archive-light-log {{ day.status }}-light">&nbsp;</div>
                    </li>
                    {% endfor %}
                    {% for day in track.day2 limit: 1 %}
                    <li class="bsbday">
                        Tue <div class="light-log archive-light-log {{ day.status }}-light">&nbsp;</div>
                    </li>
                    {% endfor %}
                    {% for day in track.day3 limit: 1 %}
                    <li class="bsbday">
                        Wed <div class="light-log archive-light-log {{ day.status }}-light">&nbsp;</div>
                    </li>
                    {% endfor %}
                    {% for day in track.day4 limit: 1 %}
                    <li class="bsbday">
                        Thu <div class="light-log archive-light-log {{ day.status }}-light">&nbsp;</div>
                    </li>
                    {% endfor %}
                    {% for day in track.day5 limit: 1 %}
                    <li class="bsbday">
                        Fri <div class="light-log archive-light-log {{ day.status }}-light">&nbsp;</div>
                    </li>
                </div>
                {% endfor %}
            </ul>
        </div>
    </div>
    {% endfor %}

</div>
