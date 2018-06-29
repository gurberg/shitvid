# astrokey_web_client_next
AstroKey Web Client Application in VueJS


## Linux UDEV Rule
/etc/udev/rules.d/astrokey.rules

```
SUBSYSTEMS=="usb", ATTR{idVendor}=="10c4", ATTR{idProduct}=="fe02", MODE:="0666"

```

(make sure there's a newline at the EOF)
