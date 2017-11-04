---
layout: page_template_gray
title: FEWD Style Guide
permalink: /styleguide/
---

## COLORS

RED - #E44D4E 
<div style="background: #e44d4e; padding: 3px;">&nbsp;</div>

BLACK - #000
<div style="background: #000; padding: 3px;">&nbsp;</div>

WHITE - #FFF
<div style="background: #fff; padding: 3px;">&nbsp;</div>

---

## FONTS

Total of (1) font being used on entire site:

Helvetica - Standard

Variations of how this font is being used:
<div class="headline">Headline</div>
```
.headline {
font-size: 18px;
margin: 0 auto 30px;
text-align: center;
}
```
<div class="headline_lg">Headline LG</div>
```
.headline_lg {
font-size: 24px;
letter-spacing: 0.1px;
text-align: center;
text-transform: initial;
}
```
<div class="page_title">Page title</div>
```
.page_title {
border-bottom: 1px solid;
font-size: 32px;
margin-bottom: 100px;
margin-top: 40px;
padding-bottom: 10px;
width: 50px;
}
```
<div class="page_title_alt">Page title Alt</div>
```
.page_title_alt {
font-size: 32px;
margin-bottom: 50px;
}
```
<div class="default_text_micro">Default Text Micro</div>
```
.default_text_micro {
font-size: 12px;
}
```
<div class="default_text_sm">Default Text sm</div>
```
.default_text_sm {
font-size: 13px;
font-weight: lighter;
text-transform: initial;
margin-bottom: 5px;
}
```
<div class="default_text_med">Default Text med</div>
```
.default_text_med {
font-size: 14px;
font-weight: normal;
margin-bottom: 10px;
}
```
<div class="default_text_lg">Default Text Lg</div>
```
.default_text_lg {
font-size: 18px;
font-weight: bold;
text-transform: initial;
margin-bottom: 10px;
}
```
<div class="default_text_grande">Default Text Grande</div>
```
.default_text_grande {
font-size: 36px;
margin-bottom: 35px;
}
```
<div class="default_initial">Default Text Initial</div>
```
.default_initial {
text-transform: initial;
margin-bottom: 5px;
}
```



---

## ICONS/ logos

<img src="/img/logo-noisy-rooster-bell.png" class="brand_icon" width="40" />
```
<img src="/img/logo-noisy-rooster-bell.png" class="brand_icon" width="40" />
```

<img src="/img/noisy-logo_credits.png" width="40" />
```
<img src="/img/noisy-logo_credits.png" width="40" />
```

<div class="brand_icon brand_icon_short value-margin"><img src="/img/rooster-icon.png" width="50" /></div>
```
<div class="brand_icon brand_icon_short value-margin"><img src="{{ include.value-icon }}" width="50" /></div>
```

---

## BUTTONS/CTAs

{% include btn.html btn_color='on_brand_light' url-location='work' url-text="return to work" %}

```
{% raw %}{% include btn.html btn_color='on_brand_light' url-location='work' url-text="return to work" %}{% endraw %}
```

{% include btn.html btn_color='on_brand_dark' url-location='work' url-text="return to work" %}

```
{% raw %}{% include btn.html btn_color='on_brand_dark' url-location='work' url-text="return to work" %}{% endraw %}
```

---

## LINKS

<ul class="wrapper_15 footer-menu">
  <li><a href="{{site.baseurl}}/work">work</a></li>
</ul>

```
<ul class="wrapper_15 footer-menu">
  <li><a href="{{site.baseurl}}/work">work</a></li>
</ul>
```

<div class="default_initial"><a href="{{ work.url }}">Noisy Burger</a></div>

```
<div class="default_initial"><a href="{% raw %}{{ work.url }}{% endraw %}">Noisy Burger</a></div>
```



---

## FORMS

<div class="noisy_text_wrapper">
		<form>
		  <input type='hidden' name='redirect_to' value='http://www.noisytenants.com/thank-you' />
		 
		  <input type='text' name='name' id="input-name" placeholder="name" />
		  <input type='text' name='email' id="input-email" placeholder="email"/>
		  <input type='text' name='message' id="input-message" placeholder="message"/>
		  <input type='submit' value='Submit' id="input-submit" placeholder=""/>
		</form>
	</div>

```
<div class="noisy_text_wrapper">
<form action="https://getsimpleform.com/messages?form_api_token=3ec784183fc7823c676746fa64318836" method="post">
  <input type='hidden' name='redirect_to' value='http://www.noisytenants.com/thank-you' />
 
  <input type='text' name='name' id="input-name" placeholder="name" />
  <input type='text' name='email' id="input-email" placeholder="email"/>
  <input type='text' name='message' id="input-message" placeholder="message"/>
  <input type='submit' value='Submit' id="input-submit" placeholder=""/>
</form>
</div>
```

