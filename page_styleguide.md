---
layout: styleguide
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

{% include components/btn.html btn_color='on_brand_light' url-location='work' url-text="return to work" %}

```
{% raw %}{% include components/btn.html btn_color='on_brand_light' url-location='work' url-text="return to work" %}{% endraw %}
```

{% include components/btn.html btn_color='on_brand_dark' url-location='work' url-text="return to work" %}

```
{% raw %}{% include components/btn.html btn_color='on_brand_dark' url-location='work' url-text="return to work" %}{% endraw %}
```

---
