# Changelog

### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.2.1 to ^7.2.2

## [16.1.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v16.0.1...lavamoat-core-v16.1.0) (2024-10-11)


### Features

* **core:** export endowmentsToolkit from the root ([4abfade](https://github.com/LavaMoat/LavaMoat/commit/4abfade71ca4f7473ead3d2c48426dd4a7293f76))


### Bug Fixes

* **deps:** update babel monorepo to v7.25.7 ([1ee84bf](https://github.com/LavaMoat/LavaMoat/commit/1ee84bf754b470781ee77bc299a797033b01d7ab))
* **deps:** update babel monorepo to v7.25.8 ([1dcb35e](https://github.com/LavaMoat/LavaMoat/commit/1dcb35e023823710343b5f0a4ca589cdfe647e7d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^8.0.1 to ^8.0.2

## [16.0.1](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v16.0.0...lavamoat-core-v16.0.1) (2024-09-11)


### Bug Fixes

* **deps:** update babel monorepo to v7.25.4 ([6b59ee5](https://github.com/LavaMoat/LavaMoat/commit/6b59ee5fe7436ea8f2b84260b6fb3e4a02022657))
* **deps:** update babel monorepo to v7.25.6 ([6a42125](https://github.com/LavaMoat/LavaMoat/commit/6a4212562b7e2e8f62af99d0a3f504c13e6f8283))
* **deps:** update dependency ses to v1.7.0 ([#1262](https://github.com/LavaMoat/LavaMoat/issues/1262)) ([0209007](https://github.com/LavaMoat/LavaMoat/commit/0209007898d9d1a288832dc1b903720735d3558d))
* **deps:** update dependency ses to v1.8.0 ([7e5bece](https://github.com/LavaMoat/LavaMoat/commit/7e5bece4a1c2cdaf7890c8750d26eadd495a1a52))
* **deps:** update dependency type-fest to v4.25.0 ([a5c8d3e](https://github.com/LavaMoat/LavaMoat/commit/a5c8d3e2c34fa9ecfaf94c5f8daa3d8e626fd7d2))
* **deps:** update dependency type-fest to v4.26.0 ([f4051f9](https://github.com/LavaMoat/LavaMoat/commit/f4051f9332c9cb4a9d457faacf4a2905ad3e869e))
* **deps:** update dependency type-fest to v4.26.1 ([6172f93](https://github.com/LavaMoat/LavaMoat/commit/6172f935be3f00bff84d4f458c7f98b6ca89db40))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^8.0.0 to ^8.0.1

## [16.0.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.4.0...lavamoat-core-v16.0.0) (2024-08-15)


### ⚠ BREAKING CHANGES

* **node:** remove support for Node.js v16
* **browserify:** remove support for Node.js v16
* **perf:** remove support for Node.js v16
* **tofu:** remove support for Node.js v16
* **webpack:** remove support for Node.js v16
* **core:** remove support for Node.js v16

### Features

* **core:** make makeMinimalViewOfRef usage in builtin attenuation consistent with globals for negative policy overrides, moving implementation to endowmentsToolkit as a side-effect desireable for webpack plugin ([c0c91fc](https://github.com/LavaMoat/LavaMoat/commit/c0c91fc1b857ccd8d61891c342a080641edbbc86))
* global store with attenuation support ([#1158](https://github.com/LavaMoat/LavaMoat/issues/1158)) ([f7175a6](https://github.com/LavaMoat/LavaMoat/commit/f7175a6de366cc975ab158c631dbef16cb346fde))


### Bug Fixes

* **deps:** update babel monorepo ([0880e2e](https://github.com/LavaMoat/LavaMoat/commit/0880e2edde6e8f661e4fdebddcb47e585a43b469))
* **deps:** update babel monorepo ([d9d40b4](https://github.com/LavaMoat/LavaMoat/commit/d9d40b4e5358734bd9fdd680a5b8048d9efbc55c))
* **deps:** update babel monorepo ([b6aa714](https://github.com/LavaMoat/LavaMoat/commit/b6aa71446e00e9e201fad90abdc847d12b0d27a0))
* **deps:** update dependency type-fest to v4.23.0 ([d04e1f3](https://github.com/LavaMoat/LavaMoat/commit/d04e1f33af0931598443cbbf102020906cbd9b92))
* **deps:** update dependency type-fest to v4.24.0 ([c735909](https://github.com/LavaMoat/LavaMoat/commit/c73590938207181ccec21727a5f11b8df2f2b7c0))


### Miscellaneous Chores

* **browserify:** remove support for Node.js v16 ([6ca05ba](https://github.com/LavaMoat/LavaMoat/commit/6ca05baa80bf7b022255b8ef476577343e514018))
* **core:** remove support for Node.js v16 ([6ca05ba](https://github.com/LavaMoat/LavaMoat/commit/6ca05baa80bf7b022255b8ef476577343e514018))
* **node:** remove support for Node.js v16 ([6ca05ba](https://github.com/LavaMoat/LavaMoat/commit/6ca05baa80bf7b022255b8ef476577343e514018))
* **perf:** remove support for Node.js v16 ([6ca05ba](https://github.com/LavaMoat/LavaMoat/commit/6ca05baa80bf7b022255b8ef476577343e514018))
* **tofu:** remove support for Node.js v16 ([6ca05ba](https://github.com/LavaMoat/LavaMoat/commit/6ca05baa80bf7b022255b8ef476577343e514018))
* **webpack:** remove support for Node.js v16 ([6ca05ba](https://github.com/LavaMoat/LavaMoat/commit/6ca05baa80bf7b022255b8ef476577343e514018))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.3.0 to ^8.0.0

## [15.4.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.3.0...lavamoat-core-v15.4.0) (2024-07-11)


### Features

* **core:** nodejs 22 support ([8722914](https://github.com/LavaMoat/LavaMoat/commit/87229141a2f846247c3f371529dafacfa54b5b04))


### Bug Fixes

* **core:** udpate lockdown.umd.js ([236bb91](https://github.com/LavaMoat/LavaMoat/commit/236bb91014ba3f6bcf055b043b319436f608b208))
* **deps:** update babel monorepo to v7.24.5 ([7e466bd](https://github.com/LavaMoat/LavaMoat/commit/7e466bd5718a0a1b92df24a2d023c0bb1f54b872))
* **deps:** update babel monorepo to v7.24.6 ([f6d450f](https://github.com/LavaMoat/LavaMoat/commit/f6d450fa48c8f166dac72a2b606429dafa5a70c4))
* **deps:** update dependency ses to v1.5.0 ([9b871f7](https://github.com/LavaMoat/LavaMoat/commit/9b871f7623474d8f626042a948a5efb082918d13))
* **deps:** update dependency type-fest to v4.14.0 ([1321a58](https://github.com/LavaMoat/LavaMoat/commit/1321a58964f36af95b30a547154a060edb63d009))
* **deps:** update dependency type-fest to v4.15.0 ([c48f8e3](https://github.com/LavaMoat/LavaMoat/commit/c48f8e31c2f0bfc5e8baff190ea7afeef11d205b))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.2.3 to ^7.3.0

## [15.3.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.2.1...lavamoat-core-v15.3.0) (2024-03-26)


### Features

* **core:** add external package name fallback function to options in generatePolicy, use it in webpack ([8a3a0a6](https://github.com/LavaMoat/LavaMoat/commit/8a3a0a621eba439d028a5c185f898441a7888695))


### Bug Fixes

* **core:** remove circular ref to ambient.ts ([b370419](https://github.com/LavaMoat/LavaMoat/commit/b3704195a8a85aa88a2057dc5381cd9d297689cb))
* **core:** update LavamoatModuleRecord to use default initializer args ([ff3991c](https://github.com/LavaMoat/LavaMoat/commit/ff3991cce7962bd9d004024c7bb7306288882f62))
* **core:** update vendored lockdown.umd.js ([6a062e6](https://github.com/LavaMoat/LavaMoat/commit/6a062e6521ec28f876742bc723869b5782756f7f))
* **deps:** update dependency type-fest to v4.10.3 ([95c0ae3](https://github.com/LavaMoat/LavaMoat/commit/95c0ae39d39fd75c4f5b487f5a5bcfdc78bf046e))
* **deps:** update dependency type-fest to v4.12.0 ([29d157c](https://github.com/LavaMoat/LavaMoat/commit/29d157cea5885ad3a3b919a305fd63a6a216508f))
* **deps:** update dependency type-fest to v4.13.1 ([ec89820](https://github.com/LavaMoat/LavaMoat/commit/ec898201439590242b27ff0c122369a9044386bf))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.2.2 to ^7.2.3

## [15.2.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.1.2...lavamoat-core-v15.2.0) (2024-02-29)


### Features

* **core:** ESM support in policy generation ([60dc4fa](https://github.com/LavaMoat/LavaMoat/commit/60dc4fa750ffea336f23baaee7f82ea21d2ca8e3))
* **core:** return attempted path when parsing JSON of policy fails ([ea7f3d4](https://github.com/LavaMoat/LavaMoat/commit/ea7f3d49c42e57723707eefd3c399943344077cc))
* **core:** turn off localeTaming in ses lockdown by default ([e37582f](https://github.com/LavaMoat/LavaMoat/commit/e37582f201070bfaa734f378aa6b851892adc684))
* **webpack:** policy loading, generation and overrides put together ([1bf3702](https://github.com/LavaMoat/LavaMoat/commit/1bf370270c91afafa20b6331b0b478b16cd1b55b))


### Bug Fixes

* **core/test:** platform-agnostic line separator ([0a898a3](https://github.com/LavaMoat/LavaMoat/commit/0a898a3e231b4281d6bd8e5543e5ead7c8f28511))
* **core:** detect ESM/CJS imports properly ([c2c37e2](https://github.com/LavaMoat/LavaMoat/commit/c2c37e235d67a8f3ac17fed6f9475481010ef881))
* **core:** export types from generatePolicy ([b999545](https://github.com/LavaMoat/LavaMoat/commit/b999545567e6673b42ed6b2c34153d84d7a4b283))
* **webpack:** fix typescript complaints ([fc41eda](https://github.com/LavaMoat/LavaMoat/commit/fc41eda86bfd680fbeadce72954b787864c2884f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.2.0 to ^7.2.1

## [15.1.2](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.1.1...lavamoat-core-v15.1.2) (2024-02-07)


### Bug Fixes

* **core:** update LavamoatModuleRecord ([152534d](https://github.com/LavaMoat/LavaMoat/commit/152534debcc869d72dab50e7e6b031578d13324c))
* **deps:** update dependency @babel/types to v7.23.9 ([c2f91e9](https://github.com/LavaMoat/LavaMoat/commit/c2f91e9a3c00ff9cf47eb8d7a4eb1ace7e155c64))
* **deps:** update dependency json-stable-stringify to v1.1.1 ([7d28e79](https://github.com/LavaMoat/LavaMoat/commit/7d28e79a5430f1f7c3987fc128e800efe590dd2a))
* **deps:** update dependency type-fest to v4.10.0 ([9f2cf3c](https://github.com/LavaMoat/LavaMoat/commit/9f2cf3cb3e00fc5184268bedb6967ffc8d29d066))
* **deps:** update dependency type-fest to v4.10.1 ([36567e7](https://github.com/LavaMoat/LavaMoat/commit/36567e7f54efab0efd2021b9f82b5e4e4c77fe4d))
* **deps:** update dependency type-fest to v4.10.2 ([1580ed9](https://github.com/LavaMoat/LavaMoat/commit/1580ed967085ae277384fcee3eac32ab9930adcd))
* **deps:** update dependency type-fest to v4.9.0 ([70e9ffd](https://github.com/LavaMoat/LavaMoat/commit/70e9ffdf740a7d79cee9d583a55188e4ab02617d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.1.0 to ^7.2.0

## [15.1.1](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.1.0...lavamoat-core-v15.1.1) (2024-01-18)


### Bug Fixes

* **core:** update SES to v1.1.0 in core ([29ad47d](https://github.com/LavaMoat/LavaMoat/commit/29ad47d0a80014c2fe37433734a853309d065c69))

## [15.1.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v15.0.0...lavamoat-core-v15.1.0) (2024-01-18)


### Features

* **core:** ship some types ([#732](https://github.com/LavaMoat/LavaMoat/issues/732)) ([d5de381](https://github.com/LavaMoat/LavaMoat/commit/d5de381edccb622b81dd02f9bd59cae605e71cdf))


### Bug Fixes

* **core:** add better types to policy loading and merging functions ([db799d1](https://github.com/LavaMoat/LavaMoat/commit/db799d17633a638a5a76ec52cb788ef705ae6f77))
* **core:** update LavaMoatPolicy types ([d9292ca](https://github.com/LavaMoat/LavaMoat/commit/d9292ca7b99a0eedc215670cb1791f6dd0c3ce07))
* **deps:** pin dependencies ([4006c1f](https://github.com/LavaMoat/LavaMoat/commit/4006c1f386c3024e8a8092ded9b98ede20de084e))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^7.0.0 to ^7.1.0

## [15.0.0](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v14.4.1...lavamoat-core-v15.0.0) (2023-10-18)


### ⚠ BREAKING CHANGES

* The minimum supported Node.js version is now v16.20.0.

### Features

* **core:** add overrideTaming: 'severe' for improved developer experience under lavamoat ([#730](https://github.com/LavaMoat/LavaMoat/issues/730)) ([20e4f76](https://github.com/LavaMoat/LavaMoat/commit/20e4f764dfdabcf21c7e72ad45fcfeaf45fd2b6c))
* node20 ([ef3a0da](https://github.com/LavaMoat/LavaMoat/commit/ef3a0da9960d7f5734e3d4180ebafdae2432a260))


### Bug Fixes

* drop Node.js v14 ([#729](https://github.com/LavaMoat/LavaMoat/issues/729)) ([10c667b](https://github.com/LavaMoat/LavaMoat/commit/10c667bd88eaabf60a8fd8e4493cc7676848b201))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^6.2.1 to ^7.0.0

## [14.4.1](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v14.4.0...lavamoat-core-v14.4.1) (2023-09-14)


### Bug Fixes

* **core,perf:** bump ses to 0.18.7 and reenable lib:ses script ([986fc1f](https://github.com/LavaMoat/LavaMoat/commit/986fc1f9c97e083901b1dfda7e7a8ba298aa4c8d))
* **core,perf:** bump ses to 0.18.8 ([d7a3b4d](https://github.com/LavaMoat/LavaMoat/commit/d7a3b4dc6ccf019673029c849dc59312c0410692))
* normalize all package versions ([0800c11](https://github.com/LavaMoat/LavaMoat/commit/0800c113c3504af312d904c48eb9a6844b10d6b1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^6.0.3 to ^6.2.1

## [14.2.3](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v14.2.2...lavamoat-core-v14.2.3) (2023-09-13)


### Bug Fixes

* **core,perf:** bump ses to 0.18.8 ([d7a3b4d](https://github.com/LavaMoat/LavaMoat/commit/d7a3b4dc6ccf019673029c849dc59312c0410692))

## [14.2.2](https://github.com/LavaMoat/LavaMoat/compare/lavamoat-core-v14.2.1...lavamoat-core-v14.2.2) (2023-09-08)


### Bug Fixes

* **core,perf:** bump ses to 0.18.7 and reenable lib:ses script ([986fc1f](https://github.com/LavaMoat/LavaMoat/commit/986fc1f9c97e083901b1dfda7e7a8ba298aa4c8d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * lavamoat-tofu bumped from ^6.0.2 to ^6.0.3
