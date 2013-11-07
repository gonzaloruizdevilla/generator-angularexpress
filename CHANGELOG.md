<a name="v0.0.5"></a>
### v0.0.5 (2013-11-07)


#### Bug Fixes

* **css:** remove merge conflicts ([d558af35](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/d558af351c8a531132ce064a461bc038e0710b25))
* **tests:** service tests now load the correct module ([1f665444](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/1f66544476b4bec49d34e792d25ceeb32ec45b0a))

<a name="v0.0.4"></a>
### v0.0.4 (2013-11-06)


#### Bug Fixes

* **app:**
  * test setup in default configuration ([2bebccbd](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/2bebccbdd15d177805440b6d1ec84cc38a2b4678))
  * serve files from correct place ([fe2bad04](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/fe2bad0417b3138fa2788c17abcf7eb5be5f3e91))
  * include bootstrap images for css/scss ([e88dba43](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/e88dba43f2e714d69bca366cade453f49a24b62c), closes [#196](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/196))
  * allow normal javascript to be created ([c8190b55](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/c8190b55284e8c1570cc8fafdc8723250f43829b), closes [#329](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/329), [#316](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/316))
  * conditional include of jquery ([bc1e68e3](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/bc1e68e30450edc16145b934487f6df5eaaddcd8), closes [#362](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/362))
* **build:**
  * remove references to global yeomanConfig ([a0f16e26](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/a0f16e265729586802121c0fe3111f974e5145ec))
  * update to grunt-contrib-connect 0.5.0 ([67c0ebf0](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/67c0ebf081889658a33bc690c530c3c8bc8a2c12))
  * update to grunt-contrib-connect 0.4.0 ([368ad7f9](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/368ad7f9a16be0ee67e5182be581669017788f16))
* **controller:** awesomeThings "undefined" error in coffescript tests ([c0904c3f](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/c0904c3ff083f79700117c101027fea1f4238b5d))
* **docs:**
  * Add coffeescript=false to readme ([abd7dc38](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/abd7dc38be0cf511307c784f30d59c9fdcaea3e2))
  * fixed typo in readme ([a967907c](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/a967907cf523bac752b3fa9ea6363767d8855162))
* **gen:** options should have descriptions ([da001832](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/da001832dbdb268b3bf38f359c72b40c401273e4))
* **generator:** add app modules dependency to app ([a45b71c9](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/a45b71c95c18deb85ff7a1538c0b0744e4faa508), closes [#230](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/230))
* **server:** Add "Express" to response of included features ([3b86972a](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/3b86972a045bb8f6c094b943e016bf904c37919a))
* **styles:** update path to icon images ([8daad4f2](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/8daad4f2de9dbde4fcc810527da7c9607e1db8d4))
* **templates:**
  * Gruntfile indentation ([6f7d17e2](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/6f7d17e2a0f1f7f9f8cac3157beb07b82e8cf400))
  * take out semicolons in coffeescript ([e38124ee](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/e38124eeb369b7741adc263f1763c618a918ee65))
  * correct coffee provider template ([86aefe5d](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/86aefe5da49abe82e054666641f8ee4bdc8d555e))
  * value generator should use value template ([67d0c5ad](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/67d0c5ad5cbc58a2dfcfd8f3db1f45be21afe357))
* **test:** update tests to match service files ([c30464c3](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/c30464c3a5216169026c23a6fea23d273bd0b948), closes [#338](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/338), [#354](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/354))
* **views:** correct path for sub views ([0568e744](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/0568e74446c5a8e28d2cea1a9a9a5886be190d7d), closes [#359](http://github.com/gonzaloruizdevilla/generator-angularexpress/issues/359))


#### Features

* **app:** upgrade to Bootstrap 3.0.1 ([59f4b1ba](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/59f4b1ba73842b758174ad44a7da60af4f4db63f))
* **dependencies:** update to latest jquery, json3 and angular stable dependencies ([3989f5fa](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/3989f5fafbeecdc9bf41150a3bf0a19f0d6be8ba))
* **gen:**
  * allow app names to have custom suffix ([09f0f7b3](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/09f0f7b3a8c3264b7527bc9fed8c709becec99eb))
  * add option to not add to index ([486ee146](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/486ee14660ac51b7cfcb4b7de50135833954f193))

<a name="v0.0.3"></a>
### v0.0.3 (2013-09-05)


#### Bug Fixes
* **view:** view generator generates jade templates ([5574ec9](https://github.com/gonzaloruizdevilla/generator-angularexpress/commit/5574ec92201873152709544be0ccd159f01993d0))
* **doc:** examples use angularexpress instead of angular ([53a4d4e9](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/53a4d4e9b4563b3795f926f4af90019472cc51e7))
* **jade:**
  * watch for jade changes in subfolders ([277fd964](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/277fd9646ece8b4261c20bfde9b64013a1ffef94))
  * compile jade templates in subdirectories of app/jade/views ([5a4a493a](http://github.com/gonzaloruizdevilla/generator-angularexpress/commit/5a4a493a092be9a423f3f23dd4d881792bbd3d96))

