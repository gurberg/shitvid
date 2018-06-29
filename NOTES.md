# astrokey_web_client_next
AstroKey Web Client Application in VueJS


## Linux UDEV Rule
/etc/udev/rules.d/astrokey.rules

```
SUBSYSTEMS=="usb", ATTR{idVendor}=="10c4", ATTR{idProduct}=="fe02", MODE:="0666"

```

(make sure there's a newline at the EOF)


Working Chrome.USB - READ_MACRO
```
chrome.usb.getDevices({ }, (devs) => {
  window.devs = devs
})

chrome.usb.openDevice(devs[0], (e) => { window.chandle = e })

READ_MACRO = {
  'direction': 'in',
  'requestType': 'vendor',
  'recipient': 'device',
  'request': 0x03,
  'value': 0,
  'index': 0x02,
  'length': 128
}

chrome.usb.controlTransfer(chandle, READ_MACRO, (resp) => {
  console.log(resp)
  window.resp = resp
})
```

###
NodeWebkit / NWBuilder docs - add npm task..
Options:
  -p, --platforms      Platforms to build, comma-sperated, can be: win32,win64,osx32,osx64,linux32,linux64   ['osx64', 'win32', 'win64']
  -v, --version        The nw version, eg. 0.8.4                                             [default: "latest"]
  -r, --run            Runs NW.js for the current platform                                   [default: false]
  -o, --buildDir       The build folder                                                      [default: "./build"]
  -f, --forceDownload  Force download of NW.js                                               [default: false]
  --cacheDir           The cache folder
  --quiet              Disables logging                                                      [default: false]


nwbuild -p win32,win64,osx32,osx64,linux32,linux64 -v latest ./dist
nwbuild -p linux64 -v latest ./dist

<!-- TODO - add an NPM task for this... -->
nwbuild -p win64 -v latest ./dist

NWK Friendly HTML
```
<!DOCTYPE html><html><head><meta charset=utf-8><title>AstroKey</title><script src=http://localhost:35729/livereload.js></script><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css><script src=https://unpkg.com/vue-meta@1.2.0/lib/vue-meta.min.js></script><link href=/static/css/app.d6b0643bbc77bc0846989c2200e4071b.css rel=stylesheet></head><body><div id=app></div><script type=text/javascript src=/static/js/manifest.2c4989e258190844f648.js></script><script type=text/javascript src=/static/js/vendor.ab47de4a4583ccbd1fff.js></script><script type=text/javascript src=http://localhost:8080/app.js></script></body></html>

```


# FLASHING FIRMWARE ON LINUX
