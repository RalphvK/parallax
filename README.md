> NOTE: This code is now deprecated. Many modern alternatives are available.

# Simple parallax jQuery plugin

[Checkout the demo.](http://ralphvankruiselbergen.nl/parallax)

This Jquery plug-in creates a function which allows you to set scrolling speeds of background images and even complete elements, as well as fading elements while scrolling up and down the page. The plug-in is very easy to use, very light and very basic. This allows it to be very easily modified and adapted to suit your needs. If you are a developer, modding this plug-in will be a breeze. The .paralax() function can be applied to any element's background image, or an entire element with position: fixed.

## 1KB

#PARALLAX is small. Extremely Small. It is no more than 1 kilobyte when minified. This is, in fact, so small that you might be interested in embedding this code in your document to save you a valuable http-request. Being feather light, it is very accessible. Regardless of whether you are loading those 1009 bytes on your planet-destroying gaming PC or on your iPod, it will have minimal impact on your loading time.

------

## Basic Code Snippet

This is the basic code that is the start of every function of this plug-in. This uses the default settings.

```javascript
$('#element').parallax();
```

## Settings

There are a number of options for this plug-in. Here is a snippet with all the variables.

```javascript
$('#element').parallax( {
    target: 'background',
    factor: 0.4,
    transition: 'none', // only available when target is set to 'element'.
    transitionfactor: 0.5
} );
```

Here is a complete list with all the options:

| OPTION           | VALUE           | EFFECT                                                          |
|------------------|-----------------|-----------------------------------------------------------------|
| target           | 'background'    | Makes the plug-in target the background-image of the element.   |
|                  | 'element'       | Target the element itself. CSS position must be absolute.       |
| factor           | [decimal 0 - 1] | A number from 0 to 1 defines the speed of the parallax effect.  |
| transition       | 'none'          | Defines no transition.                                          |
|                  | 'fade'          | Makes the element fade out or in, based on the scroll position. |
| transitionfactor | [decimal 0 - 1] | A number from 0 to 1 defines the speed of the transition.       |

------

## Browser Support

All modern browsers supporting the css background-position property and the Jquery .scroll() event should be compatible with this plug-in. Unfortunately for us web developers, older versions of Internet Explorer do not.
Most mobile browsers will lock the DOM while scrolling, the only exception to that rule being IE on Windows Phone 8. However, you shall not worry! Because this plug-in disables itself on browsers which are known to be incompatible.

------

## License

#### Rights
You are allowed, free of charge, to use, copy and modify this software for both non-commercial and commercial use. You are allowed to publish, distribute, sub-license or sell derivative works of this product.

#### Limitations
You are not allowed to sell unmodified versions of this software as a standalone product. You must either use this code as part of other sofware or create derivative software in order to be allowed to sell the software.

#### No Warranty
This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

END OF LICENSE