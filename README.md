# Keyboard-Accessible Pre: A Small, Dependency-Free Script for Making `<pre>` Elements Keyboard-Accessible

Because text in a [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) doesn't wrap (unless you use something like [`white-space: pre-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space#line_breaks_inside_pre_elements)), keyboard-users generally have no means of reading content that overflows the element ([except in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1069739#c24)).

This little script uses a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) to set and maintain the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of all `<pre>` elements on the page, making each of them keyboard-focusible when it has overflow (and not when it doesn't).
