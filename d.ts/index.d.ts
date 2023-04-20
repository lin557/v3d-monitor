/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface V3dControlBar {
  enabled: boolean
  position: string
  button: string[]
}

export interface V3dApplyParam {
  viewIndex?: number | undefined
  unique: string
  title: string
  loadText?: string
}

export interface DPlayerContextMenuItem {
  text: string
  link?: string | undefined
  click?: (() => void) | undefined
}

export interface V3dMonitorOptions {
  allowPause?: boolean | undefined
  autoRate?: boolean | undefined
  contextmenu?: DPlayerContextMenuItem[] | undefined
  order?: number
  screenshot?: boolean | undefined
  src: string
  title?: string | undefined
  loadText?: string | undefined
  unique?: string | undefined
  viewIndex?: number | undefined
  userData?: any | undefined
}

type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}

declare const V3dMonitor: __VLS_WithTemplateSlots<
  import('vue').DefineComponent<
    {
      closeAfterViewChange: {
        type: BooleanConstructor
        default: boolean
      }
      controlBar: {
        type: (BooleanConstructor | ObjectConstructor)[]
        default: boolean
      }
      count: {
        type: NumberConstructor
        default: number
      }
      duplicate: {
        type: BooleanConstructor
        default: boolean
      }
      focused: {
        type: BooleanConstructor
        default: boolean
      }
      closeTime: {
        type: NumberConstructor
        default: number
      }
      /**
       * 常驻工具栏
       */
      lockControl: {
        type: BooleanConstructor
        default: boolean
      }
      loopCreate: {
        type: BooleanConstructor
        default: boolean
      }
      theme: {
        type: StringConstructor
        default: string
      }
    },
    {
      apply: (param: V3dApplyParam) => any
      clear: () => void
      close: (index: number) => void
      filled: (fill: boolean) => void
      getEarlyView: () =>
        | ({
            new (...args: any[]): {
              $: import('vue').ComponentInternalInstance
              $data: {}
              $props: Partial<{
                fill: boolean
                border: boolean
                index: number
                lockControl: boolean
                options: Record<string, any>
                poster: string
              }> &
                Omit<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      border: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fill: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      index: {
                        type: NumberConstructor
                        default: number
                      }
                      lockControl: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
                          allowPause: boolean
                          autoplay: boolean
                          controls: boolean
                          contextmenu: never[]
                          hotkey: boolean
                          live: boolean
                          logo: undefined
                          loop: boolean
                          muted: boolean
                          mutex: boolean
                          preload: string
                          screenshot: boolean
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                    }>
                  > & {
                    onError?: ((...args: any[]) => any) | undefined
                    onAbort?: ((...args: any[]) => any) | undefined
                    onCanplay?: ((...args: any[]) => any) | undefined
                    onCanplaythrough?: ((...args: any[]) => any) | undefined
                    onDurationchange?: ((...args: any[]) => any) | undefined
                    onEmptied?: ((...args: any[]) => any) | undefined
                    onEnded?: ((...args: any[]) => any) | undefined
                    onLoadeddata?: ((...args: any[]) => any) | undefined
                    onLoadedmetadata?: ((...args: any[]) => any) | undefined
                    onLoadstart?: ((...args: any[]) => any) | undefined
                    onPause?: ((...args: any[]) => any) | undefined
                    onPlay?: ((...args: any[]) => any) | undefined
                    onPlaying?: ((...args: any[]) => any) | undefined
                    onProgress?: ((...args: any[]) => any) | undefined
                    onRatechange?: ((...args: any[]) => any) | undefined
                    onSeeked?: ((...args: any[]) => any) | undefined
                    onSeeking?: ((...args: any[]) => any) | undefined
                    onStalled?: ((...args: any[]) => any) | undefined
                    onSuspend?: ((...args: any[]) => any) | undefined
                    onTimeupdate?: ((...args: any[]) => any) | undefined
                    onVolumechange?: ((...args: any[]) => any) | undefined
                    onWaiting?: ((...args: any[]) => any) | undefined
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onScreenshot?: ((...args: any[]) => any) | undefined
                    onContextmenu_show?: ((...args: any[]) => any) | undefined
                    onContextmenu_hide?: ((...args: any[]) => any) | undefined
                    onNotice_show?: ((...args: any[]) => any) | undefined
                    onNotice_hide?: ((...args: any[]) => any) | undefined
                    onQuality_start?: ((...args: any[]) => any) | undefined
                    onQuality_end?: ((...args: any[]) => any) | undefined
                    onDestroy?: ((...args: any[]) => any) | undefined
                    onResize?: ((...args: any[]) => any) | undefined
                    onFullscreen?: ((...args: any[]) => any) | undefined
                    onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                  } & import('vue').VNodeProps &
                    import('vue').AllowedComponentProps &
                    import('vue').ComponentCustomProps,
                  | 'fill'
                  | 'lockControl'
                  | 'border'
                  | 'index'
                  | 'options'
                  | 'poster'
                >
              $attrs: {
                [x: string]: unknown
              }
              $refs: {
                [x: string]: unknown
              }
              $slots: Readonly<{
                [name: string]: import('vue').Slot | undefined
              }>
              $root:
                | import('vue').ComponentPublicInstance<
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    false,
                    import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string
                    >,
                    {}
                  >
                | null
              $parent:
                | import('vue').ComponentPublicInstance<
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    false,
                    import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string
                    >,
                    {}
                  >
                | null
              $emit: (
                event:
                  | 'progress'
                  | 'play'
                  | 'ready'
                  | 'timeupdate'
                  | 'fetch_start'
                  | 'abort'
                  | 'fetch_stop'
                  | 'canplay'
                  | 'canplaythrough'
                  | 'durationchange'
                  | 'emptied'
                  | 'ended'
                  | 'error'
                  | 'loadeddata'
                  | 'loadedmetadata'
                  | 'loadstart'
                  | 'mozaudioavailable'
                  | 'pause'
                  | 'playing'
                  | 'ratechange'
                  | 'seeked'
                  | 'seeking'
                  | 'stalled'
                  | 'suspend'
                  | 'volumechange'
                  | 'waiting'
                  | 'screenshot'
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen'
                  | 'fullscreen_cancel',
                ...args: any[]
              ) => void
              $el: any
              $options: import('vue').ComponentOptionsBase<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    border: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fill: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    index: {
                      type: NumberConstructor
                      default: number
                    }
                    lockControl: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
                        allowPause: boolean
                        autoplay: boolean
                        controls: boolean
                        contextmenu: never[]
                        hotkey: boolean
                        live: boolean
                        logo: undefined
                        loop: boolean
                        muted: boolean
                        mutex: boolean
                        preload: string
                        screenshot: boolean
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                  }>
                > & {
                  onError?: ((...args: any[]) => any) | undefined
                  onAbort?: ((...args: any[]) => any) | undefined
                  onCanplay?: ((...args: any[]) => any) | undefined
                  onCanplaythrough?: ((...args: any[]) => any) | undefined
                  onDurationchange?: ((...args: any[]) => any) | undefined
                  onEmptied?: ((...args: any[]) => any) | undefined
                  onEnded?: ((...args: any[]) => any) | undefined
                  onLoadeddata?: ((...args: any[]) => any) | undefined
                  onLoadedmetadata?: ((...args: any[]) => any) | undefined
                  onLoadstart?: ((...args: any[]) => any) | undefined
                  onPause?: ((...args: any[]) => any) | undefined
                  onPlay?: ((...args: any[]) => any) | undefined
                  onPlaying?: ((...args: any[]) => any) | undefined
                  onProgress?: ((...args: any[]) => any) | undefined
                  onRatechange?: ((...args: any[]) => any) | undefined
                  onSeeked?: ((...args: any[]) => any) | undefined
                  onSeeking?: ((...args: any[]) => any) | undefined
                  onStalled?: ((...args: any[]) => any) | undefined
                  onSuspend?: ((...args: any[]) => any) | undefined
                  onTimeupdate?: ((...args: any[]) => any) | undefined
                  onVolumechange?: ((...args: any[]) => any) | undefined
                  onWaiting?: ((...args: any[]) => any) | undefined
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onScreenshot?: ((...args: any[]) => any) | undefined
                  onContextmenu_show?: ((...args: any[]) => any) | undefined
                  onContextmenu_hide?: ((...args: any[]) => any) | undefined
                  onNotice_show?: ((...args: any[]) => any) | undefined
                  onNotice_hide?: ((...args: any[]) => any) | undefined
                  onQuality_start?: ((...args: any[]) => any) | undefined
                  onQuality_end?: ((...args: any[]) => any) | undefined
                  onDestroy?: ((...args: any[]) => any) | undefined
                  onResize?: ((...args: any[]) => any) | undefined
                  onFullscreen?: ((...args: any[]) => any) | undefined
                  onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                },
                {
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  index: () => number
                  muted: () => void
                  occupy: (order: number, unique: string, text: string) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (rate: number) => number
                  seek: (time: number) => void
                  snapshot: () => void
                  status: () => number
                  toggle: () => void
                  toggleScreen: () => void
                  trigger: (event: string) => void
                  volume: (
                    percentage?: number | undefined,
                    nonotice?: boolean | undefined
                  ) => number
                  unique: () => string | undefined
                },
                unknown,
                {},
                {},
                import('vue').ComponentOptionsMixin,
                import('vue').ComponentOptionsMixin,
                (
                  | 'progress'
                  | 'play'
                  | 'ready'
                  | 'timeupdate'
                  | 'fetch_start'
                  | 'abort'
                  | 'fetch_stop'
                  | 'canplay'
                  | 'canplaythrough'
                  | 'durationchange'
                  | 'emptied'
                  | 'ended'
                  | 'error'
                  | 'loadeddata'
                  | 'loadedmetadata'
                  | 'loadstart'
                  | 'mozaudioavailable'
                  | 'pause'
                  | 'playing'
                  | 'ratechange'
                  | 'seeked'
                  | 'seeking'
                  | 'stalled'
                  | 'suspend'
                  | 'volumechange'
                  | 'waiting'
                  | 'screenshot'
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen'
                  | 'fullscreen_cancel'
                )[],
                string,
                {
                  fill: boolean
                  border: boolean
                  index: number
                  lockControl: boolean
                  options: Record<string, any>
                  poster: string
                },
                {},
                string
              > & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined
                created?: ((() => void) | (() => void)[]) | undefined
                beforeMount?: ((() => void) | (() => void)[]) | undefined
                mounted?: ((() => void) | (() => void)[]) | undefined
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined
                updated?: ((() => void) | (() => void)[]) | undefined
                activated?: ((() => void) | (() => void)[]) | undefined
                deactivated?: ((() => void) | (() => void)[]) | undefined
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined
                destroyed?: ((() => void) | (() => void)[]) | undefined
                unmounted?: ((() => void) | (() => void)[]) | undefined
                renderTracked?:
                  | (
                      | ((e: import('vue').DebuggerEvent) => void)
                      | ((e: import('vue').DebuggerEvent) => void)[]
                    )
                  | undefined
                renderTriggered?:
                  | (
                      | ((e: import('vue').DebuggerEvent) => void)
                      | ((e: import('vue').DebuggerEvent) => void)[]
                    )
                  | undefined
                errorCaptured?:
                  | (
                      | ((
                          err: unknown,
                          instance:
                            | import('vue').ComponentPublicInstance<
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                false,
                                import('vue').ComponentOptionsBase<
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  {},
                                  {},
                                  string
                                >,
                                {}
                              >
                            | null,
                          info: string
                        ) => boolean | void)
                      | ((
                          err: unknown,
                          instance:
                            | import('vue').ComponentPublicInstance<
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                false,
                                import('vue').ComponentOptionsBase<
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  {},
                                  {},
                                  string
                                >,
                                {}
                              >
                            | null,
                          info: string
                        ) => boolean | void)[]
                    )
                  | undefined
              }
              $forceUpdate: () => void
              $nextTick: typeof import('vue').nextTick
              $watch<T extends string | ((...args: any) => any)>(
                source: T,
                cb: T extends (...args: any) => infer R
                  ? (args_0: R, args_1: R) => any
                  : (...args: any) => any,
                options?: import('vue').WatchOptions<boolean> | undefined
              ): import('vue').WatchStopHandle
            } & Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
                onError?: ((...args: any[]) => any) | undefined
                onAbort?: ((...args: any[]) => any) | undefined
                onCanplay?: ((...args: any[]) => any) | undefined
                onCanplaythrough?: ((...args: any[]) => any) | undefined
                onDurationchange?: ((...args: any[]) => any) | undefined
                onEmptied?: ((...args: any[]) => any) | undefined
                onEnded?: ((...args: any[]) => any) | undefined
                onLoadeddata?: ((...args: any[]) => any) | undefined
                onLoadedmetadata?: ((...args: any[]) => any) | undefined
                onLoadstart?: ((...args: any[]) => any) | undefined
                onPause?: ((...args: any[]) => any) | undefined
                onPlay?: ((...args: any[]) => any) | undefined
                onPlaying?: ((...args: any[]) => any) | undefined
                onProgress?: ((...args: any[]) => any) | undefined
                onRatechange?: ((...args: any[]) => any) | undefined
                onSeeked?: ((...args: any[]) => any) | undefined
                onSeeking?: ((...args: any[]) => any) | undefined
                onStalled?: ((...args: any[]) => any) | undefined
                onSuspend?: ((...args: any[]) => any) | undefined
                onTimeupdate?: ((...args: any[]) => any) | undefined
                onVolumechange?: ((...args: any[]) => any) | undefined
                onWaiting?: ((...args: any[]) => any) | undefined
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onScreenshot?: ((...args: any[]) => any) | undefined
                onContextmenu_show?: ((...args: any[]) => any) | undefined
                onContextmenu_hide?: ((...args: any[]) => any) | undefined
                onNotice_show?: ((...args: any[]) => any) | undefined
                onNotice_hide?: ((...args: any[]) => any) | undefined
                onQuality_start?: ((...args: any[]) => any) | undefined
                onQuality_end?: ((...args: any[]) => any) | undefined
                onDestroy?: ((...args: any[]) => any) | undefined
                onResize?: ((...args: any[]) => any) | undefined
                onFullscreen?: ((...args: any[]) => any) | undefined
                onFullscreen_cancel?: ((...args: any[]) => any) | undefined
              } & import('vue').ShallowUnwrapRef<{
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                focused: (focus?: boolean | undefined) => boolean | undefined
                index: () => number
                muted: () => void
                occupy: (order: number, unique: string, text: string) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number) => number
                seek: (time: number) => void
                snapshot: () => void
                status: () => number
                toggle: () => void
                toggleScreen: () => void
                trigger: (event: string) => void
                volume: (
                  percentage?: number | undefined,
                  nonotice?: boolean | undefined
                ) => number
                unique: () => string | undefined
              }> & {} & import('vue').ComponentCustomProperties & {}
            __isFragment?: undefined
            __isTeleport?: undefined
            __isSuspense?: undefined
          } & import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
              onError?: ((...args: any[]) => any) | undefined
              onAbort?: ((...args: any[]) => any) | undefined
              onCanplay?: ((...args: any[]) => any) | undefined
              onCanplaythrough?: ((...args: any[]) => any) | undefined
              onDurationchange?: ((...args: any[]) => any) | undefined
              onEmptied?: ((...args: any[]) => any) | undefined
              onEnded?: ((...args: any[]) => any) | undefined
              onLoadeddata?: ((...args: any[]) => any) | undefined
              onLoadedmetadata?: ((...args: any[]) => any) | undefined
              onLoadstart?: ((...args: any[]) => any) | undefined
              onPause?: ((...args: any[]) => any) | undefined
              onPlay?: ((...args: any[]) => any) | undefined
              onPlaying?: ((...args: any[]) => any) | undefined
              onProgress?: ((...args: any[]) => any) | undefined
              onRatechange?: ((...args: any[]) => any) | undefined
              onSeeked?: ((...args: any[]) => any) | undefined
              onSeeking?: ((...args: any[]) => any) | undefined
              onStalled?: ((...args: any[]) => any) | undefined
              onSuspend?: ((...args: any[]) => any) | undefined
              onTimeupdate?: ((...args: any[]) => any) | undefined
              onVolumechange?: ((...args: any[]) => any) | undefined
              onWaiting?: ((...args: any[]) => any) | undefined
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onScreenshot?: ((...args: any[]) => any) | undefined
              onContextmenu_show?: ((...args: any[]) => any) | undefined
              onContextmenu_hide?: ((...args: any[]) => any) | undefined
              onNotice_show?: ((...args: any[]) => any) | undefined
              onNotice_hide?: ((...args: any[]) => any) | undefined
              onQuality_start?: ((...args: any[]) => any) | undefined
              onQuality_end?: ((...args: any[]) => any) | undefined
              onDestroy?: ((...args: any[]) => any) | undefined
              onResize?: ((...args: any[]) => any) | undefined
              onFullscreen?: ((...args: any[]) => any) | undefined
              onFullscreen_cancel?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              focused: (focus?: boolean | undefined) => boolean | undefined
              index: () => number
              muted: () => void
              occupy: (order: number, unique: string, text: string) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number) => number
              seek: (time: number) => void
              snapshot: () => void
              status: () => number
              toggle: () => void
              toggleScreen: () => void
              trigger: (event: string) => void
              volume: (
                percentage?: number | undefined,
                nonotice?: boolean | undefined
              ) => number
              unique: () => string | undefined
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel'
            )[],
            | 'progress'
            | 'play'
            | 'ready'
            | 'timeupdate'
            | 'fetch_start'
            | 'abort'
            | 'fetch_stop'
            | 'canplay'
            | 'canplaythrough'
            | 'durationchange'
            | 'emptied'
            | 'ended'
            | 'error'
            | 'loadeddata'
            | 'loadedmetadata'
            | 'loadstart'
            | 'mozaudioavailable'
            | 'pause'
            | 'playing'
            | 'ratechange'
            | 'seeked'
            | 'seeking'
            | 'stalled'
            | 'suspend'
            | 'volumechange'
            | 'waiting'
            | 'screenshot'
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen'
            | 'fullscreen_cancel',
            {
              fill: boolean
              border: boolean
              index: number
              lockControl: boolean
              options: Record<string, any>
              poster: string
            },
            {},
            string
          > &
            import('vue').VNodeProps &
            import('vue').AllowedComponentProps &
            import('vue').ComponentCustomProps &
            (new () => {
              $slots: {
                ready: (_: {}) => any
                loading: (_: {}) => any
              }
            }))
        | null
      getIdleView: () =>
        | ({
            new (...args: any[]): {
              $: import('vue').ComponentInternalInstance
              $data: {}
              $props: Partial<{
                fill: boolean
                border: boolean
                index: number
                lockControl: boolean
                options: Record<string, any>
                poster: string
              }> &
                Omit<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      border: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fill: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      index: {
                        type: NumberConstructor
                        default: number
                      }
                      lockControl: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
                          allowPause: boolean
                          autoplay: boolean
                          controls: boolean
                          contextmenu: never[]
                          hotkey: boolean
                          live: boolean
                          logo: undefined
                          loop: boolean
                          muted: boolean
                          mutex: boolean
                          preload: string
                          screenshot: boolean
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                    }>
                  > & {
                    onError?: ((...args: any[]) => any) | undefined
                    onAbort?: ((...args: any[]) => any) | undefined
                    onCanplay?: ((...args: any[]) => any) | undefined
                    onCanplaythrough?: ((...args: any[]) => any) | undefined
                    onDurationchange?: ((...args: any[]) => any) | undefined
                    onEmptied?: ((...args: any[]) => any) | undefined
                    onEnded?: ((...args: any[]) => any) | undefined
                    onLoadeddata?: ((...args: any[]) => any) | undefined
                    onLoadedmetadata?: ((...args: any[]) => any) | undefined
                    onLoadstart?: ((...args: any[]) => any) | undefined
                    onPause?: ((...args: any[]) => any) | undefined
                    onPlay?: ((...args: any[]) => any) | undefined
                    onPlaying?: ((...args: any[]) => any) | undefined
                    onProgress?: ((...args: any[]) => any) | undefined
                    onRatechange?: ((...args: any[]) => any) | undefined
                    onSeeked?: ((...args: any[]) => any) | undefined
                    onSeeking?: ((...args: any[]) => any) | undefined
                    onStalled?: ((...args: any[]) => any) | undefined
                    onSuspend?: ((...args: any[]) => any) | undefined
                    onTimeupdate?: ((...args: any[]) => any) | undefined
                    onVolumechange?: ((...args: any[]) => any) | undefined
                    onWaiting?: ((...args: any[]) => any) | undefined
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onScreenshot?: ((...args: any[]) => any) | undefined
                    onContextmenu_show?: ((...args: any[]) => any) | undefined
                    onContextmenu_hide?: ((...args: any[]) => any) | undefined
                    onNotice_show?: ((...args: any[]) => any) | undefined
                    onNotice_hide?: ((...args: any[]) => any) | undefined
                    onQuality_start?: ((...args: any[]) => any) | undefined
                    onQuality_end?: ((...args: any[]) => any) | undefined
                    onDestroy?: ((...args: any[]) => any) | undefined
                    onResize?: ((...args: any[]) => any) | undefined
                    onFullscreen?: ((...args: any[]) => any) | undefined
                    onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                  } & import('vue').VNodeProps &
                    import('vue').AllowedComponentProps &
                    import('vue').ComponentCustomProps,
                  | 'fill'
                  | 'lockControl'
                  | 'border'
                  | 'index'
                  | 'options'
                  | 'poster'
                >
              $attrs: {
                [x: string]: unknown
              }
              $refs: {
                [x: string]: unknown
              }
              $slots: Readonly<{
                [name: string]: import('vue').Slot | undefined
              }>
              $root:
                | import('vue').ComponentPublicInstance<
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    false,
                    import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string
                    >,
                    {}
                  >
                | null
              $parent:
                | import('vue').ComponentPublicInstance<
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    false,
                    import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string
                    >,
                    {}
                  >
                | null
              $emit: (
                event:
                  | 'progress'
                  | 'play'
                  | 'ready'
                  | 'timeupdate'
                  | 'fetch_start'
                  | 'abort'
                  | 'fetch_stop'
                  | 'canplay'
                  | 'canplaythrough'
                  | 'durationchange'
                  | 'emptied'
                  | 'ended'
                  | 'error'
                  | 'loadeddata'
                  | 'loadedmetadata'
                  | 'loadstart'
                  | 'mozaudioavailable'
                  | 'pause'
                  | 'playing'
                  | 'ratechange'
                  | 'seeked'
                  | 'seeking'
                  | 'stalled'
                  | 'suspend'
                  | 'volumechange'
                  | 'waiting'
                  | 'screenshot'
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen'
                  | 'fullscreen_cancel',
                ...args: any[]
              ) => void
              $el: any
              $options: import('vue').ComponentOptionsBase<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    border: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fill: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    index: {
                      type: NumberConstructor
                      default: number
                    }
                    lockControl: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
                        allowPause: boolean
                        autoplay: boolean
                        controls: boolean
                        contextmenu: never[]
                        hotkey: boolean
                        live: boolean
                        logo: undefined
                        loop: boolean
                        muted: boolean
                        mutex: boolean
                        preload: string
                        screenshot: boolean
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                  }>
                > & {
                  onError?: ((...args: any[]) => any) | undefined
                  onAbort?: ((...args: any[]) => any) | undefined
                  onCanplay?: ((...args: any[]) => any) | undefined
                  onCanplaythrough?: ((...args: any[]) => any) | undefined
                  onDurationchange?: ((...args: any[]) => any) | undefined
                  onEmptied?: ((...args: any[]) => any) | undefined
                  onEnded?: ((...args: any[]) => any) | undefined
                  onLoadeddata?: ((...args: any[]) => any) | undefined
                  onLoadedmetadata?: ((...args: any[]) => any) | undefined
                  onLoadstart?: ((...args: any[]) => any) | undefined
                  onPause?: ((...args: any[]) => any) | undefined
                  onPlay?: ((...args: any[]) => any) | undefined
                  onPlaying?: ((...args: any[]) => any) | undefined
                  onProgress?: ((...args: any[]) => any) | undefined
                  onRatechange?: ((...args: any[]) => any) | undefined
                  onSeeked?: ((...args: any[]) => any) | undefined
                  onSeeking?: ((...args: any[]) => any) | undefined
                  onStalled?: ((...args: any[]) => any) | undefined
                  onSuspend?: ((...args: any[]) => any) | undefined
                  onTimeupdate?: ((...args: any[]) => any) | undefined
                  onVolumechange?: ((...args: any[]) => any) | undefined
                  onWaiting?: ((...args: any[]) => any) | undefined
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onScreenshot?: ((...args: any[]) => any) | undefined
                  onContextmenu_show?: ((...args: any[]) => any) | undefined
                  onContextmenu_hide?: ((...args: any[]) => any) | undefined
                  onNotice_show?: ((...args: any[]) => any) | undefined
                  onNotice_hide?: ((...args: any[]) => any) | undefined
                  onQuality_start?: ((...args: any[]) => any) | undefined
                  onQuality_end?: ((...args: any[]) => any) | undefined
                  onDestroy?: ((...args: any[]) => any) | undefined
                  onResize?: ((...args: any[]) => any) | undefined
                  onFullscreen?: ((...args: any[]) => any) | undefined
                  onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                },
                {
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  index: () => number
                  muted: () => void
                  occupy: (order: number, unique: string, text: string) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (rate: number) => number
                  seek: (time: number) => void
                  snapshot: () => void
                  status: () => number
                  toggle: () => void
                  toggleScreen: () => void
                  trigger: (event: string) => void
                  volume: (
                    percentage?: number | undefined,
                    nonotice?: boolean | undefined
                  ) => number
                  unique: () => string | undefined
                },
                unknown,
                {},
                {},
                import('vue').ComponentOptionsMixin,
                import('vue').ComponentOptionsMixin,
                (
                  | 'progress'
                  | 'play'
                  | 'ready'
                  | 'timeupdate'
                  | 'fetch_start'
                  | 'abort'
                  | 'fetch_stop'
                  | 'canplay'
                  | 'canplaythrough'
                  | 'durationchange'
                  | 'emptied'
                  | 'ended'
                  | 'error'
                  | 'loadeddata'
                  | 'loadedmetadata'
                  | 'loadstart'
                  | 'mozaudioavailable'
                  | 'pause'
                  | 'playing'
                  | 'ratechange'
                  | 'seeked'
                  | 'seeking'
                  | 'stalled'
                  | 'suspend'
                  | 'volumechange'
                  | 'waiting'
                  | 'screenshot'
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen'
                  | 'fullscreen_cancel'
                )[],
                string,
                {
                  fill: boolean
                  border: boolean
                  index: number
                  lockControl: boolean
                  options: Record<string, any>
                  poster: string
                },
                {},
                string
              > & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined
                created?: ((() => void) | (() => void)[]) | undefined
                beforeMount?: ((() => void) | (() => void)[]) | undefined
                mounted?: ((() => void) | (() => void)[]) | undefined
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined
                updated?: ((() => void) | (() => void)[]) | undefined
                activated?: ((() => void) | (() => void)[]) | undefined
                deactivated?: ((() => void) | (() => void)[]) | undefined
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined
                destroyed?: ((() => void) | (() => void)[]) | undefined
                unmounted?: ((() => void) | (() => void)[]) | undefined
                renderTracked?:
                  | (
                      | ((e: import('vue').DebuggerEvent) => void)
                      | ((e: import('vue').DebuggerEvent) => void)[]
                    )
                  | undefined
                renderTriggered?:
                  | (
                      | ((e: import('vue').DebuggerEvent) => void)
                      | ((e: import('vue').DebuggerEvent) => void)[]
                    )
                  | undefined
                errorCaptured?:
                  | (
                      | ((
                          err: unknown,
                          instance:
                            | import('vue').ComponentPublicInstance<
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                false,
                                import('vue').ComponentOptionsBase<
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  {},
                                  {},
                                  string
                                >,
                                {}
                              >
                            | null,
                          info: string
                        ) => boolean | void)
                      | ((
                          err: unknown,
                          instance:
                            | import('vue').ComponentPublicInstance<
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                false,
                                import('vue').ComponentOptionsBase<
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  {},
                                  {},
                                  string
                                >,
                                {}
                              >
                            | null,
                          info: string
                        ) => boolean | void)[]
                    )
                  | undefined
              }
              $forceUpdate: () => void
              $nextTick: typeof import('vue').nextTick
              $watch<T extends string | ((...args: any) => any)>(
                source: T,
                cb: T extends (...args: any) => infer R
                  ? (args_0: R, args_1: R) => any
                  : (...args: any) => any,
                options?: import('vue').WatchOptions<boolean> | undefined
              ): import('vue').WatchStopHandle
            } & Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
                onError?: ((...args: any[]) => any) | undefined
                onAbort?: ((...args: any[]) => any) | undefined
                onCanplay?: ((...args: any[]) => any) | undefined
                onCanplaythrough?: ((...args: any[]) => any) | undefined
                onDurationchange?: ((...args: any[]) => any) | undefined
                onEmptied?: ((...args: any[]) => any) | undefined
                onEnded?: ((...args: any[]) => any) | undefined
                onLoadeddata?: ((...args: any[]) => any) | undefined
                onLoadedmetadata?: ((...args: any[]) => any) | undefined
                onLoadstart?: ((...args: any[]) => any) | undefined
                onPause?: ((...args: any[]) => any) | undefined
                onPlay?: ((...args: any[]) => any) | undefined
                onPlaying?: ((...args: any[]) => any) | undefined
                onProgress?: ((...args: any[]) => any) | undefined
                onRatechange?: ((...args: any[]) => any) | undefined
                onSeeked?: ((...args: any[]) => any) | undefined
                onSeeking?: ((...args: any[]) => any) | undefined
                onStalled?: ((...args: any[]) => any) | undefined
                onSuspend?: ((...args: any[]) => any) | undefined
                onTimeupdate?: ((...args: any[]) => any) | undefined
                onVolumechange?: ((...args: any[]) => any) | undefined
                onWaiting?: ((...args: any[]) => any) | undefined
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onScreenshot?: ((...args: any[]) => any) | undefined
                onContextmenu_show?: ((...args: any[]) => any) | undefined
                onContextmenu_hide?: ((...args: any[]) => any) | undefined
                onNotice_show?: ((...args: any[]) => any) | undefined
                onNotice_hide?: ((...args: any[]) => any) | undefined
                onQuality_start?: ((...args: any[]) => any) | undefined
                onQuality_end?: ((...args: any[]) => any) | undefined
                onDestroy?: ((...args: any[]) => any) | undefined
                onResize?: ((...args: any[]) => any) | undefined
                onFullscreen?: ((...args: any[]) => any) | undefined
                onFullscreen_cancel?: ((...args: any[]) => any) | undefined
              } & import('vue').ShallowUnwrapRef<{
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                focused: (focus?: boolean | undefined) => boolean | undefined
                index: () => number
                muted: () => void
                occupy: (order: number, unique: string, text: string) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number) => number
                seek: (time: number) => void
                snapshot: () => void
                status: () => number
                toggle: () => void
                toggleScreen: () => void
                trigger: (event: string) => void
                volume: (
                  percentage?: number | undefined,
                  nonotice?: boolean | undefined
                ) => number
                unique: () => string | undefined
              }> & {} & import('vue').ComponentCustomProperties & {}
            __isFragment?: undefined
            __isTeleport?: undefined
            __isSuspense?: undefined
          } & import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
              onError?: ((...args: any[]) => any) | undefined
              onAbort?: ((...args: any[]) => any) | undefined
              onCanplay?: ((...args: any[]) => any) | undefined
              onCanplaythrough?: ((...args: any[]) => any) | undefined
              onDurationchange?: ((...args: any[]) => any) | undefined
              onEmptied?: ((...args: any[]) => any) | undefined
              onEnded?: ((...args: any[]) => any) | undefined
              onLoadeddata?: ((...args: any[]) => any) | undefined
              onLoadedmetadata?: ((...args: any[]) => any) | undefined
              onLoadstart?: ((...args: any[]) => any) | undefined
              onPause?: ((...args: any[]) => any) | undefined
              onPlay?: ((...args: any[]) => any) | undefined
              onPlaying?: ((...args: any[]) => any) | undefined
              onProgress?: ((...args: any[]) => any) | undefined
              onRatechange?: ((...args: any[]) => any) | undefined
              onSeeked?: ((...args: any[]) => any) | undefined
              onSeeking?: ((...args: any[]) => any) | undefined
              onStalled?: ((...args: any[]) => any) | undefined
              onSuspend?: ((...args: any[]) => any) | undefined
              onTimeupdate?: ((...args: any[]) => any) | undefined
              onVolumechange?: ((...args: any[]) => any) | undefined
              onWaiting?: ((...args: any[]) => any) | undefined
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onScreenshot?: ((...args: any[]) => any) | undefined
              onContextmenu_show?: ((...args: any[]) => any) | undefined
              onContextmenu_hide?: ((...args: any[]) => any) | undefined
              onNotice_show?: ((...args: any[]) => any) | undefined
              onNotice_hide?: ((...args: any[]) => any) | undefined
              onQuality_start?: ((...args: any[]) => any) | undefined
              onQuality_end?: ((...args: any[]) => any) | undefined
              onDestroy?: ((...args: any[]) => any) | undefined
              onResize?: ((...args: any[]) => any) | undefined
              onFullscreen?: ((...args: any[]) => any) | undefined
              onFullscreen_cancel?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              focused: (focus?: boolean | undefined) => boolean | undefined
              index: () => number
              muted: () => void
              occupy: (order: number, unique: string, text: string) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number) => number
              seek: (time: number) => void
              snapshot: () => void
              status: () => number
              toggle: () => void
              toggleScreen: () => void
              trigger: (event: string) => void
              volume: (
                percentage?: number | undefined,
                nonotice?: boolean | undefined
              ) => number
              unique: () => string | undefined
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel'
            )[],
            | 'progress'
            | 'play'
            | 'ready'
            | 'timeupdate'
            | 'fetch_start'
            | 'abort'
            | 'fetch_stop'
            | 'canplay'
            | 'canplaythrough'
            | 'durationchange'
            | 'emptied'
            | 'ended'
            | 'error'
            | 'loadeddata'
            | 'loadedmetadata'
            | 'loadstart'
            | 'mozaudioavailable'
            | 'pause'
            | 'playing'
            | 'ratechange'
            | 'seeked'
            | 'seeking'
            | 'stalled'
            | 'suspend'
            | 'volumechange'
            | 'waiting'
            | 'screenshot'
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen'
            | 'fullscreen_cancel',
            {
              fill: boolean
              border: boolean
              index: number
              lockControl: boolean
              options: Record<string, any>
              poster: string
            },
            {},
            string
          > &
            import('vue').VNodeProps &
            import('vue').AllowedComponentProps &
            import('vue').ComponentCustomProps &
            (new () => {
              $slots: {
                ready: (_: {}) => any
                loading: (_: {}) => any
              }
            }))
        | undefined
      getName: (url: string | undefined) => string
      getPlayerById: (id: number) => {
        new (...args: any[]): {
          $: import('vue').ComponentInternalInstance
          $data: {}
          $props: Partial<{
            fill: boolean
            border: boolean
            index: number
            lockControl: boolean
            options: Record<string, any>
            poster: string
          }> &
            Omit<
              Readonly<
                import('vue').ExtractPropTypes<{
                  border: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fill: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  index: {
                    type: NumberConstructor
                    default: number
                  }
                  lockControl: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
                      allowPause: boolean
                      autoplay: boolean
                      controls: boolean
                      contextmenu: never[]
                      hotkey: boolean
                      live: boolean
                      logo: undefined
                      loop: boolean
                      muted: boolean
                      mutex: boolean
                      preload: string
                      screenshot: boolean
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                }>
              > & {
                onError?: ((...args: any[]) => any) | undefined
                onAbort?: ((...args: any[]) => any) | undefined
                onCanplay?: ((...args: any[]) => any) | undefined
                onCanplaythrough?: ((...args: any[]) => any) | undefined
                onDurationchange?: ((...args: any[]) => any) | undefined
                onEmptied?: ((...args: any[]) => any) | undefined
                onEnded?: ((...args: any[]) => any) | undefined
                onLoadeddata?: ((...args: any[]) => any) | undefined
                onLoadedmetadata?: ((...args: any[]) => any) | undefined
                onLoadstart?: ((...args: any[]) => any) | undefined
                onPause?: ((...args: any[]) => any) | undefined
                onPlay?: ((...args: any[]) => any) | undefined
                onPlaying?: ((...args: any[]) => any) | undefined
                onProgress?: ((...args: any[]) => any) | undefined
                onRatechange?: ((...args: any[]) => any) | undefined
                onSeeked?: ((...args: any[]) => any) | undefined
                onSeeking?: ((...args: any[]) => any) | undefined
                onStalled?: ((...args: any[]) => any) | undefined
                onSuspend?: ((...args: any[]) => any) | undefined
                onTimeupdate?: ((...args: any[]) => any) | undefined
                onVolumechange?: ((...args: any[]) => any) | undefined
                onWaiting?: ((...args: any[]) => any) | undefined
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onScreenshot?: ((...args: any[]) => any) | undefined
                onContextmenu_show?: ((...args: any[]) => any) | undefined
                onContextmenu_hide?: ((...args: any[]) => any) | undefined
                onNotice_show?: ((...args: any[]) => any) | undefined
                onNotice_hide?: ((...args: any[]) => any) | undefined
                onQuality_start?: ((...args: any[]) => any) | undefined
                onQuality_end?: ((...args: any[]) => any) | undefined
                onDestroy?: ((...args: any[]) => any) | undefined
                onResize?: ((...args: any[]) => any) | undefined
                onFullscreen?: ((...args: any[]) => any) | undefined
                onFullscreen_cancel?: ((...args: any[]) => any) | undefined
              } & import('vue').VNodeProps &
                import('vue').AllowedComponentProps &
                import('vue').ComponentCustomProps,
              'fill' | 'lockControl' | 'border' | 'index' | 'options' | 'poster'
            >
          $attrs: {
            [x: string]: unknown
          }
          $refs: {
            [x: string]: unknown
          }
          $slots: Readonly<{
            [name: string]: import('vue').Slot | undefined
          }>
          $root:
            | import('vue').ComponentPublicInstance<
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                false,
                import('vue').ComponentOptionsBase<
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  {},
                  {},
                  string
                >,
                {}
              >
            | null
          $parent:
            | import('vue').ComponentPublicInstance<
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                false,
                import('vue').ComponentOptionsBase<
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  {},
                  {},
                  string
                >,
                {}
              >
            | null
          $emit: (
            event:
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel',
            ...args: any[]
          ) => void
          $el: any
          $options: import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
              onError?: ((...args: any[]) => any) | undefined
              onAbort?: ((...args: any[]) => any) | undefined
              onCanplay?: ((...args: any[]) => any) | undefined
              onCanplaythrough?: ((...args: any[]) => any) | undefined
              onDurationchange?: ((...args: any[]) => any) | undefined
              onEmptied?: ((...args: any[]) => any) | undefined
              onEnded?: ((...args: any[]) => any) | undefined
              onLoadeddata?: ((...args: any[]) => any) | undefined
              onLoadedmetadata?: ((...args: any[]) => any) | undefined
              onLoadstart?: ((...args: any[]) => any) | undefined
              onPause?: ((...args: any[]) => any) | undefined
              onPlay?: ((...args: any[]) => any) | undefined
              onPlaying?: ((...args: any[]) => any) | undefined
              onProgress?: ((...args: any[]) => any) | undefined
              onRatechange?: ((...args: any[]) => any) | undefined
              onSeeked?: ((...args: any[]) => any) | undefined
              onSeeking?: ((...args: any[]) => any) | undefined
              onStalled?: ((...args: any[]) => any) | undefined
              onSuspend?: ((...args: any[]) => any) | undefined
              onTimeupdate?: ((...args: any[]) => any) | undefined
              onVolumechange?: ((...args: any[]) => any) | undefined
              onWaiting?: ((...args: any[]) => any) | undefined
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onScreenshot?: ((...args: any[]) => any) | undefined
              onContextmenu_show?: ((...args: any[]) => any) | undefined
              onContextmenu_hide?: ((...args: any[]) => any) | undefined
              onNotice_show?: ((...args: any[]) => any) | undefined
              onNotice_hide?: ((...args: any[]) => any) | undefined
              onQuality_start?: ((...args: any[]) => any) | undefined
              onQuality_end?: ((...args: any[]) => any) | undefined
              onDestroy?: ((...args: any[]) => any) | undefined
              onResize?: ((...args: any[]) => any) | undefined
              onFullscreen?: ((...args: any[]) => any) | undefined
              onFullscreen_cancel?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              focused: (focus?: boolean | undefined) => boolean | undefined
              index: () => number
              muted: () => void
              occupy: (order: number, unique: string, text: string) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number) => number
              seek: (time: number) => void
              snapshot: () => void
              status: () => number
              toggle: () => void
              toggleScreen: () => void
              trigger: (event: string) => void
              volume: (
                percentage?: number | undefined,
                nonotice?: boolean | undefined
              ) => number
              unique: () => string | undefined
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel'
            )[],
            string,
            {
              fill: boolean
              border: boolean
              index: number
              lockControl: boolean
              options: Record<string, any>
              poster: string
            },
            {},
            string
          > & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined
            created?: ((() => void) | (() => void)[]) | undefined
            beforeMount?: ((() => void) | (() => void)[]) | undefined
            mounted?: ((() => void) | (() => void)[]) | undefined
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined
            updated?: ((() => void) | (() => void)[]) | undefined
            activated?: ((() => void) | (() => void)[]) | undefined
            deactivated?: ((() => void) | (() => void)[]) | undefined
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined
            destroyed?: ((() => void) | (() => void)[]) | undefined
            unmounted?: ((() => void) | (() => void)[]) | undefined
            renderTracked?:
              | (
                  | ((e: import('vue').DebuggerEvent) => void)
                  | ((e: import('vue').DebuggerEvent) => void)[]
                )
              | undefined
            renderTriggered?:
              | (
                  | ((e: import('vue').DebuggerEvent) => void)
                  | ((e: import('vue').DebuggerEvent) => void)[]
                )
              | undefined
            errorCaptured?:
              | (
                  | ((
                      err: unknown,
                      instance:
                        | import('vue').ComponentPublicInstance<
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            false,
                            import('vue').ComponentOptionsBase<
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              {},
                              {},
                              string
                            >,
                            {}
                          >
                        | null,
                      info: string
                    ) => boolean | void)
                  | ((
                      err: unknown,
                      instance:
                        | import('vue').ComponentPublicInstance<
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            false,
                            import('vue').ComponentOptionsBase<
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              {},
                              {},
                              string
                            >,
                            {}
                          >
                        | null,
                      info: string
                    ) => boolean | void)[]
                )
              | undefined
          }
          $forceUpdate: () => void
          $nextTick: typeof import('vue').nextTick
          $watch<T extends string | ((...args: any) => any)>(
            source: T,
            cb: T extends (...args: any) => infer R
              ? (args_0: R, args_1: R) => any
              : (...args: any) => any,
            options?: import('vue').WatchOptions<boolean> | undefined
          ): import('vue').WatchStopHandle
        } & Readonly<
          import('vue').ExtractPropTypes<{
            border: {
              type: BooleanConstructor
              default: boolean
            }
            fill: {
              type: BooleanConstructor
              default: boolean
            }
            index: {
              type: NumberConstructor
              default: number
            }
            lockControl: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
                allowPause: boolean
                autoplay: boolean
                controls: boolean
                contextmenu: never[]
                hotkey: boolean
                live: boolean
                logo: undefined
                loop: boolean
                muted: boolean
                mutex: boolean
                preload: string
                screenshot: boolean
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
          }>
        > & {
            onError?: ((...args: any[]) => any) | undefined
            onAbort?: ((...args: any[]) => any) | undefined
            onCanplay?: ((...args: any[]) => any) | undefined
            onCanplaythrough?: ((...args: any[]) => any) | undefined
            onDurationchange?: ((...args: any[]) => any) | undefined
            onEmptied?: ((...args: any[]) => any) | undefined
            onEnded?: ((...args: any[]) => any) | undefined
            onLoadeddata?: ((...args: any[]) => any) | undefined
            onLoadedmetadata?: ((...args: any[]) => any) | undefined
            onLoadstart?: ((...args: any[]) => any) | undefined
            onPause?: ((...args: any[]) => any) | undefined
            onPlay?: ((...args: any[]) => any) | undefined
            onPlaying?: ((...args: any[]) => any) | undefined
            onProgress?: ((...args: any[]) => any) | undefined
            onRatechange?: ((...args: any[]) => any) | undefined
            onSeeked?: ((...args: any[]) => any) | undefined
            onSeeking?: ((...args: any[]) => any) | undefined
            onStalled?: ((...args: any[]) => any) | undefined
            onSuspend?: ((...args: any[]) => any) | undefined
            onTimeupdate?: ((...args: any[]) => any) | undefined
            onVolumechange?: ((...args: any[]) => any) | undefined
            onWaiting?: ((...args: any[]) => any) | undefined
            onReady?: ((...args: any[]) => any) | undefined
            onFetch_start?: ((...args: any[]) => any) | undefined
            onFetch_stop?: ((...args: any[]) => any) | undefined
            onMozaudioavailable?: ((...args: any[]) => any) | undefined
            onScreenshot?: ((...args: any[]) => any) | undefined
            onContextmenu_show?: ((...args: any[]) => any) | undefined
            onContextmenu_hide?: ((...args: any[]) => any) | undefined
            onNotice_show?: ((...args: any[]) => any) | undefined
            onNotice_hide?: ((...args: any[]) => any) | undefined
            onQuality_start?: ((...args: any[]) => any) | undefined
            onQuality_end?: ((...args: any[]) => any) | undefined
            onDestroy?: ((...args: any[]) => any) | undefined
            onResize?: ((...args: any[]) => any) | undefined
            onFullscreen?: ((...args: any[]) => any) | undefined
            onFullscreen_cancel?: ((...args: any[]) => any) | undefined
          } & import('vue').ShallowUnwrapRef<{
            bufferedEnd: () => number
            close: () => void
            currentTime: () => number
            currentUrl: () => string
            el: () => any
            focused: (focus?: boolean | undefined) => boolean | undefined
            index: () => number
            muted: () => void
            occupy: (order: number, unique: string, text: string) => void
            order: () => number
            pause: () => void
            play: (
              option: import('v3d-player').V3dPlayerOptions | undefined
            ) => void
            playRate: (rate: number) => number
            seek: (time: number) => void
            snapshot: () => void
            status: () => number
            toggle: () => void
            toggleScreen: () => void
            trigger: (event: string) => void
            volume: (
              percentage?: number | undefined,
              nonotice?: boolean | undefined
            ) => number
            unique: () => string | undefined
          }> & {} & import('vue').ComponentCustomProperties & {}
        __isFragment?: undefined
        __isTeleport?: undefined
        __isSuspense?: undefined
      } & import('vue').ComponentOptionsBase<
        Readonly<
          import('vue').ExtractPropTypes<{
            border: {
              type: BooleanConstructor
              default: boolean
            }
            fill: {
              type: BooleanConstructor
              default: boolean
            }
            index: {
              type: NumberConstructor
              default: number
            }
            lockControl: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
                allowPause: boolean
                autoplay: boolean
                controls: boolean
                contextmenu: never[]
                hotkey: boolean
                live: boolean
                logo: undefined
                loop: boolean
                muted: boolean
                mutex: boolean
                preload: string
                screenshot: boolean
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
          }>
        > & {
          onError?: ((...args: any[]) => any) | undefined
          onAbort?: ((...args: any[]) => any) | undefined
          onCanplay?: ((...args: any[]) => any) | undefined
          onCanplaythrough?: ((...args: any[]) => any) | undefined
          onDurationchange?: ((...args: any[]) => any) | undefined
          onEmptied?: ((...args: any[]) => any) | undefined
          onEnded?: ((...args: any[]) => any) | undefined
          onLoadeddata?: ((...args: any[]) => any) | undefined
          onLoadedmetadata?: ((...args: any[]) => any) | undefined
          onLoadstart?: ((...args: any[]) => any) | undefined
          onPause?: ((...args: any[]) => any) | undefined
          onPlay?: ((...args: any[]) => any) | undefined
          onPlaying?: ((...args: any[]) => any) | undefined
          onProgress?: ((...args: any[]) => any) | undefined
          onRatechange?: ((...args: any[]) => any) | undefined
          onSeeked?: ((...args: any[]) => any) | undefined
          onSeeking?: ((...args: any[]) => any) | undefined
          onStalled?: ((...args: any[]) => any) | undefined
          onSuspend?: ((...args: any[]) => any) | undefined
          onTimeupdate?: ((...args: any[]) => any) | undefined
          onVolumechange?: ((...args: any[]) => any) | undefined
          onWaiting?: ((...args: any[]) => any) | undefined
          onReady?: ((...args: any[]) => any) | undefined
          onFetch_start?: ((...args: any[]) => any) | undefined
          onFetch_stop?: ((...args: any[]) => any) | undefined
          onMozaudioavailable?: ((...args: any[]) => any) | undefined
          onScreenshot?: ((...args: any[]) => any) | undefined
          onContextmenu_show?: ((...args: any[]) => any) | undefined
          onContextmenu_hide?: ((...args: any[]) => any) | undefined
          onNotice_show?: ((...args: any[]) => any) | undefined
          onNotice_hide?: ((...args: any[]) => any) | undefined
          onQuality_start?: ((...args: any[]) => any) | undefined
          onQuality_end?: ((...args: any[]) => any) | undefined
          onDestroy?: ((...args: any[]) => any) | undefined
          onResize?: ((...args: any[]) => any) | undefined
          onFullscreen?: ((...args: any[]) => any) | undefined
          onFullscreen_cancel?: ((...args: any[]) => any) | undefined
        },
        {
          bufferedEnd: () => number
          close: () => void
          currentTime: () => number
          currentUrl: () => string
          el: () => any
          focused: (focus?: boolean | undefined) => boolean | undefined
          index: () => number
          muted: () => void
          occupy: (order: number, unique: string, text: string) => void
          order: () => number
          pause: () => void
          play: (
            option: import('v3d-player').V3dPlayerOptions | undefined
          ) => void
          playRate: (rate: number) => number
          seek: (time: number) => void
          snapshot: () => void
          status: () => number
          toggle: () => void
          toggleScreen: () => void
          trigger: (event: string) => void
          volume: (
            percentage?: number | undefined,
            nonotice?: boolean | undefined
          ) => number
          unique: () => string | undefined
        },
        unknown,
        {},
        {},
        import('vue').ComponentOptionsMixin,
        import('vue').ComponentOptionsMixin,
        (
          | 'progress'
          | 'play'
          | 'ready'
          | 'timeupdate'
          | 'fetch_start'
          | 'abort'
          | 'fetch_stop'
          | 'canplay'
          | 'canplaythrough'
          | 'durationchange'
          | 'emptied'
          | 'ended'
          | 'error'
          | 'loadeddata'
          | 'loadedmetadata'
          | 'loadstart'
          | 'mozaudioavailable'
          | 'pause'
          | 'playing'
          | 'ratechange'
          | 'seeked'
          | 'seeking'
          | 'stalled'
          | 'suspend'
          | 'volumechange'
          | 'waiting'
          | 'screenshot'
          | 'contextmenu_show'
          | 'contextmenu_hide'
          | 'notice_show'
          | 'notice_hide'
          | 'quality_start'
          | 'quality_end'
          | 'destroy'
          | 'resize'
          | 'fullscreen'
          | 'fullscreen_cancel'
        )[],
        | 'progress'
        | 'play'
        | 'ready'
        | 'timeupdate'
        | 'fetch_start'
        | 'abort'
        | 'fetch_stop'
        | 'canplay'
        | 'canplaythrough'
        | 'durationchange'
        | 'emptied'
        | 'ended'
        | 'error'
        | 'loadeddata'
        | 'loadedmetadata'
        | 'loadstart'
        | 'mozaudioavailable'
        | 'pause'
        | 'playing'
        | 'ratechange'
        | 'seeked'
        | 'seeking'
        | 'stalled'
        | 'suspend'
        | 'volumechange'
        | 'waiting'
        | 'screenshot'
        | 'contextmenu_show'
        | 'contextmenu_hide'
        | 'notice_show'
        | 'notice_hide'
        | 'quality_start'
        | 'quality_end'
        | 'destroy'
        | 'resize'
        | 'fullscreen'
        | 'fullscreen_cancel',
        {
          fill: boolean
          border: boolean
          index: number
          lockControl: boolean
          options: Record<string, any>
          poster: string
        },
        {},
        string
      > &
        import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        (new () => {
          $slots: {
            ready: (_: {}) => any
            loading: (_: {}) => any
          }
        })
      getPlaying: (unique: string) =>
        | ({
            new (...args: any[]): {
              $: import('vue').ComponentInternalInstance
              $data: {}
              $props: Partial<{
                fill: boolean
                border: boolean
                index: number
                lockControl: boolean
                options: Record<string, any>
                poster: string
              }> &
                Omit<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      border: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fill: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      index: {
                        type: NumberConstructor
                        default: number
                      }
                      lockControl: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
                          allowPause: boolean
                          autoplay: boolean
                          controls: boolean
                          contextmenu: never[]
                          hotkey: boolean
                          live: boolean
                          logo: undefined
                          loop: boolean
                          muted: boolean
                          mutex: boolean
                          preload: string
                          screenshot: boolean
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                    }>
                  > & {
                    onError?: ((...args: any[]) => any) | undefined
                    onAbort?: ((...args: any[]) => any) | undefined
                    onCanplay?: ((...args: any[]) => any) | undefined
                    onCanplaythrough?: ((...args: any[]) => any) | undefined
                    onDurationchange?: ((...args: any[]) => any) | undefined
                    onEmptied?: ((...args: any[]) => any) | undefined
                    onEnded?: ((...args: any[]) => any) | undefined
                    onLoadeddata?: ((...args: any[]) => any) | undefined
                    onLoadedmetadata?: ((...args: any[]) => any) | undefined
                    onLoadstart?: ((...args: any[]) => any) | undefined
                    onPause?: ((...args: any[]) => any) | undefined
                    onPlay?: ((...args: any[]) => any) | undefined
                    onPlaying?: ((...args: any[]) => any) | undefined
                    onProgress?: ((...args: any[]) => any) | undefined
                    onRatechange?: ((...args: any[]) => any) | undefined
                    onSeeked?: ((...args: any[]) => any) | undefined
                    onSeeking?: ((...args: any[]) => any) | undefined
                    onStalled?: ((...args: any[]) => any) | undefined
                    onSuspend?: ((...args: any[]) => any) | undefined
                    onTimeupdate?: ((...args: any[]) => any) | undefined
                    onVolumechange?: ((...args: any[]) => any) | undefined
                    onWaiting?: ((...args: any[]) => any) | undefined
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onScreenshot?: ((...args: any[]) => any) | undefined
                    onContextmenu_show?: ((...args: any[]) => any) | undefined
                    onContextmenu_hide?: ((...args: any[]) => any) | undefined
                    onNotice_show?: ((...args: any[]) => any) | undefined
                    onNotice_hide?: ((...args: any[]) => any) | undefined
                    onQuality_start?: ((...args: any[]) => any) | undefined
                    onQuality_end?: ((...args: any[]) => any) | undefined
                    onDestroy?: ((...args: any[]) => any) | undefined
                    onResize?: ((...args: any[]) => any) | undefined
                    onFullscreen?: ((...args: any[]) => any) | undefined
                    onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                  } & import('vue').VNodeProps &
                    import('vue').AllowedComponentProps &
                    import('vue').ComponentCustomProps,
                  | 'fill'
                  | 'lockControl'
                  | 'border'
                  | 'index'
                  | 'options'
                  | 'poster'
                >
              $attrs: {
                [x: string]: unknown
              }
              $refs: {
                [x: string]: unknown
              }
              $slots: Readonly<{
                [name: string]: import('vue').Slot | undefined
              }>
              $root:
                | import('vue').ComponentPublicInstance<
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    false,
                    import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string
                    >,
                    {}
                  >
                | null
              $parent:
                | import('vue').ComponentPublicInstance<
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    false,
                    import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string
                    >,
                    {}
                  >
                | null
              $emit: (
                event:
                  | 'progress'
                  | 'play'
                  | 'ready'
                  | 'timeupdate'
                  | 'fetch_start'
                  | 'abort'
                  | 'fetch_stop'
                  | 'canplay'
                  | 'canplaythrough'
                  | 'durationchange'
                  | 'emptied'
                  | 'ended'
                  | 'error'
                  | 'loadeddata'
                  | 'loadedmetadata'
                  | 'loadstart'
                  | 'mozaudioavailable'
                  | 'pause'
                  | 'playing'
                  | 'ratechange'
                  | 'seeked'
                  | 'seeking'
                  | 'stalled'
                  | 'suspend'
                  | 'volumechange'
                  | 'waiting'
                  | 'screenshot'
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen'
                  | 'fullscreen_cancel',
                ...args: any[]
              ) => void
              $el: any
              $options: import('vue').ComponentOptionsBase<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    border: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fill: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    index: {
                      type: NumberConstructor
                      default: number
                    }
                    lockControl: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
                        allowPause: boolean
                        autoplay: boolean
                        controls: boolean
                        contextmenu: never[]
                        hotkey: boolean
                        live: boolean
                        logo: undefined
                        loop: boolean
                        muted: boolean
                        mutex: boolean
                        preload: string
                        screenshot: boolean
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                  }>
                > & {
                  onError?: ((...args: any[]) => any) | undefined
                  onAbort?: ((...args: any[]) => any) | undefined
                  onCanplay?: ((...args: any[]) => any) | undefined
                  onCanplaythrough?: ((...args: any[]) => any) | undefined
                  onDurationchange?: ((...args: any[]) => any) | undefined
                  onEmptied?: ((...args: any[]) => any) | undefined
                  onEnded?: ((...args: any[]) => any) | undefined
                  onLoadeddata?: ((...args: any[]) => any) | undefined
                  onLoadedmetadata?: ((...args: any[]) => any) | undefined
                  onLoadstart?: ((...args: any[]) => any) | undefined
                  onPause?: ((...args: any[]) => any) | undefined
                  onPlay?: ((...args: any[]) => any) | undefined
                  onPlaying?: ((...args: any[]) => any) | undefined
                  onProgress?: ((...args: any[]) => any) | undefined
                  onRatechange?: ((...args: any[]) => any) | undefined
                  onSeeked?: ((...args: any[]) => any) | undefined
                  onSeeking?: ((...args: any[]) => any) | undefined
                  onStalled?: ((...args: any[]) => any) | undefined
                  onSuspend?: ((...args: any[]) => any) | undefined
                  onTimeupdate?: ((...args: any[]) => any) | undefined
                  onVolumechange?: ((...args: any[]) => any) | undefined
                  onWaiting?: ((...args: any[]) => any) | undefined
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onScreenshot?: ((...args: any[]) => any) | undefined
                  onContextmenu_show?: ((...args: any[]) => any) | undefined
                  onContextmenu_hide?: ((...args: any[]) => any) | undefined
                  onNotice_show?: ((...args: any[]) => any) | undefined
                  onNotice_hide?: ((...args: any[]) => any) | undefined
                  onQuality_start?: ((...args: any[]) => any) | undefined
                  onQuality_end?: ((...args: any[]) => any) | undefined
                  onDestroy?: ((...args: any[]) => any) | undefined
                  onResize?: ((...args: any[]) => any) | undefined
                  onFullscreen?: ((...args: any[]) => any) | undefined
                  onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                },
                {
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  index: () => number
                  muted: () => void
                  occupy: (order: number, unique: string, text: string) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (rate: number) => number
                  seek: (time: number) => void
                  snapshot: () => void
                  status: () => number
                  toggle: () => void
                  toggleScreen: () => void
                  trigger: (event: string) => void
                  volume: (
                    percentage?: number | undefined,
                    nonotice?: boolean | undefined
                  ) => number
                  unique: () => string | undefined
                },
                unknown,
                {},
                {},
                import('vue').ComponentOptionsMixin,
                import('vue').ComponentOptionsMixin,
                (
                  | 'progress'
                  | 'play'
                  | 'ready'
                  | 'timeupdate'
                  | 'fetch_start'
                  | 'abort'
                  | 'fetch_stop'
                  | 'canplay'
                  | 'canplaythrough'
                  | 'durationchange'
                  | 'emptied'
                  | 'ended'
                  | 'error'
                  | 'loadeddata'
                  | 'loadedmetadata'
                  | 'loadstart'
                  | 'mozaudioavailable'
                  | 'pause'
                  | 'playing'
                  | 'ratechange'
                  | 'seeked'
                  | 'seeking'
                  | 'stalled'
                  | 'suspend'
                  | 'volumechange'
                  | 'waiting'
                  | 'screenshot'
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen'
                  | 'fullscreen_cancel'
                )[],
                string,
                {
                  fill: boolean
                  border: boolean
                  index: number
                  lockControl: boolean
                  options: Record<string, any>
                  poster: string
                },
                {},
                string
              > & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined
                created?: ((() => void) | (() => void)[]) | undefined
                beforeMount?: ((() => void) | (() => void)[]) | undefined
                mounted?: ((() => void) | (() => void)[]) | undefined
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined
                updated?: ((() => void) | (() => void)[]) | undefined
                activated?: ((() => void) | (() => void)[]) | undefined
                deactivated?: ((() => void) | (() => void)[]) | undefined
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined
                destroyed?: ((() => void) | (() => void)[]) | undefined
                unmounted?: ((() => void) | (() => void)[]) | undefined
                renderTracked?:
                  | (
                      | ((e: import('vue').DebuggerEvent) => void)
                      | ((e: import('vue').DebuggerEvent) => void)[]
                    )
                  | undefined
                renderTriggered?:
                  | (
                      | ((e: import('vue').DebuggerEvent) => void)
                      | ((e: import('vue').DebuggerEvent) => void)[]
                    )
                  | undefined
                errorCaptured?:
                  | (
                      | ((
                          err: unknown,
                          instance:
                            | import('vue').ComponentPublicInstance<
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                false,
                                import('vue').ComponentOptionsBase<
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  {},
                                  {},
                                  string
                                >,
                                {}
                              >
                            | null,
                          info: string
                        ) => boolean | void)
                      | ((
                          err: unknown,
                          instance:
                            | import('vue').ComponentPublicInstance<
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                false,
                                import('vue').ComponentOptionsBase<
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  {},
                                  {},
                                  string
                                >,
                                {}
                              >
                            | null,
                          info: string
                        ) => boolean | void)[]
                    )
                  | undefined
              }
              $forceUpdate: () => void
              $nextTick: typeof import('vue').nextTick
              $watch<T extends string | ((...args: any) => any)>(
                source: T,
                cb: T extends (...args: any) => infer R
                  ? (args_0: R, args_1: R) => any
                  : (...args: any) => any,
                options?: import('vue').WatchOptions<boolean> | undefined
              ): import('vue').WatchStopHandle
            } & Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
                onError?: ((...args: any[]) => any) | undefined
                onAbort?: ((...args: any[]) => any) | undefined
                onCanplay?: ((...args: any[]) => any) | undefined
                onCanplaythrough?: ((...args: any[]) => any) | undefined
                onDurationchange?: ((...args: any[]) => any) | undefined
                onEmptied?: ((...args: any[]) => any) | undefined
                onEnded?: ((...args: any[]) => any) | undefined
                onLoadeddata?: ((...args: any[]) => any) | undefined
                onLoadedmetadata?: ((...args: any[]) => any) | undefined
                onLoadstart?: ((...args: any[]) => any) | undefined
                onPause?: ((...args: any[]) => any) | undefined
                onPlay?: ((...args: any[]) => any) | undefined
                onPlaying?: ((...args: any[]) => any) | undefined
                onProgress?: ((...args: any[]) => any) | undefined
                onRatechange?: ((...args: any[]) => any) | undefined
                onSeeked?: ((...args: any[]) => any) | undefined
                onSeeking?: ((...args: any[]) => any) | undefined
                onStalled?: ((...args: any[]) => any) | undefined
                onSuspend?: ((...args: any[]) => any) | undefined
                onTimeupdate?: ((...args: any[]) => any) | undefined
                onVolumechange?: ((...args: any[]) => any) | undefined
                onWaiting?: ((...args: any[]) => any) | undefined
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onScreenshot?: ((...args: any[]) => any) | undefined
                onContextmenu_show?: ((...args: any[]) => any) | undefined
                onContextmenu_hide?: ((...args: any[]) => any) | undefined
                onNotice_show?: ((...args: any[]) => any) | undefined
                onNotice_hide?: ((...args: any[]) => any) | undefined
                onQuality_start?: ((...args: any[]) => any) | undefined
                onQuality_end?: ((...args: any[]) => any) | undefined
                onDestroy?: ((...args: any[]) => any) | undefined
                onResize?: ((...args: any[]) => any) | undefined
                onFullscreen?: ((...args: any[]) => any) | undefined
                onFullscreen_cancel?: ((...args: any[]) => any) | undefined
              } & import('vue').ShallowUnwrapRef<{
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                focused: (focus?: boolean | undefined) => boolean | undefined
                index: () => number
                muted: () => void
                occupy: (order: number, unique: string, text: string) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number) => number
                seek: (time: number) => void
                snapshot: () => void
                status: () => number
                toggle: () => void
                toggleScreen: () => void
                trigger: (event: string) => void
                volume: (
                  percentage?: number | undefined,
                  nonotice?: boolean | undefined
                ) => number
                unique: () => string | undefined
              }> & {} & import('vue').ComponentCustomProperties & {}
            __isFragment?: undefined
            __isTeleport?: undefined
            __isSuspense?: undefined
          } & import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
              onError?: ((...args: any[]) => any) | undefined
              onAbort?: ((...args: any[]) => any) | undefined
              onCanplay?: ((...args: any[]) => any) | undefined
              onCanplaythrough?: ((...args: any[]) => any) | undefined
              onDurationchange?: ((...args: any[]) => any) | undefined
              onEmptied?: ((...args: any[]) => any) | undefined
              onEnded?: ((...args: any[]) => any) | undefined
              onLoadeddata?: ((...args: any[]) => any) | undefined
              onLoadedmetadata?: ((...args: any[]) => any) | undefined
              onLoadstart?: ((...args: any[]) => any) | undefined
              onPause?: ((...args: any[]) => any) | undefined
              onPlay?: ((...args: any[]) => any) | undefined
              onPlaying?: ((...args: any[]) => any) | undefined
              onProgress?: ((...args: any[]) => any) | undefined
              onRatechange?: ((...args: any[]) => any) | undefined
              onSeeked?: ((...args: any[]) => any) | undefined
              onSeeking?: ((...args: any[]) => any) | undefined
              onStalled?: ((...args: any[]) => any) | undefined
              onSuspend?: ((...args: any[]) => any) | undefined
              onTimeupdate?: ((...args: any[]) => any) | undefined
              onVolumechange?: ((...args: any[]) => any) | undefined
              onWaiting?: ((...args: any[]) => any) | undefined
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onScreenshot?: ((...args: any[]) => any) | undefined
              onContextmenu_show?: ((...args: any[]) => any) | undefined
              onContextmenu_hide?: ((...args: any[]) => any) | undefined
              onNotice_show?: ((...args: any[]) => any) | undefined
              onNotice_hide?: ((...args: any[]) => any) | undefined
              onQuality_start?: ((...args: any[]) => any) | undefined
              onQuality_end?: ((...args: any[]) => any) | undefined
              onDestroy?: ((...args: any[]) => any) | undefined
              onResize?: ((...args: any[]) => any) | undefined
              onFullscreen?: ((...args: any[]) => any) | undefined
              onFullscreen_cancel?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              focused: (focus?: boolean | undefined) => boolean | undefined
              index: () => number
              muted: () => void
              occupy: (order: number, unique: string, text: string) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number) => number
              seek: (time: number) => void
              snapshot: () => void
              status: () => number
              toggle: () => void
              toggleScreen: () => void
              trigger: (event: string) => void
              volume: (
                percentage?: number | undefined,
                nonotice?: boolean | undefined
              ) => number
              unique: () => string | undefined
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel'
            )[],
            | 'progress'
            | 'play'
            | 'ready'
            | 'timeupdate'
            | 'fetch_start'
            | 'abort'
            | 'fetch_stop'
            | 'canplay'
            | 'canplaythrough'
            | 'durationchange'
            | 'emptied'
            | 'ended'
            | 'error'
            | 'loadeddata'
            | 'loadedmetadata'
            | 'loadstart'
            | 'mozaudioavailable'
            | 'pause'
            | 'playing'
            | 'ratechange'
            | 'seeked'
            | 'seeking'
            | 'stalled'
            | 'suspend'
            | 'volumechange'
            | 'waiting'
            | 'screenshot'
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen'
            | 'fullscreen_cancel',
            {
              fill: boolean
              border: boolean
              index: number
              lockControl: boolean
              options: Record<string, any>
              poster: string
            },
            {},
            string
          > &
            import('vue').VNodeProps &
            import('vue').AllowedComponentProps &
            import('vue').ComponentCustomProps &
            (new () => {
              $slots: {
                ready: (_: {}) => any
                loading: (_: {}) => any
              }
            }))
        | undefined
      getSelected: () => {
        new (...args: any[]): {
          $: import('vue').ComponentInternalInstance
          $data: {}
          $props: Partial<{
            fill: boolean
            border: boolean
            index: number
            lockControl: boolean
            options: Record<string, any>
            poster: string
          }> &
            Omit<
              Readonly<
                import('vue').ExtractPropTypes<{
                  border: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fill: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  index: {
                    type: NumberConstructor
                    default: number
                  }
                  lockControl: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
                      allowPause: boolean
                      autoplay: boolean
                      controls: boolean
                      contextmenu: never[]
                      hotkey: boolean
                      live: boolean
                      logo: undefined
                      loop: boolean
                      muted: boolean
                      mutex: boolean
                      preload: string
                      screenshot: boolean
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                }>
              > & {
                onError?: ((...args: any[]) => any) | undefined
                onAbort?: ((...args: any[]) => any) | undefined
                onCanplay?: ((...args: any[]) => any) | undefined
                onCanplaythrough?: ((...args: any[]) => any) | undefined
                onDurationchange?: ((...args: any[]) => any) | undefined
                onEmptied?: ((...args: any[]) => any) | undefined
                onEnded?: ((...args: any[]) => any) | undefined
                onLoadeddata?: ((...args: any[]) => any) | undefined
                onLoadedmetadata?: ((...args: any[]) => any) | undefined
                onLoadstart?: ((...args: any[]) => any) | undefined
                onPause?: ((...args: any[]) => any) | undefined
                onPlay?: ((...args: any[]) => any) | undefined
                onPlaying?: ((...args: any[]) => any) | undefined
                onProgress?: ((...args: any[]) => any) | undefined
                onRatechange?: ((...args: any[]) => any) | undefined
                onSeeked?: ((...args: any[]) => any) | undefined
                onSeeking?: ((...args: any[]) => any) | undefined
                onStalled?: ((...args: any[]) => any) | undefined
                onSuspend?: ((...args: any[]) => any) | undefined
                onTimeupdate?: ((...args: any[]) => any) | undefined
                onVolumechange?: ((...args: any[]) => any) | undefined
                onWaiting?: ((...args: any[]) => any) | undefined
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onScreenshot?: ((...args: any[]) => any) | undefined
                onContextmenu_show?: ((...args: any[]) => any) | undefined
                onContextmenu_hide?: ((...args: any[]) => any) | undefined
                onNotice_show?: ((...args: any[]) => any) | undefined
                onNotice_hide?: ((...args: any[]) => any) | undefined
                onQuality_start?: ((...args: any[]) => any) | undefined
                onQuality_end?: ((...args: any[]) => any) | undefined
                onDestroy?: ((...args: any[]) => any) | undefined
                onResize?: ((...args: any[]) => any) | undefined
                onFullscreen?: ((...args: any[]) => any) | undefined
                onFullscreen_cancel?: ((...args: any[]) => any) | undefined
              } & import('vue').VNodeProps &
                import('vue').AllowedComponentProps &
                import('vue').ComponentCustomProps,
              'fill' | 'lockControl' | 'border' | 'index' | 'options' | 'poster'
            >
          $attrs: {
            [x: string]: unknown
          }
          $refs: {
            [x: string]: unknown
          }
          $slots: Readonly<{
            [name: string]: import('vue').Slot | undefined
          }>
          $root:
            | import('vue').ComponentPublicInstance<
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                false,
                import('vue').ComponentOptionsBase<
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  {},
                  {},
                  string
                >,
                {}
              >
            | null
          $parent:
            | import('vue').ComponentPublicInstance<
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                false,
                import('vue').ComponentOptionsBase<
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  {},
                  {},
                  string
                >,
                {}
              >
            | null
          $emit: (
            event:
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel',
            ...args: any[]
          ) => void
          $el: any
          $options: import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                border: {
                  type: BooleanConstructor
                  default: boolean
                }
                fill: {
                  type: BooleanConstructor
                  default: boolean
                }
                index: {
                  type: NumberConstructor
                  default: number
                }
                lockControl: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
                    allowPause: boolean
                    autoplay: boolean
                    controls: boolean
                    contextmenu: never[]
                    hotkey: boolean
                    live: boolean
                    logo: undefined
                    loop: boolean
                    muted: boolean
                    mutex: boolean
                    preload: string
                    screenshot: boolean
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
              }>
            > & {
              onError?: ((...args: any[]) => any) | undefined
              onAbort?: ((...args: any[]) => any) | undefined
              onCanplay?: ((...args: any[]) => any) | undefined
              onCanplaythrough?: ((...args: any[]) => any) | undefined
              onDurationchange?: ((...args: any[]) => any) | undefined
              onEmptied?: ((...args: any[]) => any) | undefined
              onEnded?: ((...args: any[]) => any) | undefined
              onLoadeddata?: ((...args: any[]) => any) | undefined
              onLoadedmetadata?: ((...args: any[]) => any) | undefined
              onLoadstart?: ((...args: any[]) => any) | undefined
              onPause?: ((...args: any[]) => any) | undefined
              onPlay?: ((...args: any[]) => any) | undefined
              onPlaying?: ((...args: any[]) => any) | undefined
              onProgress?: ((...args: any[]) => any) | undefined
              onRatechange?: ((...args: any[]) => any) | undefined
              onSeeked?: ((...args: any[]) => any) | undefined
              onSeeking?: ((...args: any[]) => any) | undefined
              onStalled?: ((...args: any[]) => any) | undefined
              onSuspend?: ((...args: any[]) => any) | undefined
              onTimeupdate?: ((...args: any[]) => any) | undefined
              onVolumechange?: ((...args: any[]) => any) | undefined
              onWaiting?: ((...args: any[]) => any) | undefined
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onScreenshot?: ((...args: any[]) => any) | undefined
              onContextmenu_show?: ((...args: any[]) => any) | undefined
              onContextmenu_hide?: ((...args: any[]) => any) | undefined
              onNotice_show?: ((...args: any[]) => any) | undefined
              onNotice_hide?: ((...args: any[]) => any) | undefined
              onQuality_start?: ((...args: any[]) => any) | undefined
              onQuality_end?: ((...args: any[]) => any) | undefined
              onDestroy?: ((...args: any[]) => any) | undefined
              onResize?: ((...args: any[]) => any) | undefined
              onFullscreen?: ((...args: any[]) => any) | undefined
              onFullscreen_cancel?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              focused: (focus?: boolean | undefined) => boolean | undefined
              index: () => number
              muted: () => void
              occupy: (order: number, unique: string, text: string) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number) => number
              seek: (time: number) => void
              snapshot: () => void
              status: () => number
              toggle: () => void
              toggleScreen: () => void
              trigger: (event: string) => void
              volume: (
                percentage?: number | undefined,
                nonotice?: boolean | undefined
              ) => number
              unique: () => string | undefined
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'play'
              | 'ready'
              | 'timeupdate'
              | 'fetch_start'
              | 'abort'
              | 'fetch_stop'
              | 'canplay'
              | 'canplaythrough'
              | 'durationchange'
              | 'emptied'
              | 'ended'
              | 'error'
              | 'loadeddata'
              | 'loadedmetadata'
              | 'loadstart'
              | 'mozaudioavailable'
              | 'pause'
              | 'playing'
              | 'ratechange'
              | 'seeked'
              | 'seeking'
              | 'stalled'
              | 'suspend'
              | 'volumechange'
              | 'waiting'
              | 'screenshot'
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen'
              | 'fullscreen_cancel'
            )[],
            string,
            {
              fill: boolean
              border: boolean
              index: number
              lockControl: boolean
              options: Record<string, any>
              poster: string
            },
            {},
            string
          > & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined
            created?: ((() => void) | (() => void)[]) | undefined
            beforeMount?: ((() => void) | (() => void)[]) | undefined
            mounted?: ((() => void) | (() => void)[]) | undefined
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined
            updated?: ((() => void) | (() => void)[]) | undefined
            activated?: ((() => void) | (() => void)[]) | undefined
            deactivated?: ((() => void) | (() => void)[]) | undefined
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined
            destroyed?: ((() => void) | (() => void)[]) | undefined
            unmounted?: ((() => void) | (() => void)[]) | undefined
            renderTracked?:
              | (
                  | ((e: import('vue').DebuggerEvent) => void)
                  | ((e: import('vue').DebuggerEvent) => void)[]
                )
              | undefined
            renderTriggered?:
              | (
                  | ((e: import('vue').DebuggerEvent) => void)
                  | ((e: import('vue').DebuggerEvent) => void)[]
                )
              | undefined
            errorCaptured?:
              | (
                  | ((
                      err: unknown,
                      instance:
                        | import('vue').ComponentPublicInstance<
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            false,
                            import('vue').ComponentOptionsBase<
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              {},
                              {},
                              string
                            >,
                            {}
                          >
                        | null,
                      info: string
                    ) => boolean | void)
                  | ((
                      err: unknown,
                      instance:
                        | import('vue').ComponentPublicInstance<
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            {},
                            false,
                            import('vue').ComponentOptionsBase<
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              {},
                              {},
                              string
                            >,
                            {}
                          >
                        | null,
                      info: string
                    ) => boolean | void)[]
                )
              | undefined
          }
          $forceUpdate: () => void
          $nextTick: typeof import('vue').nextTick
          $watch<T extends string | ((...args: any) => any)>(
            source: T,
            cb: T extends (...args: any) => infer R
              ? (args_0: R, args_1: R) => any
              : (...args: any) => any,
            options?: import('vue').WatchOptions<boolean> | undefined
          ): import('vue').WatchStopHandle
        } & Readonly<
          import('vue').ExtractPropTypes<{
            border: {
              type: BooleanConstructor
              default: boolean
            }
            fill: {
              type: BooleanConstructor
              default: boolean
            }
            index: {
              type: NumberConstructor
              default: number
            }
            lockControl: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
                allowPause: boolean
                autoplay: boolean
                controls: boolean
                contextmenu: never[]
                hotkey: boolean
                live: boolean
                logo: undefined
                loop: boolean
                muted: boolean
                mutex: boolean
                preload: string
                screenshot: boolean
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
          }>
        > & {
            onError?: ((...args: any[]) => any) | undefined
            onAbort?: ((...args: any[]) => any) | undefined
            onCanplay?: ((...args: any[]) => any) | undefined
            onCanplaythrough?: ((...args: any[]) => any) | undefined
            onDurationchange?: ((...args: any[]) => any) | undefined
            onEmptied?: ((...args: any[]) => any) | undefined
            onEnded?: ((...args: any[]) => any) | undefined
            onLoadeddata?: ((...args: any[]) => any) | undefined
            onLoadedmetadata?: ((...args: any[]) => any) | undefined
            onLoadstart?: ((...args: any[]) => any) | undefined
            onPause?: ((...args: any[]) => any) | undefined
            onPlay?: ((...args: any[]) => any) | undefined
            onPlaying?: ((...args: any[]) => any) | undefined
            onProgress?: ((...args: any[]) => any) | undefined
            onRatechange?: ((...args: any[]) => any) | undefined
            onSeeked?: ((...args: any[]) => any) | undefined
            onSeeking?: ((...args: any[]) => any) | undefined
            onStalled?: ((...args: any[]) => any) | undefined
            onSuspend?: ((...args: any[]) => any) | undefined
            onTimeupdate?: ((...args: any[]) => any) | undefined
            onVolumechange?: ((...args: any[]) => any) | undefined
            onWaiting?: ((...args: any[]) => any) | undefined
            onReady?: ((...args: any[]) => any) | undefined
            onFetch_start?: ((...args: any[]) => any) | undefined
            onFetch_stop?: ((...args: any[]) => any) | undefined
            onMozaudioavailable?: ((...args: any[]) => any) | undefined
            onScreenshot?: ((...args: any[]) => any) | undefined
            onContextmenu_show?: ((...args: any[]) => any) | undefined
            onContextmenu_hide?: ((...args: any[]) => any) | undefined
            onNotice_show?: ((...args: any[]) => any) | undefined
            onNotice_hide?: ((...args: any[]) => any) | undefined
            onQuality_start?: ((...args: any[]) => any) | undefined
            onQuality_end?: ((...args: any[]) => any) | undefined
            onDestroy?: ((...args: any[]) => any) | undefined
            onResize?: ((...args: any[]) => any) | undefined
            onFullscreen?: ((...args: any[]) => any) | undefined
            onFullscreen_cancel?: ((...args: any[]) => any) | undefined
          } & import('vue').ShallowUnwrapRef<{
            bufferedEnd: () => number
            close: () => void
            currentTime: () => number
            currentUrl: () => string
            el: () => any
            focused: (focus?: boolean | undefined) => boolean | undefined
            index: () => number
            muted: () => void
            occupy: (order: number, unique: string, text: string) => void
            order: () => number
            pause: () => void
            play: (
              option: import('v3d-player').V3dPlayerOptions | undefined
            ) => void
            playRate: (rate: number) => number
            seek: (time: number) => void
            snapshot: () => void
            status: () => number
            toggle: () => void
            toggleScreen: () => void
            trigger: (event: string) => void
            volume: (
              percentage?: number | undefined,
              nonotice?: boolean | undefined
            ) => number
            unique: () => string | undefined
          }> & {} & import('vue').ComponentCustomProperties & {}
        __isFragment?: undefined
        __isTeleport?: undefined
        __isSuspense?: undefined
      } & import('vue').ComponentOptionsBase<
        Readonly<
          import('vue').ExtractPropTypes<{
            border: {
              type: BooleanConstructor
              default: boolean
            }
            fill: {
              type: BooleanConstructor
              default: boolean
            }
            index: {
              type: NumberConstructor
              default: number
            }
            lockControl: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
                allowPause: boolean
                autoplay: boolean
                controls: boolean
                contextmenu: never[]
                hotkey: boolean
                live: boolean
                logo: undefined
                loop: boolean
                muted: boolean
                mutex: boolean
                preload: string
                screenshot: boolean
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
          }>
        > & {
          onError?: ((...args: any[]) => any) | undefined
          onAbort?: ((...args: any[]) => any) | undefined
          onCanplay?: ((...args: any[]) => any) | undefined
          onCanplaythrough?: ((...args: any[]) => any) | undefined
          onDurationchange?: ((...args: any[]) => any) | undefined
          onEmptied?: ((...args: any[]) => any) | undefined
          onEnded?: ((...args: any[]) => any) | undefined
          onLoadeddata?: ((...args: any[]) => any) | undefined
          onLoadedmetadata?: ((...args: any[]) => any) | undefined
          onLoadstart?: ((...args: any[]) => any) | undefined
          onPause?: ((...args: any[]) => any) | undefined
          onPlay?: ((...args: any[]) => any) | undefined
          onPlaying?: ((...args: any[]) => any) | undefined
          onProgress?: ((...args: any[]) => any) | undefined
          onRatechange?: ((...args: any[]) => any) | undefined
          onSeeked?: ((...args: any[]) => any) | undefined
          onSeeking?: ((...args: any[]) => any) | undefined
          onStalled?: ((...args: any[]) => any) | undefined
          onSuspend?: ((...args: any[]) => any) | undefined
          onTimeupdate?: ((...args: any[]) => any) | undefined
          onVolumechange?: ((...args: any[]) => any) | undefined
          onWaiting?: ((...args: any[]) => any) | undefined
          onReady?: ((...args: any[]) => any) | undefined
          onFetch_start?: ((...args: any[]) => any) | undefined
          onFetch_stop?: ((...args: any[]) => any) | undefined
          onMozaudioavailable?: ((...args: any[]) => any) | undefined
          onScreenshot?: ((...args: any[]) => any) | undefined
          onContextmenu_show?: ((...args: any[]) => any) | undefined
          onContextmenu_hide?: ((...args: any[]) => any) | undefined
          onNotice_show?: ((...args: any[]) => any) | undefined
          onNotice_hide?: ((...args: any[]) => any) | undefined
          onQuality_start?: ((...args: any[]) => any) | undefined
          onQuality_end?: ((...args: any[]) => any) | undefined
          onDestroy?: ((...args: any[]) => any) | undefined
          onResize?: ((...args: any[]) => any) | undefined
          onFullscreen?: ((...args: any[]) => any) | undefined
          onFullscreen_cancel?: ((...args: any[]) => any) | undefined
        },
        {
          bufferedEnd: () => number
          close: () => void
          currentTime: () => number
          currentUrl: () => string
          el: () => any
          focused: (focus?: boolean | undefined) => boolean | undefined
          index: () => number
          muted: () => void
          occupy: (order: number, unique: string, text: string) => void
          order: () => number
          pause: () => void
          play: (
            option: import('v3d-player').V3dPlayerOptions | undefined
          ) => void
          playRate: (rate: number) => number
          seek: (time: number) => void
          snapshot: () => void
          status: () => number
          toggle: () => void
          toggleScreen: () => void
          trigger: (event: string) => void
          volume: (
            percentage?: number | undefined,
            nonotice?: boolean | undefined
          ) => number
          unique: () => string | undefined
        },
        unknown,
        {},
        {},
        import('vue').ComponentOptionsMixin,
        import('vue').ComponentOptionsMixin,
        (
          | 'progress'
          | 'play'
          | 'ready'
          | 'timeupdate'
          | 'fetch_start'
          | 'abort'
          | 'fetch_stop'
          | 'canplay'
          | 'canplaythrough'
          | 'durationchange'
          | 'emptied'
          | 'ended'
          | 'error'
          | 'loadeddata'
          | 'loadedmetadata'
          | 'loadstart'
          | 'mozaudioavailable'
          | 'pause'
          | 'playing'
          | 'ratechange'
          | 'seeked'
          | 'seeking'
          | 'stalled'
          | 'suspend'
          | 'volumechange'
          | 'waiting'
          | 'screenshot'
          | 'contextmenu_show'
          | 'contextmenu_hide'
          | 'notice_show'
          | 'notice_hide'
          | 'quality_start'
          | 'quality_end'
          | 'destroy'
          | 'resize'
          | 'fullscreen'
          | 'fullscreen_cancel'
        )[],
        | 'progress'
        | 'play'
        | 'ready'
        | 'timeupdate'
        | 'fetch_start'
        | 'abort'
        | 'fetch_stop'
        | 'canplay'
        | 'canplaythrough'
        | 'durationchange'
        | 'emptied'
        | 'ended'
        | 'error'
        | 'loadeddata'
        | 'loadedmetadata'
        | 'loadstart'
        | 'mozaudioavailable'
        | 'pause'
        | 'playing'
        | 'ratechange'
        | 'seeked'
        | 'seeking'
        | 'stalled'
        | 'suspend'
        | 'volumechange'
        | 'waiting'
        | 'screenshot'
        | 'contextmenu_show'
        | 'contextmenu_hide'
        | 'notice_show'
        | 'notice_hide'
        | 'quality_start'
        | 'quality_end'
        | 'destroy'
        | 'resize'
        | 'fullscreen'
        | 'fullscreen_cancel',
        {
          fill: boolean
          border: boolean
          index: number
          lockControl: boolean
          options: Record<string, any>
          poster: string
        },
        {},
        string
      > &
        import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        (new () => {
          $slots: {
            ready: (_: {}) => any
            loading: (_: {}) => any
          }
        })
      getViewCount: () => number
      muted: () => void
      play: (opts: V3dMonitorOptions) => void
      setSelected: (
        player: {
          new (...args: any[]): {
            $: import('vue').ComponentInternalInstance
            $data: {}
            $props: Partial<{
              fill: boolean
              border: boolean
              index: number
              lockControl: boolean
              options: Record<string, any>
              poster: string
            }> &
              Omit<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    border: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fill: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    index: {
                      type: NumberConstructor
                      default: number
                    }
                    lockControl: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
                        allowPause: boolean
                        autoplay: boolean
                        controls: boolean
                        contextmenu: never[]
                        hotkey: boolean
                        live: boolean
                        logo: undefined
                        loop: boolean
                        muted: boolean
                        mutex: boolean
                        preload: string
                        screenshot: boolean
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                  }>
                > & {
                  onError?: ((...args: any[]) => any) | undefined
                  onAbort?: ((...args: any[]) => any) | undefined
                  onCanplay?: ((...args: any[]) => any) | undefined
                  onCanplaythrough?: ((...args: any[]) => any) | undefined
                  onDurationchange?: ((...args: any[]) => any) | undefined
                  onEmptied?: ((...args: any[]) => any) | undefined
                  onEnded?: ((...args: any[]) => any) | undefined
                  onLoadeddata?: ((...args: any[]) => any) | undefined
                  onLoadedmetadata?: ((...args: any[]) => any) | undefined
                  onLoadstart?: ((...args: any[]) => any) | undefined
                  onPause?: ((...args: any[]) => any) | undefined
                  onPlay?: ((...args: any[]) => any) | undefined
                  onPlaying?: ((...args: any[]) => any) | undefined
                  onProgress?: ((...args: any[]) => any) | undefined
                  onRatechange?: ((...args: any[]) => any) | undefined
                  onSeeked?: ((...args: any[]) => any) | undefined
                  onSeeking?: ((...args: any[]) => any) | undefined
                  onStalled?: ((...args: any[]) => any) | undefined
                  onSuspend?: ((...args: any[]) => any) | undefined
                  onTimeupdate?: ((...args: any[]) => any) | undefined
                  onVolumechange?: ((...args: any[]) => any) | undefined
                  onWaiting?: ((...args: any[]) => any) | undefined
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onScreenshot?: ((...args: any[]) => any) | undefined
                  onContextmenu_show?: ((...args: any[]) => any) | undefined
                  onContextmenu_hide?: ((...args: any[]) => any) | undefined
                  onNotice_show?: ((...args: any[]) => any) | undefined
                  onNotice_hide?: ((...args: any[]) => any) | undefined
                  onQuality_start?: ((...args: any[]) => any) | undefined
                  onQuality_end?: ((...args: any[]) => any) | undefined
                  onDestroy?: ((...args: any[]) => any) | undefined
                  onResize?: ((...args: any[]) => any) | undefined
                  onFullscreen?: ((...args: any[]) => any) | undefined
                  onFullscreen_cancel?: ((...args: any[]) => any) | undefined
                } & import('vue').VNodeProps &
                  import('vue').AllowedComponentProps &
                  import('vue').ComponentCustomProps,
                | 'fill'
                | 'lockControl'
                | 'border'
                | 'index'
                | 'options'
                | 'poster'
              >
            $attrs: {
              [x: string]: unknown
            }
            $refs: {
              [x: string]: unknown
            }
            $slots: Readonly<{
              [name: string]: import('vue').Slot | undefined
            }>
            $root:
              | import('vue').ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  import('vue').ComponentOptionsBase<
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    {},
                    {},
                    string
                  >,
                  {}
                >
              | null
            $parent:
              | import('vue').ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  import('vue').ComponentOptionsBase<
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    {},
                    {},
                    string
                  >,
                  {}
                >
              | null
            $emit: (
              event:
                | 'progress'
                | 'play'
                | 'ready'
                | 'timeupdate'
                | 'fetch_start'
                | 'abort'
                | 'fetch_stop'
                | 'canplay'
                | 'canplaythrough'
                | 'durationchange'
                | 'emptied'
                | 'ended'
                | 'error'
                | 'loadeddata'
                | 'loadedmetadata'
                | 'loadstart'
                | 'mozaudioavailable'
                | 'pause'
                | 'playing'
                | 'ratechange'
                | 'seeked'
                | 'seeking'
                | 'stalled'
                | 'suspend'
                | 'volumechange'
                | 'waiting'
                | 'screenshot'
                | 'contextmenu_show'
                | 'contextmenu_hide'
                | 'notice_show'
                | 'notice_hide'
                | 'quality_start'
                | 'quality_end'
                | 'destroy'
                | 'resize'
                | 'fullscreen'
                | 'fullscreen_cancel',
              ...args: any[]
            ) => void
            $el: any
            $options: import('vue').ComponentOptionsBase<
              Readonly<
                import('vue').ExtractPropTypes<{
                  border: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fill: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  index: {
                    type: NumberConstructor
                    default: number
                  }
                  lockControl: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
                      allowPause: boolean
                      autoplay: boolean
                      controls: boolean
                      contextmenu: never[]
                      hotkey: boolean
                      live: boolean
                      logo: undefined
                      loop: boolean
                      muted: boolean
                      mutex: boolean
                      preload: string
                      screenshot: boolean
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                }>
              > & {
                onError?: ((...args: any[]) => any) | undefined
                onAbort?: ((...args: any[]) => any) | undefined
                onCanplay?: ((...args: any[]) => any) | undefined
                onCanplaythrough?: ((...args: any[]) => any) | undefined
                onDurationchange?: ((...args: any[]) => any) | undefined
                onEmptied?: ((...args: any[]) => any) | undefined
                onEnded?: ((...args: any[]) => any) | undefined
                onLoadeddata?: ((...args: any[]) => any) | undefined
                onLoadedmetadata?: ((...args: any[]) => any) | undefined
                onLoadstart?: ((...args: any[]) => any) | undefined
                onPause?: ((...args: any[]) => any) | undefined
                onPlay?: ((...args: any[]) => any) | undefined
                onPlaying?: ((...args: any[]) => any) | undefined
                onProgress?: ((...args: any[]) => any) | undefined
                onRatechange?: ((...args: any[]) => any) | undefined
                onSeeked?: ((...args: any[]) => any) | undefined
                onSeeking?: ((...args: any[]) => any) | undefined
                onStalled?: ((...args: any[]) => any) | undefined
                onSuspend?: ((...args: any[]) => any) | undefined
                onTimeupdate?: ((...args: any[]) => any) | undefined
                onVolumechange?: ((...args: any[]) => any) | undefined
                onWaiting?: ((...args: any[]) => any) | undefined
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onScreenshot?: ((...args: any[]) => any) | undefined
                onContextmenu_show?: ((...args: any[]) => any) | undefined
                onContextmenu_hide?: ((...args: any[]) => any) | undefined
                onNotice_show?: ((...args: any[]) => any) | undefined
                onNotice_hide?: ((...args: any[]) => any) | undefined
                onQuality_start?: ((...args: any[]) => any) | undefined
                onQuality_end?: ((...args: any[]) => any) | undefined
                onDestroy?: ((...args: any[]) => any) | undefined
                onResize?: ((...args: any[]) => any) | undefined
                onFullscreen?: ((...args: any[]) => any) | undefined
                onFullscreen_cancel?: ((...args: any[]) => any) | undefined
              },
              {
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                focused: (focus?: boolean | undefined) => boolean | undefined
                index: () => number
                muted: () => void
                occupy: (order: number, unique: string, text: string) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number) => number
                seek: (time: number) => void
                snapshot: () => void
                status: () => number
                toggle: () => void
                toggleScreen: () => void
                trigger: (event: string) => void
                volume: (
                  percentage?: number | undefined,
                  nonotice?: boolean | undefined
                ) => number
                unique: () => string | undefined
              },
              unknown,
              {},
              {},
              import('vue').ComponentOptionsMixin,
              import('vue').ComponentOptionsMixin,
              (
                | 'progress'
                | 'play'
                | 'ready'
                | 'timeupdate'
                | 'fetch_start'
                | 'abort'
                | 'fetch_stop'
                | 'canplay'
                | 'canplaythrough'
                | 'durationchange'
                | 'emptied'
                | 'ended'
                | 'error'
                | 'loadeddata'
                | 'loadedmetadata'
                | 'loadstart'
                | 'mozaudioavailable'
                | 'pause'
                | 'playing'
                | 'ratechange'
                | 'seeked'
                | 'seeking'
                | 'stalled'
                | 'suspend'
                | 'volumechange'
                | 'waiting'
                | 'screenshot'
                | 'contextmenu_show'
                | 'contextmenu_hide'
                | 'notice_show'
                | 'notice_hide'
                | 'quality_start'
                | 'quality_end'
                | 'destroy'
                | 'resize'
                | 'fullscreen'
                | 'fullscreen_cancel'
              )[],
              string,
              {
                fill: boolean
                border: boolean
                index: number
                lockControl: boolean
                options: Record<string, any>
                poster: string
              },
              {},
              string
            > & {
              beforeCreate?: ((() => void) | (() => void)[]) | undefined
              created?: ((() => void) | (() => void)[]) | undefined
              beforeMount?: ((() => void) | (() => void)[]) | undefined
              mounted?: ((() => void) | (() => void)[]) | undefined
              beforeUpdate?: ((() => void) | (() => void)[]) | undefined
              updated?: ((() => void) | (() => void)[]) | undefined
              activated?: ((() => void) | (() => void)[]) | undefined
              deactivated?: ((() => void) | (() => void)[]) | undefined
              beforeDestroy?: ((() => void) | (() => void)[]) | undefined
              beforeUnmount?: ((() => void) | (() => void)[]) | undefined
              destroyed?: ((() => void) | (() => void)[]) | undefined
              unmounted?: ((() => void) | (() => void)[]) | undefined
              renderTracked?:
                | (
                    | ((e: import('vue').DebuggerEvent) => void)
                    | ((e: import('vue').DebuggerEvent) => void)[]
                  )
                | undefined
              renderTriggered?:
                | (
                    | ((e: import('vue').DebuggerEvent) => void)
                    | ((e: import('vue').DebuggerEvent) => void)[]
                  )
                | undefined
              errorCaptured?:
                | (
                    | ((
                        err: unknown,
                        instance:
                          | import('vue').ComponentPublicInstance<
                              {},
                              {},
                              {},
                              {},
                              {},
                              {},
                              {},
                              {},
                              false,
                              import('vue').ComponentOptionsBase<
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                {},
                                {},
                                string
                              >,
                              {}
                            >
                          | null,
                        info: string
                      ) => boolean | void)
                    | ((
                        err: unknown,
                        instance:
                          | import('vue').ComponentPublicInstance<
                              {},
                              {},
                              {},
                              {},
                              {},
                              {},
                              {},
                              {},
                              false,
                              import('vue').ComponentOptionsBase<
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                {},
                                {},
                                string
                              >,
                              {}
                            >
                          | null,
                        info: string
                      ) => boolean | void)[]
                  )
                | undefined
            }
            $forceUpdate: () => void
            $nextTick: typeof import('vue').nextTick
            $watch<T extends string | ((...args: any) => any)>(
              source: T,
              cb: T extends (...args: any) => infer R
                ? (args_0: R, args_1: R) => any
                : (...args: any) => any,
              options?: import('vue').WatchOptions<boolean> | undefined
            ): import('vue').WatchStopHandle
          } & Readonly<
            import('vue').ExtractPropTypes<{
              border: {
                type: BooleanConstructor
                default: boolean
              }
              fill: {
                type: BooleanConstructor
                default: boolean
              }
              index: {
                type: NumberConstructor
                default: number
              }
              lockControl: {
                type: BooleanConstructor
                default: boolean
              }
              options: {
                type: ObjectConstructor
                default(): {
                  allowPause: boolean
                  autoplay: boolean
                  controls: boolean
                  contextmenu: never[]
                  hotkey: boolean
                  live: boolean
                  logo: undefined
                  loop: boolean
                  muted: boolean
                  mutex: boolean
                  preload: string
                  screenshot: boolean
                  src: undefined
                  theme: string
                  volume: number
                }
              }
              poster: {
                type: StringConstructor
                default: string
              }
            }>
          > & {
              onError?: ((...args: any[]) => any) | undefined
              onAbort?: ((...args: any[]) => any) | undefined
              onCanplay?: ((...args: any[]) => any) | undefined
              onCanplaythrough?: ((...args: any[]) => any) | undefined
              onDurationchange?: ((...args: any[]) => any) | undefined
              onEmptied?: ((...args: any[]) => any) | undefined
              onEnded?: ((...args: any[]) => any) | undefined
              onLoadeddata?: ((...args: any[]) => any) | undefined
              onLoadedmetadata?: ((...args: any[]) => any) | undefined
              onLoadstart?: ((...args: any[]) => any) | undefined
              onPause?: ((...args: any[]) => any) | undefined
              onPlay?: ((...args: any[]) => any) | undefined
              onPlaying?: ((...args: any[]) => any) | undefined
              onProgress?: ((...args: any[]) => any) | undefined
              onRatechange?: ((...args: any[]) => any) | undefined
              onSeeked?: ((...args: any[]) => any) | undefined
              onSeeking?: ((...args: any[]) => any) | undefined
              onStalled?: ((...args: any[]) => any) | undefined
              onSuspend?: ((...args: any[]) => any) | undefined
              onTimeupdate?: ((...args: any[]) => any) | undefined
              onVolumechange?: ((...args: any[]) => any) | undefined
              onWaiting?: ((...args: any[]) => any) | undefined
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onScreenshot?: ((...args: any[]) => any) | undefined
              onContextmenu_show?: ((...args: any[]) => any) | undefined
              onContextmenu_hide?: ((...args: any[]) => any) | undefined
              onNotice_show?: ((...args: any[]) => any) | undefined
              onNotice_hide?: ((...args: any[]) => any) | undefined
              onQuality_start?: ((...args: any[]) => any) | undefined
              onQuality_end?: ((...args: any[]) => any) | undefined
              onDestroy?: ((...args: any[]) => any) | undefined
              onResize?: ((...args: any[]) => any) | undefined
              onFullscreen?: ((...args: any[]) => any) | undefined
              onFullscreen_cancel?: ((...args: any[]) => any) | undefined
            } & import('vue').ShallowUnwrapRef<{
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              focused: (focus?: boolean | undefined) => boolean | undefined
              index: () => number
              muted: () => void
              occupy: (order: number, unique: string, text: string) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number) => number
              seek: (time: number) => void
              snapshot: () => void
              status: () => number
              toggle: () => void
              toggleScreen: () => void
              trigger: (event: string) => void
              volume: (
                percentage?: number | undefined,
                nonotice?: boolean | undefined
              ) => number
              unique: () => string | undefined
            }> & {} & import('vue').ComponentCustomProperties & {}
          __isFragment?: undefined
          __isTeleport?: undefined
          __isSuspense?: undefined
        } & import('vue').ComponentOptionsBase<
          Readonly<
            import('vue').ExtractPropTypes<{
              border: {
                type: BooleanConstructor
                default: boolean
              }
              fill: {
                type: BooleanConstructor
                default: boolean
              }
              index: {
                type: NumberConstructor
                default: number
              }
              lockControl: {
                type: BooleanConstructor
                default: boolean
              }
              options: {
                type: ObjectConstructor
                default(): {
                  allowPause: boolean
                  autoplay: boolean
                  controls: boolean
                  contextmenu: never[]
                  hotkey: boolean
                  live: boolean
                  logo: undefined
                  loop: boolean
                  muted: boolean
                  mutex: boolean
                  preload: string
                  screenshot: boolean
                  src: undefined
                  theme: string
                  volume: number
                }
              }
              poster: {
                type: StringConstructor
                default: string
              }
            }>
          > & {
            onError?: ((...args: any[]) => any) | undefined
            onAbort?: ((...args: any[]) => any) | undefined
            onCanplay?: ((...args: any[]) => any) | undefined
            onCanplaythrough?: ((...args: any[]) => any) | undefined
            onDurationchange?: ((...args: any[]) => any) | undefined
            onEmptied?: ((...args: any[]) => any) | undefined
            onEnded?: ((...args: any[]) => any) | undefined
            onLoadeddata?: ((...args: any[]) => any) | undefined
            onLoadedmetadata?: ((...args: any[]) => any) | undefined
            onLoadstart?: ((...args: any[]) => any) | undefined
            onPause?: ((...args: any[]) => any) | undefined
            onPlay?: ((...args: any[]) => any) | undefined
            onPlaying?: ((...args: any[]) => any) | undefined
            onProgress?: ((...args: any[]) => any) | undefined
            onRatechange?: ((...args: any[]) => any) | undefined
            onSeeked?: ((...args: any[]) => any) | undefined
            onSeeking?: ((...args: any[]) => any) | undefined
            onStalled?: ((...args: any[]) => any) | undefined
            onSuspend?: ((...args: any[]) => any) | undefined
            onTimeupdate?: ((...args: any[]) => any) | undefined
            onVolumechange?: ((...args: any[]) => any) | undefined
            onWaiting?: ((...args: any[]) => any) | undefined
            onReady?: ((...args: any[]) => any) | undefined
            onFetch_start?: ((...args: any[]) => any) | undefined
            onFetch_stop?: ((...args: any[]) => any) | undefined
            onMozaudioavailable?: ((...args: any[]) => any) | undefined
            onScreenshot?: ((...args: any[]) => any) | undefined
            onContextmenu_show?: ((...args: any[]) => any) | undefined
            onContextmenu_hide?: ((...args: any[]) => any) | undefined
            onNotice_show?: ((...args: any[]) => any) | undefined
            onNotice_hide?: ((...args: any[]) => any) | undefined
            onQuality_start?: ((...args: any[]) => any) | undefined
            onQuality_end?: ((...args: any[]) => any) | undefined
            onDestroy?: ((...args: any[]) => any) | undefined
            onResize?: ((...args: any[]) => any) | undefined
            onFullscreen?: ((...args: any[]) => any) | undefined
            onFullscreen_cancel?: ((...args: any[]) => any) | undefined
          },
          {
            bufferedEnd: () => number
            close: () => void
            currentTime: () => number
            currentUrl: () => string
            el: () => any
            focused: (focus?: boolean | undefined) => boolean | undefined
            index: () => number
            muted: () => void
            occupy: (order: number, unique: string, text: string) => void
            order: () => number
            pause: () => void
            play: (
              option: import('v3d-player').V3dPlayerOptions | undefined
            ) => void
            playRate: (rate: number) => number
            seek: (time: number) => void
            snapshot: () => void
            status: () => number
            toggle: () => void
            toggleScreen: () => void
            trigger: (event: string) => void
            volume: (
              percentage?: number | undefined,
              nonotice?: boolean | undefined
            ) => number
            unique: () => string | undefined
          },
          unknown,
          {},
          {},
          import('vue').ComponentOptionsMixin,
          import('vue').ComponentOptionsMixin,
          (
            | 'progress'
            | 'play'
            | 'ready'
            | 'timeupdate'
            | 'fetch_start'
            | 'abort'
            | 'fetch_stop'
            | 'canplay'
            | 'canplaythrough'
            | 'durationchange'
            | 'emptied'
            | 'ended'
            | 'error'
            | 'loadeddata'
            | 'loadedmetadata'
            | 'loadstart'
            | 'mozaudioavailable'
            | 'pause'
            | 'playing'
            | 'ratechange'
            | 'seeked'
            | 'seeking'
            | 'stalled'
            | 'suspend'
            | 'volumechange'
            | 'waiting'
            | 'screenshot'
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen'
            | 'fullscreen_cancel'
          )[],
          | 'progress'
          | 'play'
          | 'ready'
          | 'timeupdate'
          | 'fetch_start'
          | 'abort'
          | 'fetch_stop'
          | 'canplay'
          | 'canplaythrough'
          | 'durationchange'
          | 'emptied'
          | 'ended'
          | 'error'
          | 'loadeddata'
          | 'loadedmetadata'
          | 'loadstart'
          | 'mozaudioavailable'
          | 'pause'
          | 'playing'
          | 'ratechange'
          | 'seeked'
          | 'seeking'
          | 'stalled'
          | 'suspend'
          | 'volumechange'
          | 'waiting'
          | 'screenshot'
          | 'contextmenu_show'
          | 'contextmenu_hide'
          | 'notice_show'
          | 'notice_hide'
          | 'quality_start'
          | 'quality_end'
          | 'destroy'
          | 'resize'
          | 'fullscreen'
          | 'fullscreen_cancel',
          {
            fill: boolean
            border: boolean
            index: number
            lockControl: boolean
            options: Record<string, any>
            poster: string
          },
          {},
          string
        > &
          import('vue').VNodeProps &
          import('vue').AllowedComponentProps &
          import('vue').ComponentCustomProps &
          (new () => {
            $slots: {
              ready: (_: {}) => any
              loading: (_: {}) => any
            }
          })
      ) => void
      snapshot: (index: number) => void
      stop: () => void
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        closeAfterViewChange: {
          type: BooleanConstructor
          default: boolean
        }
        controlBar: {
          type: (BooleanConstructor | ObjectConstructor)[]
          default: boolean
        }
        count: {
          type: NumberConstructor
          default: number
        }
        duplicate: {
          type: BooleanConstructor
          default: boolean
        }
        focused: {
          type: BooleanConstructor
          default: boolean
        }
        closeTime: {
          type: NumberConstructor
          default: number
        }
        /**
         * 常驻工具栏
         */
        lockControl: {
          type: BooleanConstructor
          default: boolean
        }
        loopCreate: {
          type: BooleanConstructor
          default: boolean
        }
        theme: {
          type: StringConstructor
          default: string
        }
      }>
    >,
    {
      closeAfterViewChange: boolean
      controlBar: boolean | Record<string, any>
      count: number
      duplicate: boolean
      focused: boolean
      closeTime: number
      lockControl: boolean
      loopCreate: boolean
      theme: string
    }
  >,
  {
    ready: (_: {}) => any
    loading: (_: {}) => any
  }
>
export default V3dMonitor
