wee-cal
=======

A jQuery plugin for a tiny event calendar that includes a list of day links and a series of day events.

##Markup
```
<div class="event-calendar">    			
	<div class="days">
    <ul class="day-list">
      <li><a href="#10271985">Oct 27</a></li>
      <li><a href="#10281985">Oct 28</a></li>
      <li><a href="#10291985">Oct 29</a></li>
    </ul>
  </div>
  <div class="content">
    <ul class="day-events event-list" id="10271985">
      <li>World Series, Game 7</li>
      <li>Another Event</li>
    </ul>
    <ul class="day-events event-list" id="10281985">
      <li>Yet Another Event</li>
    </ul>
    <p class="day-events no-events" id="10291985">
      No events for this day.
    </p>
  </div>
</div>
```
##Usage
```
$(".beer").tabs();
```
$(".event-calendar").weeCal();
### daysSelector='.days'
The jQuery selector used to target the container for the day links. Flexslider will be applied to this container.
### dayEventsSelector='.day-events'
The jQuery selector used to target the containers for each day's events.
### activeClass='.active'
The CSS class that will be added to the active day link and active day events container.
##Dependencies
This plugin relies on the <a href="http://flexslider.woothemes.com/">Flexslider responsive slider plugin</a> by WooThemes.
