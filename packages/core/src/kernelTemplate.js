// LavaMoat Prelude
(function() {

  return createKernel


  function createKernel ({ lavamoatConfig, loadModuleData, getRelativeModuleId, prepareModuleInitializerArgs }) {
    const debugMode = __lavamoatDebugMode__

    // identify the globalRef
    const globalRef = (typeof globalThis !== 'undefined') ? globalThis : (typeof self !== 'undefined') ? self : global

    // create the SES rootRealm
    // "templateRequire" calls are inlined in "generatePrelude"
    // load-bearing semi-colon, do not remove
    ;templateRequire('ses')

    const lockdownOptions = {
      // gives a semi-high resolution timer
      dateTaming: 'unsafe',
      // gives code excessive introspection, but meh
      errorTaming: 'unsafe',
      // this is introduces non-determinism, but is otherwise safe
      mathTaming: 'unsafe',
      // ?
      // regExpTaming: 'unsafe',
    }

    lockdown(lockdownOptions)

    // initialize the kernel
    const createKernelCore = __createKernelCore__
    const kernel = createKernelCore({
      lavamoatConfig,
      loadModuleData,
      getRelativeModuleId,
      prepareModuleInitializerArgs,
      globalRef,
      debugMode,
    })
    return kernel
  }

})()
