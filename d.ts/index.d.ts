/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import V3dPlayer from 'v3d-player'
export type Player = typeof V3dPlayer

export { V3dDisplay } from 'v3d-player'

export type V3dMonitorEvents =
  | 'timeout'
  | 'loadeddata'
  | 'refresh'
  | 'position'
  | 'forward'

export interface V3dControlBar {
  enabled: boolean
  position: string
  button: string[]
}

export interface V3dApplyParam {
  viewIndex?: number | undefined
  unique: string
  title: string
  load?: V3dLoading | undefined
  userData?: any | undefined
}

export interface DPlayerContextMenuItem {
  text: string
  link?: string | undefined
  click?: ((player: any) => void) | undefined
}

export interface V3dLoading {
  title: string
  detail: string
  loading?: string | undefined
}

export interface V3dMonitorOptions {
  allowPause?: boolean | undefined
  autoRate?: boolean | undefined
  contextmenu?: DPlayerContextMenuItem[] | undefined
  order?: number
  src: string
  title?: string | undefined
  load?: V3dLoading | undefined
  unique?: string | undefined
  viewIndex?: number | undefined
  userData?: any | undefined
  duration?: number | undefined
  startTime?: number | undefined
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
      closeTime: {
        type: NumberConstructor
        default: number
      }
      controlBar: {
        type: (BooleanConstructor | ObjectConstructor)[]
        default: boolean
      }
      count: {
        type: NumberConstructor
        default: number
      }
      drag: {
        type: BooleanConstructor
        default: boolean
      }
      duplicate: {
        type: BooleanConstructor
        default: boolean
      }
      focused: {
        type: BooleanConstructor
        default: boolean
      }
      fullscreen: {
        type: BooleanConstructor
        default: boolean
      }
      lang: {
        type: StringConstructor
        default(): string
      }
      forward: {
        type: BooleanConstructor
        default: boolean
      }
      /**
       * 常驻工具栏
       */
      lockControls: {
        type: StringConstructor
        default: string
      }
      loopCreate: {
        type: BooleanConstructor
        default: boolean
      }
      screenshot: {
        type: BooleanConstructor
        default: boolean
      }
      timeout: {
        type: NumberConstructor
        default: number
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
                timeout: number
                screenshot: boolean
                fullscreen: boolean
                forward: boolean
                allowPause: boolean
                border: boolean
                index: number
                controls: string
                lang: string
                options: Record<string, any>
                poster: string
              }> &
                Omit<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      allowPause: {
                        type: BooleanConstructor
                        default: boolean
                      }
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
                      controls: {
                        type: StringConstructor
                        default: string
                      }
                      lang: {
                        type: StringConstructor
                        default: string
                      }
                      forward: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      screenshot: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fullscreen: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
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
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                      timeout: {
                        type: NumberConstructor
                        default: number
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
                    onPosition?: ((...args: any[]) => any) | undefined
                    /**
                     * 获取空闲视图
                     */
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onTimeout?: ((...args: any[]) => any) | undefined
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
                    onForward?: ((...args: any[]) => any) | undefined
                  } & import('vue').VNodeProps &
                    import('vue').AllowedComponentProps &
                    import('vue').ComponentCustomProps,
                  | 'fill'
                  | 'timeout'
                  | 'forward'
                  | 'fullscreen'
                  | 'lang'
                  | 'screenshot'
                  | 'allowPause'
                  | 'border'
                  | 'index'
                  | 'controls'
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
                  | 'timeout'
                  | 'loadeddata'
                  | 'position'
                  | 'forward'
                  | 'fullscreen'
                  | 'screenshot'
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
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen_cancel',
                ...args: any[]
              ) => void
              $el: any
              $options: import('vue').ComponentOptionsBase<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    allowPause: {
                      type: BooleanConstructor
                      default: boolean
                    }
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
                    controls: {
                      type: StringConstructor
                      default: string
                    }
                    lang: {
                      type: StringConstructor
                      default: string
                    }
                    forward: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    screenshot: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fullscreen: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
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
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                    timeout: {
                      type: NumberConstructor
                      default: number
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
                  onPosition?: ((...args: any[]) => any) | undefined
                  /**
                   * 获取空闲视图
                   */
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onTimeout?: ((...args: any[]) => any) | undefined
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
                  onForward?: ((...args: any[]) => any) | undefined
                },
                {
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  error: (msg: string) => void
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  getOptions: () =>
                    | {
                        autoplay?: boolean | undefined
                        autoRate?:
                          | {
                              enabled: boolean
                              min: number
                              max: number
                            }
                          | undefined
                        closeTime?: number | undefined
                        connect?: boolean | undefined
                        container?: HTMLElement | null | undefined
                        controls?: boolean | undefined
                        contextmenu?:
                          | {
                              text: string
                              link?: string | undefined
                              click?: ((player: any) => void) | undefined
                            }[]
                          | undefined
                        debug?: boolean | undefined
                        hasAudio?: boolean | undefined
                        hotkey?: boolean | undefined
                        lang?: string | undefined
                        live?: boolean | undefined
                        logo?: string | undefined
                        loop?: boolean | undefined
                        muted?: boolean | undefined
                        mutex?: boolean | undefined
                        order?: number | undefined
                        preload?: any
                        preventClickToggle?: boolean | undefined
                        src: string
                        record?: boolean | undefined
                        replay?: number | undefined
                        theme?: string | undefined
                        title?: string | undefined
                        video?:
                          | {
                              url: string
                              pic?: string | undefined
                              type?: string | undefined
                              customType?: any
                              quality?:
                                | {
                                    name: string
                                    url: string
                                    type?: string | undefined
                                  }[]
                                | undefined
                              defaultQuality?: number | undefined
                            }
                          | undefined
                        volume?: number | undefined
                        unique?: string | undefined
                        userData?: any
                        duration?: number | undefined
                        startTime?: number | undefined
                      }
                    | undefined
                  index: () => number
                  locale: (key: string) => any
                  message: () => string
                  muted: () => void
                  occupy: (
                    order: number,
                    unique: string,
                    text: string,
                    userData: any
                  ) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (
                    rate: number,
                    notify?: boolean | undefined
                  ) => number
                  position: () => number
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
                  userData: () => any
                },
                unknown,
                {},
                {},
                import('vue').ComponentOptionsMixin,
                import('vue').ComponentOptionsMixin,
                (
                  | 'progress'
                  | 'timeout'
                  | 'loadeddata'
                  | 'position'
                  | 'forward'
                  | 'fullscreen'
                  | 'screenshot'
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
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen_cancel'
                )[],
                string,
                {
                  fill: boolean
                  timeout: number
                  screenshot: boolean
                  fullscreen: boolean
                  forward: boolean
                  allowPause: boolean
                  border: boolean
                  index: number
                  controls: string
                  lang: string
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
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              } & import('vue').ShallowUnwrapRef<{
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                error: (msg: string) => void
                focused: (focus?: boolean | undefined) => boolean | undefined
                getOptions: () =>
                  | {
                      autoplay?: boolean | undefined
                      autoRate?:
                        | {
                            enabled: boolean
                            min: number
                            max: number
                          }
                        | undefined
                      closeTime?: number | undefined
                      connect?: boolean | undefined
                      container?: HTMLElement | null | undefined
                      controls?: boolean | undefined
                      contextmenu?:
                        | {
                            text: string
                            link?: string | undefined
                            click?: ((player: any) => void) | undefined
                          }[]
                        | undefined
                      debug?: boolean | undefined
                      hasAudio?: boolean | undefined
                      hotkey?: boolean | undefined
                      lang?: string | undefined
                      live?: boolean | undefined
                      logo?: string | undefined
                      loop?: boolean | undefined
                      muted?: boolean | undefined
                      mutex?: boolean | undefined
                      order?: number | undefined
                      preload?: any
                      preventClickToggle?: boolean | undefined
                      src: string
                      record?: boolean | undefined
                      replay?: number | undefined
                      theme?: string | undefined
                      title?: string | undefined
                      video?:
                        | {
                            url: string
                            pic?: string | undefined
                            type?: string | undefined
                            customType?: any
                            quality?:
                              | {
                                  name: string
                                  url: string
                                  type?: string | undefined
                                }[]
                              | undefined
                            defaultQuality?: number | undefined
                          }
                        | undefined
                      volume?: number | undefined
                      unique?: string | undefined
                      userData?: any
                      duration?: number | undefined
                      startTime?: number | undefined
                    }
                  | undefined
                index: () => number
                locale: (key: string) => any
                message: () => string
                muted: () => void
                occupy: (
                  order: number,
                  unique: string,
                  text: string,
                  userData: any
                ) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number, notify?: boolean | undefined) => number
                position: () => number
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
                userData: () => any
              }> & {} & import('vue').ComponentCustomProperties & {}
            __isFragment?: undefined
            __isTeleport?: undefined
            __isSuspense?: undefined
          } & import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
              onPosition?: ((...args: any[]) => any) | undefined
              /**
               * 获取空闲视图
               */
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onTimeout?: ((...args: any[]) => any) | undefined
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
              onForward?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              error: (msg: string) => void
              focused: (focus?: boolean | undefined) => boolean | undefined
              getOptions: () =>
                | {
                    autoplay?: boolean | undefined
                    autoRate?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                        }
                      | undefined
                    closeTime?: number | undefined
                    connect?: boolean | undefined
                    container?: HTMLElement | null | undefined
                    controls?: boolean | undefined
                    contextmenu?:
                      | {
                          text: string
                          link?: string | undefined
                          click?: ((player: any) => void) | undefined
                        }[]
                      | undefined
                    debug?: boolean | undefined
                    hasAudio?: boolean | undefined
                    hotkey?: boolean | undefined
                    lang?: string | undefined
                    live?: boolean | undefined
                    logo?: string | undefined
                    loop?: boolean | undefined
                    muted?: boolean | undefined
                    mutex?: boolean | undefined
                    order?: number | undefined
                    preload?: any
                    preventClickToggle?: boolean | undefined
                    src: string
                    record?: boolean | undefined
                    replay?: number | undefined
                    theme?: string | undefined
                    title?: string | undefined
                    video?:
                      | {
                          url: string
                          pic?: string | undefined
                          type?: string | undefined
                          customType?: any
                          quality?:
                            | {
                                name: string
                                url: string
                                type?: string | undefined
                              }[]
                            | undefined
                          defaultQuality?: number | undefined
                        }
                      | undefined
                    volume?: number | undefined
                    unique?: string | undefined
                    userData?: any
                    duration?: number | undefined
                    startTime?: number | undefined
                  }
                | undefined
              index: () => number
              locale: (key: string) => any
              message: () => string
              muted: () => void
              occupy: (
                order: number,
                unique: string,
                text: string,
                userData: any
              ) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number, notify?: boolean | undefined) => number
              position: () => number
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
              userData: () => any
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel'
            )[],
            | 'progress'
            | 'timeout'
            | 'loadeddata'
            | 'position'
            | 'forward'
            | 'fullscreen'
            | 'screenshot'
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
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen_cancel',
            {
              fill: boolean
              timeout: number
              screenshot: boolean
              fullscreen: boolean
              forward: boolean
              allowPause: boolean
              border: boolean
              index: number
              controls: string
              lang: string
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
                error: (_: {}) => any
              }
            }))
        | null
      getIdleView: (unique: string | undefined) =>
        | ({
            new (...args: any[]): {
              $: import('vue').ComponentInternalInstance
              $data: {}
              $props: Partial<{
                fill: boolean
                timeout: number
                screenshot: boolean
                fullscreen: boolean
                forward: boolean
                allowPause: boolean
                border: boolean
                index: number
                controls: string
                lang: string
                options: Record<string, any>
                poster: string
              }> &
                Omit<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      allowPause: {
                        type: BooleanConstructor
                        default: boolean
                      }
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
                      controls: {
                        type: StringConstructor
                        default: string
                      }
                      lang: {
                        type: StringConstructor
                        default: string
                      }
                      forward: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      screenshot: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fullscreen: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
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
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                      timeout: {
                        type: NumberConstructor
                        default: number
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
                    onPosition?: ((...args: any[]) => any) | undefined
                    /**
                     * 获取空闲视图
                     */
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onTimeout?: ((...args: any[]) => any) | undefined
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
                    onForward?: ((...args: any[]) => any) | undefined
                  } & import('vue').VNodeProps &
                    import('vue').AllowedComponentProps &
                    import('vue').ComponentCustomProps,
                  | 'fill'
                  | 'timeout'
                  | 'forward'
                  | 'fullscreen'
                  | 'lang'
                  | 'screenshot'
                  | 'allowPause'
                  | 'border'
                  | 'index'
                  | 'controls'
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
                  | 'timeout'
                  | 'loadeddata'
                  | 'position'
                  | 'forward'
                  | 'fullscreen'
                  | 'screenshot'
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
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen_cancel',
                ...args: any[]
              ) => void
              $el: any
              $options: import('vue').ComponentOptionsBase<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    allowPause: {
                      type: BooleanConstructor
                      default: boolean
                    }
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
                    controls: {
                      type: StringConstructor
                      default: string
                    }
                    lang: {
                      type: StringConstructor
                      default: string
                    }
                    forward: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    screenshot: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fullscreen: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
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
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                    timeout: {
                      type: NumberConstructor
                      default: number
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
                  onPosition?: ((...args: any[]) => any) | undefined
                  /**
                   * 获取空闲视图
                   */
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onTimeout?: ((...args: any[]) => any) | undefined
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
                  onForward?: ((...args: any[]) => any) | undefined
                },
                {
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  error: (msg: string) => void
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  getOptions: () =>
                    | {
                        autoplay?: boolean | undefined
                        autoRate?:
                          | {
                              enabled: boolean
                              min: number
                              max: number
                            }
                          | undefined
                        closeTime?: number | undefined
                        connect?: boolean | undefined
                        container?: HTMLElement | null | undefined
                        controls?: boolean | undefined
                        contextmenu?:
                          | {
                              text: string
                              link?: string | undefined
                              click?: ((player: any) => void) | undefined
                            }[]
                          | undefined
                        debug?: boolean | undefined
                        hasAudio?: boolean | undefined
                        hotkey?: boolean | undefined
                        lang?: string | undefined
                        live?: boolean | undefined
                        logo?: string | undefined
                        loop?: boolean | undefined
                        muted?: boolean | undefined
                        mutex?: boolean | undefined
                        order?: number | undefined
                        preload?: any
                        preventClickToggle?: boolean | undefined
                        src: string
                        record?: boolean | undefined
                        replay?: number | undefined
                        theme?: string | undefined
                        title?: string | undefined
                        video?:
                          | {
                              url: string
                              pic?: string | undefined
                              type?: string | undefined
                              customType?: any
                              quality?:
                                | {
                                    name: string
                                    url: string
                                    type?: string | undefined
                                  }[]
                                | undefined
                              defaultQuality?: number | undefined
                            }
                          | undefined
                        volume?: number | undefined
                        unique?: string | undefined
                        userData?: any
                        duration?: number | undefined
                        startTime?: number | undefined
                      }
                    | undefined
                  index: () => number
                  locale: (key: string) => any
                  message: () => string
                  muted: () => void
                  occupy: (
                    order: number,
                    unique: string,
                    text: string,
                    userData: any
                  ) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (
                    rate: number,
                    notify?: boolean | undefined
                  ) => number
                  position: () => number
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
                  userData: () => any
                },
                unknown,
                {},
                {},
                import('vue').ComponentOptionsMixin,
                import('vue').ComponentOptionsMixin,
                (
                  | 'progress'
                  | 'timeout'
                  | 'loadeddata'
                  | 'position'
                  | 'forward'
                  | 'fullscreen'
                  | 'screenshot'
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
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen_cancel'
                )[],
                string,
                {
                  fill: boolean
                  timeout: number
                  screenshot: boolean
                  fullscreen: boolean
                  forward: boolean
                  allowPause: boolean
                  border: boolean
                  index: number
                  controls: string
                  lang: string
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
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              } & import('vue').ShallowUnwrapRef<{
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                error: (msg: string) => void
                focused: (focus?: boolean | undefined) => boolean | undefined
                getOptions: () =>
                  | {
                      autoplay?: boolean | undefined
                      autoRate?:
                        | {
                            enabled: boolean
                            min: number
                            max: number
                          }
                        | undefined
                      closeTime?: number | undefined
                      connect?: boolean | undefined
                      container?: HTMLElement | null | undefined
                      controls?: boolean | undefined
                      contextmenu?:
                        | {
                            text: string
                            link?: string | undefined
                            click?: ((player: any) => void) | undefined
                          }[]
                        | undefined
                      debug?: boolean | undefined
                      hasAudio?: boolean | undefined
                      hotkey?: boolean | undefined
                      lang?: string | undefined
                      live?: boolean | undefined
                      logo?: string | undefined
                      loop?: boolean | undefined
                      muted?: boolean | undefined
                      mutex?: boolean | undefined
                      order?: number | undefined
                      preload?: any
                      preventClickToggle?: boolean | undefined
                      src: string
                      record?: boolean | undefined
                      replay?: number | undefined
                      theme?: string | undefined
                      title?: string | undefined
                      video?:
                        | {
                            url: string
                            pic?: string | undefined
                            type?: string | undefined
                            customType?: any
                            quality?:
                              | {
                                  name: string
                                  url: string
                                  type?: string | undefined
                                }[]
                              | undefined
                            defaultQuality?: number | undefined
                          }
                        | undefined
                      volume?: number | undefined
                      unique?: string | undefined
                      userData?: any
                      duration?: number | undefined
                      startTime?: number | undefined
                    }
                  | undefined
                index: () => number
                locale: (key: string) => any
                message: () => string
                muted: () => void
                occupy: (
                  order: number,
                  unique: string,
                  text: string,
                  userData: any
                ) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number, notify?: boolean | undefined) => number
                position: () => number
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
                userData: () => any
              }> & {} & import('vue').ComponentCustomProperties & {}
            __isFragment?: undefined
            __isTeleport?: undefined
            __isSuspense?: undefined
          } & import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
              onPosition?: ((...args: any[]) => any) | undefined
              /**
               * 获取空闲视图
               */
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onTimeout?: ((...args: any[]) => any) | undefined
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
              onForward?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              error: (msg: string) => void
              focused: (focus?: boolean | undefined) => boolean | undefined
              getOptions: () =>
                | {
                    autoplay?: boolean | undefined
                    autoRate?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                        }
                      | undefined
                    closeTime?: number | undefined
                    connect?: boolean | undefined
                    container?: HTMLElement | null | undefined
                    controls?: boolean | undefined
                    contextmenu?:
                      | {
                          text: string
                          link?: string | undefined
                          click?: ((player: any) => void) | undefined
                        }[]
                      | undefined
                    debug?: boolean | undefined
                    hasAudio?: boolean | undefined
                    hotkey?: boolean | undefined
                    lang?: string | undefined
                    live?: boolean | undefined
                    logo?: string | undefined
                    loop?: boolean | undefined
                    muted?: boolean | undefined
                    mutex?: boolean | undefined
                    order?: number | undefined
                    preload?: any
                    preventClickToggle?: boolean | undefined
                    src: string
                    record?: boolean | undefined
                    replay?: number | undefined
                    theme?: string | undefined
                    title?: string | undefined
                    video?:
                      | {
                          url: string
                          pic?: string | undefined
                          type?: string | undefined
                          customType?: any
                          quality?:
                            | {
                                name: string
                                url: string
                                type?: string | undefined
                              }[]
                            | undefined
                          defaultQuality?: number | undefined
                        }
                      | undefined
                    volume?: number | undefined
                    unique?: string | undefined
                    userData?: any
                    duration?: number | undefined
                    startTime?: number | undefined
                  }
                | undefined
              index: () => number
              locale: (key: string) => any
              message: () => string
              muted: () => void
              occupy: (
                order: number,
                unique: string,
                text: string,
                userData: any
              ) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number, notify?: boolean | undefined) => number
              position: () => number
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
              userData: () => any
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel'
            )[],
            | 'progress'
            | 'timeout'
            | 'loadeddata'
            | 'position'
            | 'forward'
            | 'fullscreen'
            | 'screenshot'
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
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen_cancel',
            {
              fill: boolean
              timeout: number
              screenshot: boolean
              fullscreen: boolean
              forward: boolean
              allowPause: boolean
              border: boolean
              index: number
              controls: string
              lang: string
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
                error: (_: {}) => any
              }
            }))
        | undefined
      getName: (url: string | undefined) => string
      getOrderById: (id: number) => any
      getPlayerById: (id: number) => {
        new (...args: any[]): {
          $: import('vue').ComponentInternalInstance
          $data: {}
          $props: Partial<{
            fill: boolean
            timeout: number
            screenshot: boolean
            fullscreen: boolean
            forward: boolean
            allowPause: boolean
            border: boolean
            index: number
            controls: string
            lang: string
            options: Record<string, any>
            poster: string
          }> &
            Omit<
              Readonly<
                import('vue').ExtractPropTypes<{
                  allowPause: {
                    type: BooleanConstructor
                    default: boolean
                  }
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
                  controls: {
                    type: StringConstructor
                    default: string
                  }
                  lang: {
                    type: StringConstructor
                    default: string
                  }
                  forward: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  screenshot: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fullscreen: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
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
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                  timeout: {
                    type: NumberConstructor
                    default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              } & import('vue').VNodeProps &
                import('vue').AllowedComponentProps &
                import('vue').ComponentCustomProps,
              | 'fill'
              | 'timeout'
              | 'forward'
              | 'fullscreen'
              | 'lang'
              | 'screenshot'
              | 'allowPause'
              | 'border'
              | 'index'
              | 'controls'
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
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel',
            ...args: any[]
          ) => void
          $el: any
          $options: import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
              onPosition?: ((...args: any[]) => any) | undefined
              /**
               * 获取空闲视图
               */
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onTimeout?: ((...args: any[]) => any) | undefined
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
              onForward?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              error: (msg: string) => void
              focused: (focus?: boolean | undefined) => boolean | undefined
              getOptions: () =>
                | {
                    autoplay?: boolean | undefined
                    autoRate?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                        }
                      | undefined
                    closeTime?: number | undefined
                    connect?: boolean | undefined
                    container?: HTMLElement | null | undefined
                    controls?: boolean | undefined
                    contextmenu?:
                      | {
                          text: string
                          link?: string | undefined
                          click?: ((player: any) => void) | undefined
                        }[]
                      | undefined
                    debug?: boolean | undefined
                    hasAudio?: boolean | undefined
                    hotkey?: boolean | undefined
                    lang?: string | undefined
                    live?: boolean | undefined
                    logo?: string | undefined
                    loop?: boolean | undefined
                    muted?: boolean | undefined
                    mutex?: boolean | undefined
                    order?: number | undefined
                    preload?: any
                    preventClickToggle?: boolean | undefined
                    src: string
                    record?: boolean | undefined
                    replay?: number | undefined
                    theme?: string | undefined
                    title?: string | undefined
                    video?:
                      | {
                          url: string
                          pic?: string | undefined
                          type?: string | undefined
                          customType?: any
                          quality?:
                            | {
                                name: string
                                url: string
                                type?: string | undefined
                              }[]
                            | undefined
                          defaultQuality?: number | undefined
                        }
                      | undefined
                    volume?: number | undefined
                    unique?: string | undefined
                    userData?: any
                    duration?: number | undefined
                    startTime?: number | undefined
                  }
                | undefined
              index: () => number
              locale: (key: string) => any
              message: () => string
              muted: () => void
              occupy: (
                order: number,
                unique: string,
                text: string,
                userData: any
              ) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number, notify?: boolean | undefined) => number
              position: () => number
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
              userData: () => any
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel'
            )[],
            string,
            {
              fill: boolean
              timeout: number
              screenshot: boolean
              fullscreen: boolean
              forward: boolean
              allowPause: boolean
              border: boolean
              index: number
              controls: string
              lang: string
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
            allowPause: {
              type: BooleanConstructor
              default: boolean
            }
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
            controls: {
              type: StringConstructor
              default: string
            }
            lang: {
              type: StringConstructor
              default: string
            }
            forward: {
              type: BooleanConstructor
              default: boolean
            }
            screenshot: {
              type: BooleanConstructor
              default: boolean
            }
            fullscreen: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
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
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
            timeout: {
              type: NumberConstructor
              default: number
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
            onPosition?: ((...args: any[]) => any) | undefined
            /**
             * 获取空闲视图
             */
            onReady?: ((...args: any[]) => any) | undefined
            onFetch_start?: ((...args: any[]) => any) | undefined
            onFetch_stop?: ((...args: any[]) => any) | undefined
            onMozaudioavailable?: ((...args: any[]) => any) | undefined
            onTimeout?: ((...args: any[]) => any) | undefined
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
            onForward?: ((...args: any[]) => any) | undefined
          } & import('vue').ShallowUnwrapRef<{
            bufferedEnd: () => number
            close: () => void
            currentTime: () => number
            currentUrl: () => string
            el: () => any
            error: (msg: string) => void
            focused: (focus?: boolean | undefined) => boolean | undefined
            getOptions: () =>
              | {
                  autoplay?: boolean | undefined
                  autoRate?:
                    | {
                        enabled: boolean
                        min: number
                        max: number
                      }
                    | undefined
                  closeTime?: number | undefined
                  connect?: boolean | undefined
                  container?: HTMLElement | null | undefined
                  controls?: boolean | undefined
                  contextmenu?:
                    | {
                        text: string
                        link?: string | undefined
                        click?: ((player: any) => void) | undefined
                      }[]
                    | undefined
                  debug?: boolean | undefined
                  hasAudio?: boolean | undefined
                  hotkey?: boolean | undefined
                  lang?: string | undefined
                  live?: boolean | undefined
                  logo?: string | undefined
                  loop?: boolean | undefined
                  muted?: boolean | undefined
                  mutex?: boolean | undefined
                  order?: number | undefined
                  preload?: any
                  preventClickToggle?: boolean | undefined
                  src: string
                  record?: boolean | undefined
                  replay?: number | undefined
                  theme?: string | undefined
                  title?: string | undefined
                  video?:
                    | {
                        url: string
                        pic?: string | undefined
                        type?: string | undefined
                        customType?: any
                        quality?:
                          | {
                              name: string
                              url: string
                              type?: string | undefined
                            }[]
                          | undefined
                        defaultQuality?: number | undefined
                      }
                    | undefined
                  volume?: number | undefined
                  unique?: string | undefined
                  userData?: any
                  duration?: number | undefined
                  startTime?: number | undefined
                }
              | undefined
            index: () => number
            locale: (key: string) => any
            message: () => string
            muted: () => void
            occupy: (
              order: number,
              unique: string,
              text: string,
              userData: any
            ) => void
            order: () => number
            pause: () => void
            play: (
              option: import('v3d-player').V3dPlayerOptions | undefined
            ) => void
            playRate: (rate: number, notify?: boolean | undefined) => number
            position: () => number
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
            userData: () => any
          }> & {} & import('vue').ComponentCustomProperties & {}
        __isFragment?: undefined
        __isTeleport?: undefined
        __isSuspense?: undefined
      } & import('vue').ComponentOptionsBase<
        Readonly<
          import('vue').ExtractPropTypes<{
            allowPause: {
              type: BooleanConstructor
              default: boolean
            }
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
            controls: {
              type: StringConstructor
              default: string
            }
            lang: {
              type: StringConstructor
              default: string
            }
            forward: {
              type: BooleanConstructor
              default: boolean
            }
            screenshot: {
              type: BooleanConstructor
              default: boolean
            }
            fullscreen: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
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
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
            timeout: {
              type: NumberConstructor
              default: number
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
          onPosition?: ((...args: any[]) => any) | undefined
          /**
           * 获取空闲视图
           */
          onReady?: ((...args: any[]) => any) | undefined
          onFetch_start?: ((...args: any[]) => any) | undefined
          onFetch_stop?: ((...args: any[]) => any) | undefined
          onMozaudioavailable?: ((...args: any[]) => any) | undefined
          onTimeout?: ((...args: any[]) => any) | undefined
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
          onForward?: ((...args: any[]) => any) | undefined
        },
        {
          bufferedEnd: () => number
          close: () => void
          currentTime: () => number
          currentUrl: () => string
          el: () => any
          error: (msg: string) => void
          focused: (focus?: boolean | undefined) => boolean | undefined
          getOptions: () =>
            | {
                autoplay?: boolean | undefined
                autoRate?:
                  | {
                      enabled: boolean
                      min: number
                      max: number
                    }
                  | undefined
                closeTime?: number | undefined
                connect?: boolean | undefined
                container?: HTMLElement | null | undefined
                controls?: boolean | undefined
                contextmenu?:
                  | {
                      text: string
                      link?: string | undefined
                      click?: ((player: any) => void) | undefined
                    }[]
                  | undefined
                debug?: boolean | undefined
                hasAudio?: boolean | undefined
                hotkey?: boolean | undefined
                lang?: string | undefined
                live?: boolean | undefined
                logo?: string | undefined
                loop?: boolean | undefined
                muted?: boolean | undefined
                mutex?: boolean | undefined
                order?: number | undefined
                preload?: any
                preventClickToggle?: boolean | undefined
                src: string
                record?: boolean | undefined
                replay?: number | undefined
                theme?: string | undefined
                title?: string | undefined
                video?:
                  | {
                      url: string
                      pic?: string | undefined
                      type?: string | undefined
                      customType?: any
                      quality?:
                        | {
                            name: string
                            url: string
                            type?: string | undefined
                          }[]
                        | undefined
                      defaultQuality?: number | undefined
                    }
                  | undefined
                volume?: number | undefined
                unique?: string | undefined
                userData?: any
                duration?: number | undefined
                startTime?: number | undefined
              }
            | undefined
          index: () => number
          locale: (key: string) => any
          message: () => string
          muted: () => void
          occupy: (
            order: number,
            unique: string,
            text: string,
            userData: any
          ) => void
          order: () => number
          pause: () => void
          play: (
            option: import('v3d-player').V3dPlayerOptions | undefined
          ) => void
          playRate: (rate: number, notify?: boolean | undefined) => number
          position: () => number
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
          userData: () => any
        },
        unknown,
        {},
        {},
        import('vue').ComponentOptionsMixin,
        import('vue').ComponentOptionsMixin,
        (
          | 'progress'
          | 'timeout'
          | 'loadeddata'
          | 'position'
          | 'forward'
          | 'fullscreen'
          | 'screenshot'
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
          | 'contextmenu_show'
          | 'contextmenu_hide'
          | 'notice_show'
          | 'notice_hide'
          | 'quality_start'
          | 'quality_end'
          | 'destroy'
          | 'resize'
          | 'fullscreen_cancel'
        )[],
        | 'progress'
        | 'timeout'
        | 'loadeddata'
        | 'position'
        | 'forward'
        | 'fullscreen'
        | 'screenshot'
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
        | 'contextmenu_show'
        | 'contextmenu_hide'
        | 'notice_show'
        | 'notice_hide'
        | 'quality_start'
        | 'quality_end'
        | 'destroy'
        | 'resize'
        | 'fullscreen_cancel',
        {
          fill: boolean
          timeout: number
          screenshot: boolean
          fullscreen: boolean
          forward: boolean
          allowPause: boolean
          border: boolean
          index: number
          controls: string
          lang: string
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
            error: (_: {}) => any
          }
        })
      getPlaying: (unique: string) =>
        | ({
            new (...args: any[]): {
              $: import('vue').ComponentInternalInstance
              $data: {}
              $props: Partial<{
                fill: boolean
                timeout: number
                screenshot: boolean
                fullscreen: boolean
                forward: boolean
                allowPause: boolean
                border: boolean
                index: number
                controls: string
                lang: string
                options: Record<string, any>
                poster: string
              }> &
                Omit<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      allowPause: {
                        type: BooleanConstructor
                        default: boolean
                      }
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
                      controls: {
                        type: StringConstructor
                        default: string
                      }
                      lang: {
                        type: StringConstructor
                        default: string
                      }
                      forward: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      screenshot: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fullscreen: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
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
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                      timeout: {
                        type: NumberConstructor
                        default: number
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
                    onPosition?: ((...args: any[]) => any) | undefined
                    /**
                     * 获取空闲视图
                     */
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onTimeout?: ((...args: any[]) => any) | undefined
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
                    onForward?: ((...args: any[]) => any) | undefined
                  } & import('vue').VNodeProps &
                    import('vue').AllowedComponentProps &
                    import('vue').ComponentCustomProps,
                  | 'fill'
                  | 'timeout'
                  | 'forward'
                  | 'fullscreen'
                  | 'lang'
                  | 'screenshot'
                  | 'allowPause'
                  | 'border'
                  | 'index'
                  | 'controls'
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
                  | 'timeout'
                  | 'loadeddata'
                  | 'position'
                  | 'forward'
                  | 'fullscreen'
                  | 'screenshot'
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
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen_cancel',
                ...args: any[]
              ) => void
              $el: any
              $options: import('vue').ComponentOptionsBase<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    allowPause: {
                      type: BooleanConstructor
                      default: boolean
                    }
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
                    controls: {
                      type: StringConstructor
                      default: string
                    }
                    lang: {
                      type: StringConstructor
                      default: string
                    }
                    forward: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    screenshot: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fullscreen: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
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
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                    timeout: {
                      type: NumberConstructor
                      default: number
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
                  onPosition?: ((...args: any[]) => any) | undefined
                  /**
                   * 获取空闲视图
                   */
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onTimeout?: ((...args: any[]) => any) | undefined
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
                  onForward?: ((...args: any[]) => any) | undefined
                },
                {
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  error: (msg: string) => void
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  getOptions: () =>
                    | {
                        autoplay?: boolean | undefined
                        autoRate?:
                          | {
                              enabled: boolean
                              min: number
                              max: number
                            }
                          | undefined
                        closeTime?: number | undefined
                        connect?: boolean | undefined
                        container?: HTMLElement | null | undefined
                        controls?: boolean | undefined
                        contextmenu?:
                          | {
                              text: string
                              link?: string | undefined
                              click?: ((player: any) => void) | undefined
                            }[]
                          | undefined
                        debug?: boolean | undefined
                        hasAudio?: boolean | undefined
                        hotkey?: boolean | undefined
                        lang?: string | undefined
                        live?: boolean | undefined
                        logo?: string | undefined
                        loop?: boolean | undefined
                        muted?: boolean | undefined
                        mutex?: boolean | undefined
                        order?: number | undefined
                        preload?: any
                        preventClickToggle?: boolean | undefined
                        src: string
                        record?: boolean | undefined
                        replay?: number | undefined
                        theme?: string | undefined
                        title?: string | undefined
                        video?:
                          | {
                              url: string
                              pic?: string | undefined
                              type?: string | undefined
                              customType?: any
                              quality?:
                                | {
                                    name: string
                                    url: string
                                    type?: string | undefined
                                  }[]
                                | undefined
                              defaultQuality?: number | undefined
                            }
                          | undefined
                        volume?: number | undefined
                        unique?: string | undefined
                        userData?: any
                        duration?: number | undefined
                        startTime?: number | undefined
                      }
                    | undefined
                  index: () => number
                  locale: (key: string) => any
                  message: () => string
                  muted: () => void
                  occupy: (
                    order: number,
                    unique: string,
                    text: string,
                    userData: any
                  ) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (
                    rate: number,
                    notify?: boolean | undefined
                  ) => number
                  position: () => number
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
                  userData: () => any
                },
                unknown,
                {},
                {},
                import('vue').ComponentOptionsMixin,
                import('vue').ComponentOptionsMixin,
                (
                  | 'progress'
                  | 'timeout'
                  | 'loadeddata'
                  | 'position'
                  | 'forward'
                  | 'fullscreen'
                  | 'screenshot'
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
                  | 'contextmenu_show'
                  | 'contextmenu_hide'
                  | 'notice_show'
                  | 'notice_hide'
                  | 'quality_start'
                  | 'quality_end'
                  | 'destroy'
                  | 'resize'
                  | 'fullscreen_cancel'
                )[],
                string,
                {
                  fill: boolean
                  timeout: number
                  screenshot: boolean
                  fullscreen: boolean
                  forward: boolean
                  allowPause: boolean
                  border: boolean
                  index: number
                  controls: string
                  lang: string
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
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              } & import('vue').ShallowUnwrapRef<{
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                error: (msg: string) => void
                focused: (focus?: boolean | undefined) => boolean | undefined
                getOptions: () =>
                  | {
                      autoplay?: boolean | undefined
                      autoRate?:
                        | {
                            enabled: boolean
                            min: number
                            max: number
                          }
                        | undefined
                      closeTime?: number | undefined
                      connect?: boolean | undefined
                      container?: HTMLElement | null | undefined
                      controls?: boolean | undefined
                      contextmenu?:
                        | {
                            text: string
                            link?: string | undefined
                            click?: ((player: any) => void) | undefined
                          }[]
                        | undefined
                      debug?: boolean | undefined
                      hasAudio?: boolean | undefined
                      hotkey?: boolean | undefined
                      lang?: string | undefined
                      live?: boolean | undefined
                      logo?: string | undefined
                      loop?: boolean | undefined
                      muted?: boolean | undefined
                      mutex?: boolean | undefined
                      order?: number | undefined
                      preload?: any
                      preventClickToggle?: boolean | undefined
                      src: string
                      record?: boolean | undefined
                      replay?: number | undefined
                      theme?: string | undefined
                      title?: string | undefined
                      video?:
                        | {
                            url: string
                            pic?: string | undefined
                            type?: string | undefined
                            customType?: any
                            quality?:
                              | {
                                  name: string
                                  url: string
                                  type?: string | undefined
                                }[]
                              | undefined
                            defaultQuality?: number | undefined
                          }
                        | undefined
                      volume?: number | undefined
                      unique?: string | undefined
                      userData?: any
                      duration?: number | undefined
                      startTime?: number | undefined
                    }
                  | undefined
                index: () => number
                locale: (key: string) => any
                message: () => string
                muted: () => void
                occupy: (
                  order: number,
                  unique: string,
                  text: string,
                  userData: any
                ) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number, notify?: boolean | undefined) => number
                position: () => number
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
                userData: () => any
              }> & {} & import('vue').ComponentCustomProperties & {}
            __isFragment?: undefined
            __isTeleport?: undefined
            __isSuspense?: undefined
          } & import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
              onPosition?: ((...args: any[]) => any) | undefined
              /**
               * 获取空闲视图
               */
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onTimeout?: ((...args: any[]) => any) | undefined
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
              onForward?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              error: (msg: string) => void
              focused: (focus?: boolean | undefined) => boolean | undefined
              getOptions: () =>
                | {
                    autoplay?: boolean | undefined
                    autoRate?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                        }
                      | undefined
                    closeTime?: number | undefined
                    connect?: boolean | undefined
                    container?: HTMLElement | null | undefined
                    controls?: boolean | undefined
                    contextmenu?:
                      | {
                          text: string
                          link?: string | undefined
                          click?: ((player: any) => void) | undefined
                        }[]
                      | undefined
                    debug?: boolean | undefined
                    hasAudio?: boolean | undefined
                    hotkey?: boolean | undefined
                    lang?: string | undefined
                    live?: boolean | undefined
                    logo?: string | undefined
                    loop?: boolean | undefined
                    muted?: boolean | undefined
                    mutex?: boolean | undefined
                    order?: number | undefined
                    preload?: any
                    preventClickToggle?: boolean | undefined
                    src: string
                    record?: boolean | undefined
                    replay?: number | undefined
                    theme?: string | undefined
                    title?: string | undefined
                    video?:
                      | {
                          url: string
                          pic?: string | undefined
                          type?: string | undefined
                          customType?: any
                          quality?:
                            | {
                                name: string
                                url: string
                                type?: string | undefined
                              }[]
                            | undefined
                          defaultQuality?: number | undefined
                        }
                      | undefined
                    volume?: number | undefined
                    unique?: string | undefined
                    userData?: any
                    duration?: number | undefined
                    startTime?: number | undefined
                  }
                | undefined
              index: () => number
              locale: (key: string) => any
              message: () => string
              muted: () => void
              occupy: (
                order: number,
                unique: string,
                text: string,
                userData: any
              ) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number, notify?: boolean | undefined) => number
              position: () => number
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
              userData: () => any
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel'
            )[],
            | 'progress'
            | 'timeout'
            | 'loadeddata'
            | 'position'
            | 'forward'
            | 'fullscreen'
            | 'screenshot'
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
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen_cancel',
            {
              fill: boolean
              timeout: number
              screenshot: boolean
              fullscreen: boolean
              forward: boolean
              allowPause: boolean
              border: boolean
              index: number
              controls: string
              lang: string
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
                error: (_: {}) => any
              }
            }))
        | undefined
      getSelected: () => {
        new (...args: any[]): {
          $: import('vue').ComponentInternalInstance
          $data: {}
          $props: Partial<{
            fill: boolean
            timeout: number
            screenshot: boolean
            fullscreen: boolean
            forward: boolean
            allowPause: boolean
            border: boolean
            index: number
            controls: string
            lang: string
            options: Record<string, any>
            poster: string
          }> &
            Omit<
              Readonly<
                import('vue').ExtractPropTypes<{
                  allowPause: {
                    type: BooleanConstructor
                    default: boolean
                  }
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
                  controls: {
                    type: StringConstructor
                    default: string
                  }
                  lang: {
                    type: StringConstructor
                    default: string
                  }
                  forward: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  screenshot: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fullscreen: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
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
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                  timeout: {
                    type: NumberConstructor
                    default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              } & import('vue').VNodeProps &
                import('vue').AllowedComponentProps &
                import('vue').ComponentCustomProps,
              | 'fill'
              | 'timeout'
              | 'forward'
              | 'fullscreen'
              | 'lang'
              | 'screenshot'
              | 'allowPause'
              | 'border'
              | 'index'
              | 'controls'
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
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel',
            ...args: any[]
          ) => void
          $el: any
          $options: import('vue').ComponentOptionsBase<
            Readonly<
              import('vue').ExtractPropTypes<{
                allowPause: {
                  type: BooleanConstructor
                  default: boolean
                }
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
                controls: {
                  type: StringConstructor
                  default: string
                }
                lang: {
                  type: StringConstructor
                  default: string
                }
                forward: {
                  type: BooleanConstructor
                  default: boolean
                }
                screenshot: {
                  type: BooleanConstructor
                  default: boolean
                }
                fullscreen: {
                  type: BooleanConstructor
                  default: boolean
                }
                options: {
                  type: ObjectConstructor
                  default(): {
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
                    src: undefined
                    theme: string
                    volume: number
                  }
                }
                poster: {
                  type: StringConstructor
                  default: string
                }
                timeout: {
                  type: NumberConstructor
                  default: number
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
              onPosition?: ((...args: any[]) => any) | undefined
              /**
               * 获取空闲视图
               */
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onTimeout?: ((...args: any[]) => any) | undefined
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
              onForward?: ((...args: any[]) => any) | undefined
            },
            {
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              error: (msg: string) => void
              focused: (focus?: boolean | undefined) => boolean | undefined
              getOptions: () =>
                | {
                    autoplay?: boolean | undefined
                    autoRate?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                        }
                      | undefined
                    closeTime?: number | undefined
                    connect?: boolean | undefined
                    container?: HTMLElement | null | undefined
                    controls?: boolean | undefined
                    contextmenu?:
                      | {
                          text: string
                          link?: string | undefined
                          click?: ((player: any) => void) | undefined
                        }[]
                      | undefined
                    debug?: boolean | undefined
                    hasAudio?: boolean | undefined
                    hotkey?: boolean | undefined
                    lang?: string | undefined
                    live?: boolean | undefined
                    logo?: string | undefined
                    loop?: boolean | undefined
                    muted?: boolean | undefined
                    mutex?: boolean | undefined
                    order?: number | undefined
                    preload?: any
                    preventClickToggle?: boolean | undefined
                    src: string
                    record?: boolean | undefined
                    replay?: number | undefined
                    theme?: string | undefined
                    title?: string | undefined
                    video?:
                      | {
                          url: string
                          pic?: string | undefined
                          type?: string | undefined
                          customType?: any
                          quality?:
                            | {
                                name: string
                                url: string
                                type?: string | undefined
                              }[]
                            | undefined
                          defaultQuality?: number | undefined
                        }
                      | undefined
                    volume?: number | undefined
                    unique?: string | undefined
                    userData?: any
                    duration?: number | undefined
                    startTime?: number | undefined
                  }
                | undefined
              index: () => number
              locale: (key: string) => any
              message: () => string
              muted: () => void
              occupy: (
                order: number,
                unique: string,
                text: string,
                userData: any
              ) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number, notify?: boolean | undefined) => number
              position: () => number
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
              userData: () => any
            },
            unknown,
            {},
            {},
            import('vue').ComponentOptionsMixin,
            import('vue').ComponentOptionsMixin,
            (
              | 'progress'
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel'
            )[],
            string,
            {
              fill: boolean
              timeout: number
              screenshot: boolean
              fullscreen: boolean
              forward: boolean
              allowPause: boolean
              border: boolean
              index: number
              controls: string
              lang: string
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
            allowPause: {
              type: BooleanConstructor
              default: boolean
            }
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
            controls: {
              type: StringConstructor
              default: string
            }
            lang: {
              type: StringConstructor
              default: string
            }
            forward: {
              type: BooleanConstructor
              default: boolean
            }
            screenshot: {
              type: BooleanConstructor
              default: boolean
            }
            fullscreen: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
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
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
            timeout: {
              type: NumberConstructor
              default: number
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
            onPosition?: ((...args: any[]) => any) | undefined
            /**
             * 获取空闲视图
             */
            onReady?: ((...args: any[]) => any) | undefined
            onFetch_start?: ((...args: any[]) => any) | undefined
            onFetch_stop?: ((...args: any[]) => any) | undefined
            onMozaudioavailable?: ((...args: any[]) => any) | undefined
            onTimeout?: ((...args: any[]) => any) | undefined
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
            onForward?: ((...args: any[]) => any) | undefined
          } & import('vue').ShallowUnwrapRef<{
            bufferedEnd: () => number
            close: () => void
            currentTime: () => number
            currentUrl: () => string
            el: () => any
            error: (msg: string) => void
            focused: (focus?: boolean | undefined) => boolean | undefined
            getOptions: () =>
              | {
                  autoplay?: boolean | undefined
                  autoRate?:
                    | {
                        enabled: boolean
                        min: number
                        max: number
                      }
                    | undefined
                  closeTime?: number | undefined
                  connect?: boolean | undefined
                  container?: HTMLElement | null | undefined
                  controls?: boolean | undefined
                  contextmenu?:
                    | {
                        text: string
                        link?: string | undefined
                        click?: ((player: any) => void) | undefined
                      }[]
                    | undefined
                  debug?: boolean | undefined
                  hasAudio?: boolean | undefined
                  hotkey?: boolean | undefined
                  lang?: string | undefined
                  live?: boolean | undefined
                  logo?: string | undefined
                  loop?: boolean | undefined
                  muted?: boolean | undefined
                  mutex?: boolean | undefined
                  order?: number | undefined
                  preload?: any
                  preventClickToggle?: boolean | undefined
                  src: string
                  record?: boolean | undefined
                  replay?: number | undefined
                  theme?: string | undefined
                  title?: string | undefined
                  video?:
                    | {
                        url: string
                        pic?: string | undefined
                        type?: string | undefined
                        customType?: any
                        quality?:
                          | {
                              name: string
                              url: string
                              type?: string | undefined
                            }[]
                          | undefined
                        defaultQuality?: number | undefined
                      }
                    | undefined
                  volume?: number | undefined
                  unique?: string | undefined
                  userData?: any
                  duration?: number | undefined
                  startTime?: number | undefined
                }
              | undefined
            index: () => number
            locale: (key: string) => any
            message: () => string
            muted: () => void
            occupy: (
              order: number,
              unique: string,
              text: string,
              userData: any
            ) => void
            order: () => number
            pause: () => void
            play: (
              option: import('v3d-player').V3dPlayerOptions | undefined
            ) => void
            playRate: (rate: number, notify?: boolean | undefined) => number
            position: () => number
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
            userData: () => any
          }> & {} & import('vue').ComponentCustomProperties & {}
        __isFragment?: undefined
        __isTeleport?: undefined
        __isSuspense?: undefined
      } & import('vue').ComponentOptionsBase<
        Readonly<
          import('vue').ExtractPropTypes<{
            allowPause: {
              type: BooleanConstructor
              default: boolean
            }
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
            controls: {
              type: StringConstructor
              default: string
            }
            lang: {
              type: StringConstructor
              default: string
            }
            forward: {
              type: BooleanConstructor
              default: boolean
            }
            screenshot: {
              type: BooleanConstructor
              default: boolean
            }
            fullscreen: {
              type: BooleanConstructor
              default: boolean
            }
            options: {
              type: ObjectConstructor
              default(): {
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
                src: undefined
                theme: string
                volume: number
              }
            }
            poster: {
              type: StringConstructor
              default: string
            }
            timeout: {
              type: NumberConstructor
              default: number
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
          onPosition?: ((...args: any[]) => any) | undefined
          /**
           * 获取空闲视图
           */
          onReady?: ((...args: any[]) => any) | undefined
          onFetch_start?: ((...args: any[]) => any) | undefined
          onFetch_stop?: ((...args: any[]) => any) | undefined
          onMozaudioavailable?: ((...args: any[]) => any) | undefined
          onTimeout?: ((...args: any[]) => any) | undefined
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
          onForward?: ((...args: any[]) => any) | undefined
        },
        {
          bufferedEnd: () => number
          close: () => void
          currentTime: () => number
          currentUrl: () => string
          el: () => any
          error: (msg: string) => void
          focused: (focus?: boolean | undefined) => boolean | undefined
          getOptions: () =>
            | {
                autoplay?: boolean | undefined
                autoRate?:
                  | {
                      enabled: boolean
                      min: number
                      max: number
                    }
                  | undefined
                closeTime?: number | undefined
                connect?: boolean | undefined
                container?: HTMLElement | null | undefined
                controls?: boolean | undefined
                contextmenu?:
                  | {
                      text: string
                      link?: string | undefined
                      click?: ((player: any) => void) | undefined
                    }[]
                  | undefined
                debug?: boolean | undefined
                hasAudio?: boolean | undefined
                hotkey?: boolean | undefined
                lang?: string | undefined
                live?: boolean | undefined
                logo?: string | undefined
                loop?: boolean | undefined
                muted?: boolean | undefined
                mutex?: boolean | undefined
                order?: number | undefined
                preload?: any
                preventClickToggle?: boolean | undefined
                src: string
                record?: boolean | undefined
                replay?: number | undefined
                theme?: string | undefined
                title?: string | undefined
                video?:
                  | {
                      url: string
                      pic?: string | undefined
                      type?: string | undefined
                      customType?: any
                      quality?:
                        | {
                            name: string
                            url: string
                            type?: string | undefined
                          }[]
                        | undefined
                      defaultQuality?: number | undefined
                    }
                  | undefined
                volume?: number | undefined
                unique?: string | undefined
                userData?: any
                duration?: number | undefined
                startTime?: number | undefined
              }
            | undefined
          index: () => number
          locale: (key: string) => any
          message: () => string
          muted: () => void
          occupy: (
            order: number,
            unique: string,
            text: string,
            userData: any
          ) => void
          order: () => number
          pause: () => void
          play: (
            option: import('v3d-player').V3dPlayerOptions | undefined
          ) => void
          playRate: (rate: number, notify?: boolean | undefined) => number
          position: () => number
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
          userData: () => any
        },
        unknown,
        {},
        {},
        import('vue').ComponentOptionsMixin,
        import('vue').ComponentOptionsMixin,
        (
          | 'progress'
          | 'timeout'
          | 'loadeddata'
          | 'position'
          | 'forward'
          | 'fullscreen'
          | 'screenshot'
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
          | 'contextmenu_show'
          | 'contextmenu_hide'
          | 'notice_show'
          | 'notice_hide'
          | 'quality_start'
          | 'quality_end'
          | 'destroy'
          | 'resize'
          | 'fullscreen_cancel'
        )[],
        | 'progress'
        | 'timeout'
        | 'loadeddata'
        | 'position'
        | 'forward'
        | 'fullscreen'
        | 'screenshot'
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
        | 'contextmenu_show'
        | 'contextmenu_hide'
        | 'notice_show'
        | 'notice_hide'
        | 'quality_start'
        | 'quality_end'
        | 'destroy'
        | 'resize'
        | 'fullscreen_cancel',
        {
          fill: boolean
          timeout: number
          screenshot: boolean
          fullscreen: boolean
          forward: boolean
          allowPause: boolean
          border: boolean
          index: number
          controls: string
          lang: string
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
            error: (_: {}) => any
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
              timeout: number
              screenshot: boolean
              fullscreen: boolean
              forward: boolean
              allowPause: boolean
              border: boolean
              index: number
              controls: string
              lang: string
              options: Record<string, any>
              poster: string
            }> &
              Omit<
                Readonly<
                  import('vue').ExtractPropTypes<{
                    allowPause: {
                      type: BooleanConstructor
                      default: boolean
                    }
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
                    controls: {
                      type: StringConstructor
                      default: string
                    }
                    lang: {
                      type: StringConstructor
                      default: string
                    }
                    forward: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    screenshot: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    fullscreen: {
                      type: BooleanConstructor
                      default: boolean
                    }
                    options: {
                      type: ObjectConstructor
                      default(): {
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
                        src: undefined
                        theme: string
                        volume: number
                      }
                    }
                    poster: {
                      type: StringConstructor
                      default: string
                    }
                    timeout: {
                      type: NumberConstructor
                      default: number
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
                  onPosition?: ((...args: any[]) => any) | undefined
                  /**
                   * 获取空闲视图
                   */
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onTimeout?: ((...args: any[]) => any) | undefined
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
                  onForward?: ((...args: any[]) => any) | undefined
                } & import('vue').VNodeProps &
                  import('vue').AllowedComponentProps &
                  import('vue').ComponentCustomProps,
                | 'fill'
                | 'timeout'
                | 'forward'
                | 'fullscreen'
                | 'lang'
                | 'screenshot'
                | 'allowPause'
                | 'border'
                | 'index'
                | 'controls'
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
                | 'timeout'
                | 'loadeddata'
                | 'position'
                | 'forward'
                | 'fullscreen'
                | 'screenshot'
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
                | 'contextmenu_show'
                | 'contextmenu_hide'
                | 'notice_show'
                | 'notice_hide'
                | 'quality_start'
                | 'quality_end'
                | 'destroy'
                | 'resize'
                | 'fullscreen_cancel',
              ...args: any[]
            ) => void
            $el: any
            $options: import('vue').ComponentOptionsBase<
              Readonly<
                import('vue').ExtractPropTypes<{
                  allowPause: {
                    type: BooleanConstructor
                    default: boolean
                  }
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
                  controls: {
                    type: StringConstructor
                    default: string
                  }
                  lang: {
                    type: StringConstructor
                    default: string
                  }
                  forward: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  screenshot: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fullscreen: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
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
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                  timeout: {
                    type: NumberConstructor
                    default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              },
              {
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                error: (msg: string) => void
                focused: (focus?: boolean | undefined) => boolean | undefined
                getOptions: () =>
                  | {
                      autoplay?: boolean | undefined
                      autoRate?:
                        | {
                            enabled: boolean
                            min: number
                            max: number
                          }
                        | undefined
                      closeTime?: number | undefined
                      connect?: boolean | undefined
                      container?: HTMLElement | null | undefined
                      controls?: boolean | undefined
                      contextmenu?:
                        | {
                            text: string
                            link?: string | undefined
                            click?: ((player: any) => void) | undefined
                          }[]
                        | undefined
                      debug?: boolean | undefined
                      hasAudio?: boolean | undefined
                      hotkey?: boolean | undefined
                      lang?: string | undefined
                      live?: boolean | undefined
                      logo?: string | undefined
                      loop?: boolean | undefined
                      muted?: boolean | undefined
                      mutex?: boolean | undefined
                      order?: number | undefined
                      preload?: any
                      preventClickToggle?: boolean | undefined
                      src: string
                      record?: boolean | undefined
                      replay?: number | undefined
                      theme?: string | undefined
                      title?: string | undefined
                      video?:
                        | {
                            url: string
                            pic?: string | undefined
                            type?: string | undefined
                            customType?: any
                            quality?:
                              | {
                                  name: string
                                  url: string
                                  type?: string | undefined
                                }[]
                              | undefined
                            defaultQuality?: number | undefined
                          }
                        | undefined
                      volume?: number | undefined
                      unique?: string | undefined
                      userData?: any
                      duration?: number | undefined
                      startTime?: number | undefined
                    }
                  | undefined
                index: () => number
                locale: (key: string) => any
                message: () => string
                muted: () => void
                occupy: (
                  order: number,
                  unique: string,
                  text: string,
                  userData: any
                ) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number, notify?: boolean | undefined) => number
                position: () => number
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
                userData: () => any
              },
              unknown,
              {},
              {},
              import('vue').ComponentOptionsMixin,
              import('vue').ComponentOptionsMixin,
              (
                | 'progress'
                | 'timeout'
                | 'loadeddata'
                | 'position'
                | 'forward'
                | 'fullscreen'
                | 'screenshot'
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
                | 'contextmenu_show'
                | 'contextmenu_hide'
                | 'notice_show'
                | 'notice_hide'
                | 'quality_start'
                | 'quality_end'
                | 'destroy'
                | 'resize'
                | 'fullscreen_cancel'
              )[],
              string,
              {
                fill: boolean
                timeout: number
                screenshot: boolean
                fullscreen: boolean
                forward: boolean
                allowPause: boolean
                border: boolean
                index: number
                controls: string
                lang: string
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
              allowPause: {
                type: BooleanConstructor
                default: boolean
              }
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
              controls: {
                type: StringConstructor
                default: string
              }
              lang: {
                type: StringConstructor
                default: string
              }
              forward: {
                type: BooleanConstructor
                default: boolean
              }
              screenshot: {
                type: BooleanConstructor
                default: boolean
              }
              fullscreen: {
                type: BooleanConstructor
                default: boolean
              }
              options: {
                type: ObjectConstructor
                default(): {
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
                  src: undefined
                  theme: string
                  volume: number
                }
              }
              poster: {
                type: StringConstructor
                default: string
              }
              timeout: {
                type: NumberConstructor
                default: number
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
              onPosition?: ((...args: any[]) => any) | undefined
              /**
               * 获取空闲视图
               */
              onReady?: ((...args: any[]) => any) | undefined
              onFetch_start?: ((...args: any[]) => any) | undefined
              onFetch_stop?: ((...args: any[]) => any) | undefined
              onMozaudioavailable?: ((...args: any[]) => any) | undefined
              onTimeout?: ((...args: any[]) => any) | undefined
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
              onForward?: ((...args: any[]) => any) | undefined
            } & import('vue').ShallowUnwrapRef<{
              bufferedEnd: () => number
              close: () => void
              currentTime: () => number
              currentUrl: () => string
              el: () => any
              error: (msg: string) => void
              focused: (focus?: boolean | undefined) => boolean | undefined
              getOptions: () =>
                | {
                    autoplay?: boolean | undefined
                    autoRate?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                        }
                      | undefined
                    closeTime?: number | undefined
                    connect?: boolean | undefined
                    container?: HTMLElement | null | undefined
                    controls?: boolean | undefined
                    contextmenu?:
                      | {
                          text: string
                          link?: string | undefined
                          click?: ((player: any) => void) | undefined
                        }[]
                      | undefined
                    debug?: boolean | undefined
                    hasAudio?: boolean | undefined
                    hotkey?: boolean | undefined
                    lang?: string | undefined
                    live?: boolean | undefined
                    logo?: string | undefined
                    loop?: boolean | undefined
                    muted?: boolean | undefined
                    mutex?: boolean | undefined
                    order?: number | undefined
                    preload?: any
                    preventClickToggle?: boolean | undefined
                    src: string
                    record?: boolean | undefined
                    replay?: number | undefined
                    theme?: string | undefined
                    title?: string | undefined
                    video?:
                      | {
                          url: string
                          pic?: string | undefined
                          type?: string | undefined
                          customType?: any
                          quality?:
                            | {
                                name: string
                                url: string
                                type?: string | undefined
                              }[]
                            | undefined
                          defaultQuality?: number | undefined
                        }
                      | undefined
                    volume?: number | undefined
                    unique?: string | undefined
                    userData?: any
                    duration?: number | undefined
                    startTime?: number | undefined
                  }
                | undefined
              index: () => number
              locale: (key: string) => any
              message: () => string
              muted: () => void
              occupy: (
                order: number,
                unique: string,
                text: string,
                userData: any
              ) => void
              order: () => number
              pause: () => void
              play: (
                option: import('v3d-player').V3dPlayerOptions | undefined
              ) => void
              playRate: (rate: number, notify?: boolean | undefined) => number
              position: () => number
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
              userData: () => any
            }> & {} & import('vue').ComponentCustomProperties & {}
          __isFragment?: undefined
          __isTeleport?: undefined
          __isSuspense?: undefined
        } & import('vue').ComponentOptionsBase<
          Readonly<
            import('vue').ExtractPropTypes<{
              allowPause: {
                type: BooleanConstructor
                default: boolean
              }
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
              controls: {
                type: StringConstructor
                default: string
              }
              lang: {
                type: StringConstructor
                default: string
              }
              forward: {
                type: BooleanConstructor
                default: boolean
              }
              screenshot: {
                type: BooleanConstructor
                default: boolean
              }
              fullscreen: {
                type: BooleanConstructor
                default: boolean
              }
              options: {
                type: ObjectConstructor
                default(): {
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
                  src: undefined
                  theme: string
                  volume: number
                }
              }
              poster: {
                type: StringConstructor
                default: string
              }
              timeout: {
                type: NumberConstructor
                default: number
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
            onPosition?: ((...args: any[]) => any) | undefined
            /**
             * 获取空闲视图
             */
            onReady?: ((...args: any[]) => any) | undefined
            onFetch_start?: ((...args: any[]) => any) | undefined
            onFetch_stop?: ((...args: any[]) => any) | undefined
            onMozaudioavailable?: ((...args: any[]) => any) | undefined
            onTimeout?: ((...args: any[]) => any) | undefined
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
            onForward?: ((...args: any[]) => any) | undefined
          },
          {
            bufferedEnd: () => number
            close: () => void
            currentTime: () => number
            currentUrl: () => string
            el: () => any
            error: (msg: string) => void
            focused: (focus?: boolean | undefined) => boolean | undefined
            getOptions: () =>
              | {
                  autoplay?: boolean | undefined
                  autoRate?:
                    | {
                        enabled: boolean
                        min: number
                        max: number
                      }
                    | undefined
                  closeTime?: number | undefined
                  connect?: boolean | undefined
                  container?: HTMLElement | null | undefined
                  controls?: boolean | undefined
                  contextmenu?:
                    | {
                        text: string
                        link?: string | undefined
                        click?: ((player: any) => void) | undefined
                      }[]
                    | undefined
                  debug?: boolean | undefined
                  hasAudio?: boolean | undefined
                  hotkey?: boolean | undefined
                  lang?: string | undefined
                  live?: boolean | undefined
                  logo?: string | undefined
                  loop?: boolean | undefined
                  muted?: boolean | undefined
                  mutex?: boolean | undefined
                  order?: number | undefined
                  preload?: any
                  preventClickToggle?: boolean | undefined
                  src: string
                  record?: boolean | undefined
                  replay?: number | undefined
                  theme?: string | undefined
                  title?: string | undefined
                  video?:
                    | {
                        url: string
                        pic?: string | undefined
                        type?: string | undefined
                        customType?: any
                        quality?:
                          | {
                              name: string
                              url: string
                              type?: string | undefined
                            }[]
                          | undefined
                        defaultQuality?: number | undefined
                      }
                    | undefined
                  volume?: number | undefined
                  unique?: string | undefined
                  userData?: any
                  duration?: number | undefined
                  startTime?: number | undefined
                }
              | undefined
            index: () => number
            locale: (key: string) => any
            message: () => string
            muted: () => void
            occupy: (
              order: number,
              unique: string,
              text: string,
              userData: any
            ) => void
            order: () => number
            pause: () => void
            play: (
              option: import('v3d-player').V3dPlayerOptions | undefined
            ) => void
            playRate: (rate: number, notify?: boolean | undefined) => number
            position: () => number
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
            userData: () => any
          },
          unknown,
          {},
          {},
          import('vue').ComponentOptionsMixin,
          import('vue').ComponentOptionsMixin,
          (
            | 'progress'
            | 'timeout'
            | 'loadeddata'
            | 'position'
            | 'forward'
            | 'fullscreen'
            | 'screenshot'
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
            | 'contextmenu_show'
            | 'contextmenu_hide'
            | 'notice_show'
            | 'notice_hide'
            | 'quality_start'
            | 'quality_end'
            | 'destroy'
            | 'resize'
            | 'fullscreen_cancel'
          )[],
          | 'progress'
          | 'timeout'
          | 'loadeddata'
          | 'position'
          | 'forward'
          | 'fullscreen'
          | 'screenshot'
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
          | 'contextmenu_show'
          | 'contextmenu_hide'
          | 'notice_show'
          | 'notice_hide'
          | 'quality_start'
          | 'quality_end'
          | 'destroy'
          | 'resize'
          | 'fullscreen_cancel',
          {
            fill: boolean
            timeout: number
            screenshot: boolean
            fullscreen: boolean
            forward: boolean
            allowPause: boolean
            border: boolean
            index: number
            controls: string
            lang: string
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
              error: (_: {}) => any
            }
          })
      ) => void
      error: (
        index:
          | number
          | ({
              new (...args: any[]): {
                $: import('vue').ComponentInternalInstance
                $data: {}
                $props: Partial<{
                  fill: boolean
                  timeout: number
                  screenshot: boolean
                  fullscreen: boolean
                  forward: boolean
                  allowPause: boolean
                  border: boolean
                  index: number
                  controls: string
                  lang: string
                  options: Record<string, any>
                  poster: string
                }> &
                  Omit<
                    Readonly<
                      import('vue').ExtractPropTypes<{
                        allowPause: {
                          type: BooleanConstructor
                          default: boolean
                        }
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
                        controls: {
                          type: StringConstructor
                          default: string
                        }
                        lang: {
                          type: StringConstructor
                          default: string
                        }
                        forward: {
                          type: BooleanConstructor
                          default: boolean
                        }
                        screenshot: {
                          type: BooleanConstructor
                          default: boolean
                        }
                        fullscreen: {
                          type: BooleanConstructor
                          default: boolean
                        }
                        options: {
                          type: ObjectConstructor
                          default(): {
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
                            src: undefined
                            theme: string
                            volume: number
                          }
                        }
                        poster: {
                          type: StringConstructor
                          default: string
                        }
                        timeout: {
                          type: NumberConstructor
                          default: number
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
                      onPosition?: ((...args: any[]) => any) | undefined
                      /**
                       * 获取空闲视图
                       */
                      onReady?: ((...args: any[]) => any) | undefined
                      onFetch_start?: ((...args: any[]) => any) | undefined
                      onFetch_stop?: ((...args: any[]) => any) | undefined
                      onMozaudioavailable?:
                        | ((...args: any[]) => any)
                        | undefined
                      onTimeout?: ((...args: any[]) => any) | undefined
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
                      onFullscreen_cancel?:
                        | ((...args: any[]) => any)
                        | undefined
                      onForward?: ((...args: any[]) => any) | undefined
                    } & import('vue').VNodeProps &
                      import('vue').AllowedComponentProps &
                      import('vue').ComponentCustomProps,
                    | 'fill'
                    | 'timeout'
                    | 'forward'
                    | 'fullscreen'
                    | 'lang'
                    | 'screenshot'
                    | 'allowPause'
                    | 'border'
                    | 'index'
                    | 'controls'
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
                    | 'timeout'
                    | 'loadeddata'
                    | 'position'
                    | 'forward'
                    | 'fullscreen'
                    | 'screenshot'
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
                    | 'contextmenu_show'
                    | 'contextmenu_hide'
                    | 'notice_show'
                    | 'notice_hide'
                    | 'quality_start'
                    | 'quality_end'
                    | 'destroy'
                    | 'resize'
                    | 'fullscreen_cancel',
                  ...args: any[]
                ) => void
                $el: any
                $options: import('vue').ComponentOptionsBase<
                  Readonly<
                    import('vue').ExtractPropTypes<{
                      allowPause: {
                        type: BooleanConstructor
                        default: boolean
                      }
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
                      controls: {
                        type: StringConstructor
                        default: string
                      }
                      lang: {
                        type: StringConstructor
                        default: string
                      }
                      forward: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      screenshot: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      fullscreen: {
                        type: BooleanConstructor
                        default: boolean
                      }
                      options: {
                        type: ObjectConstructor
                        default(): {
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
                          src: undefined
                          theme: string
                          volume: number
                        }
                      }
                      poster: {
                        type: StringConstructor
                        default: string
                      }
                      timeout: {
                        type: NumberConstructor
                        default: number
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
                    onPosition?: ((...args: any[]) => any) | undefined
                    /**
                     * 获取空闲视图
                     */
                    onReady?: ((...args: any[]) => any) | undefined
                    onFetch_start?: ((...args: any[]) => any) | undefined
                    onFetch_stop?: ((...args: any[]) => any) | undefined
                    onMozaudioavailable?: ((...args: any[]) => any) | undefined
                    onTimeout?: ((...args: any[]) => any) | undefined
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
                    onForward?: ((...args: any[]) => any) | undefined
                  },
                  {
                    bufferedEnd: () => number
                    close: () => void
                    currentTime: () => number
                    currentUrl: () => string
                    el: () => any
                    error: (msg: string) => void
                    focused: (
                      focus?: boolean | undefined
                    ) => boolean | undefined
                    getOptions: () =>
                      | {
                          autoplay?: boolean | undefined
                          autoRate?:
                            | {
                                enabled: boolean
                                min: number
                                max: number
                              }
                            | undefined
                          closeTime?: number | undefined
                          connect?: boolean | undefined
                          container?: HTMLElement | null | undefined
                          controls?: boolean | undefined
                          contextmenu?:
                            | {
                                text: string
                                link?: string | undefined
                                click?: ((player: any) => void) | undefined
                              }[]
                            | undefined
                          debug?: boolean | undefined
                          hasAudio?: boolean | undefined
                          hotkey?: boolean | undefined
                          lang?: string | undefined
                          live?: boolean | undefined
                          logo?: string | undefined
                          loop?: boolean | undefined
                          muted?: boolean | undefined
                          mutex?: boolean | undefined
                          order?: number | undefined
                          preload?: any
                          preventClickToggle?: boolean | undefined
                          src: string
                          record?: boolean | undefined
                          replay?: number | undefined
                          theme?: string | undefined
                          title?: string | undefined
                          video?:
                            | {
                                url: string
                                pic?: string | undefined
                                type?: string | undefined
                                customType?: any
                                quality?:
                                  | {
                                      name: string
                                      url: string
                                      type?: string | undefined
                                    }[]
                                  | undefined
                                defaultQuality?: number | undefined
                              }
                            | undefined
                          volume?: number | undefined
                          unique?: string | undefined
                          userData?: any
                          duration?: number | undefined
                          startTime?: number | undefined
                        }
                      | undefined
                    index: () => number
                    locale: (key: string) => any
                    message: () => string
                    muted: () => void
                    occupy: (
                      order: number,
                      unique: string,
                      text: string,
                      userData: any
                    ) => void
                    order: () => number
                    pause: () => void
                    play: (
                      option: import('v3d-player').V3dPlayerOptions | undefined
                    ) => void
                    playRate: (
                      rate: number,
                      notify?: boolean | undefined
                    ) => number
                    position: () => number
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
                    userData: () => any
                  },
                  unknown,
                  {},
                  {},
                  import('vue').ComponentOptionsMixin,
                  import('vue').ComponentOptionsMixin,
                  (
                    | 'progress'
                    | 'timeout'
                    | 'loadeddata'
                    | 'position'
                    | 'forward'
                    | 'fullscreen'
                    | 'screenshot'
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
                    | 'contextmenu_show'
                    | 'contextmenu_hide'
                    | 'notice_show'
                    | 'notice_hide'
                    | 'quality_start'
                    | 'quality_end'
                    | 'destroy'
                    | 'resize'
                    | 'fullscreen_cancel'
                  )[],
                  string,
                  {
                    fill: boolean
                    timeout: number
                    screenshot: boolean
                    fullscreen: boolean
                    forward: boolean
                    allowPause: boolean
                    border: boolean
                    index: number
                    controls: string
                    lang: string
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
                  allowPause: {
                    type: BooleanConstructor
                    default: boolean
                  }
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
                  controls: {
                    type: StringConstructor
                    default: string
                  }
                  lang: {
                    type: StringConstructor
                    default: string
                  }
                  forward: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  screenshot: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fullscreen: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
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
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                  timeout: {
                    type: NumberConstructor
                    default: number
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
                  onPosition?: ((...args: any[]) => any) | undefined
                  /**
                   * 获取空闲视图
                   */
                  onReady?: ((...args: any[]) => any) | undefined
                  onFetch_start?: ((...args: any[]) => any) | undefined
                  onFetch_stop?: ((...args: any[]) => any) | undefined
                  onMozaudioavailable?: ((...args: any[]) => any) | undefined
                  onTimeout?: ((...args: any[]) => any) | undefined
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
                  onForward?: ((...args: any[]) => any) | undefined
                } & import('vue').ShallowUnwrapRef<{
                  bufferedEnd: () => number
                  close: () => void
                  currentTime: () => number
                  currentUrl: () => string
                  el: () => any
                  error: (msg: string) => void
                  focused: (focus?: boolean | undefined) => boolean | undefined
                  getOptions: () =>
                    | {
                        autoplay?: boolean | undefined
                        autoRate?:
                          | {
                              enabled: boolean
                              min: number
                              max: number
                            }
                          | undefined
                        closeTime?: number | undefined
                        connect?: boolean | undefined
                        container?: HTMLElement | null | undefined
                        controls?: boolean | undefined
                        contextmenu?:
                          | {
                              text: string
                              link?: string | undefined
                              click?: ((player: any) => void) | undefined
                            }[]
                          | undefined
                        debug?: boolean | undefined
                        hasAudio?: boolean | undefined
                        hotkey?: boolean | undefined
                        lang?: string | undefined
                        live?: boolean | undefined
                        logo?: string | undefined
                        loop?: boolean | undefined
                        muted?: boolean | undefined
                        mutex?: boolean | undefined
                        order?: number | undefined
                        preload?: any
                        preventClickToggle?: boolean | undefined
                        src: string
                        record?: boolean | undefined
                        replay?: number | undefined
                        theme?: string | undefined
                        title?: string | undefined
                        video?:
                          | {
                              url: string
                              pic?: string | undefined
                              type?: string | undefined
                              customType?: any
                              quality?:
                                | {
                                    name: string
                                    url: string
                                    type?: string | undefined
                                  }[]
                                | undefined
                              defaultQuality?: number | undefined
                            }
                          | undefined
                        volume?: number | undefined
                        unique?: string | undefined
                        userData?: any
                        duration?: number | undefined
                        startTime?: number | undefined
                      }
                    | undefined
                  index: () => number
                  locale: (key: string) => any
                  message: () => string
                  muted: () => void
                  occupy: (
                    order: number,
                    unique: string,
                    text: string,
                    userData: any
                  ) => void
                  order: () => number
                  pause: () => void
                  play: (
                    option: import('v3d-player').V3dPlayerOptions | undefined
                  ) => void
                  playRate: (
                    rate: number,
                    notify?: boolean | undefined
                  ) => number
                  position: () => number
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
                  userData: () => any
                }> & {} & import('vue').ComponentCustomProperties & {}
              __isFragment?: undefined
              __isTeleport?: undefined
              __isSuspense?: undefined
            } & import('vue').ComponentOptionsBase<
              Readonly<
                import('vue').ExtractPropTypes<{
                  allowPause: {
                    type: BooleanConstructor
                    default: boolean
                  }
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
                  controls: {
                    type: StringConstructor
                    default: string
                  }
                  lang: {
                    type: StringConstructor
                    default: string
                  }
                  forward: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  screenshot: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  fullscreen: {
                    type: BooleanConstructor
                    default: boolean
                  }
                  options: {
                    type: ObjectConstructor
                    default(): {
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
                      src: undefined
                      theme: string
                      volume: number
                    }
                  }
                  poster: {
                    type: StringConstructor
                    default: string
                  }
                  timeout: {
                    type: NumberConstructor
                    default: number
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
                onPosition?: ((...args: any[]) => any) | undefined
                /**
                 * 获取空闲视图
                 */
                onReady?: ((...args: any[]) => any) | undefined
                onFetch_start?: ((...args: any[]) => any) | undefined
                onFetch_stop?: ((...args: any[]) => any) | undefined
                onMozaudioavailable?: ((...args: any[]) => any) | undefined
                onTimeout?: ((...args: any[]) => any) | undefined
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
                onForward?: ((...args: any[]) => any) | undefined
              },
              {
                bufferedEnd: () => number
                close: () => void
                currentTime: () => number
                currentUrl: () => string
                el: () => any
                error: (msg: string) => void
                focused: (focus?: boolean | undefined) => boolean | undefined
                getOptions: () =>
                  | {
                      autoplay?: boolean | undefined
                      autoRate?:
                        | {
                            enabled: boolean
                            min: number
                            max: number
                          }
                        | undefined
                      closeTime?: number | undefined
                      connect?: boolean | undefined
                      container?: HTMLElement | null | undefined
                      controls?: boolean | undefined
                      contextmenu?:
                        | {
                            text: string
                            link?: string | undefined
                            click?: ((player: any) => void) | undefined
                          }[]
                        | undefined
                      debug?: boolean | undefined
                      hasAudio?: boolean | undefined
                      hotkey?: boolean | undefined
                      lang?: string | undefined
                      live?: boolean | undefined
                      logo?: string | undefined
                      loop?: boolean | undefined
                      muted?: boolean | undefined
                      mutex?: boolean | undefined
                      order?: number | undefined
                      preload?: any
                      preventClickToggle?: boolean | undefined
                      src: string
                      record?: boolean | undefined
                      replay?: number | undefined
                      theme?: string | undefined
                      title?: string | undefined
                      video?:
                        | {
                            url: string
                            pic?: string | undefined
                            type?: string | undefined
                            customType?: any
                            quality?:
                              | {
                                  name: string
                                  url: string
                                  type?: string | undefined
                                }[]
                              | undefined
                            defaultQuality?: number | undefined
                          }
                        | undefined
                      volume?: number | undefined
                      unique?: string | undefined
                      userData?: any
                      duration?: number | undefined
                      startTime?: number | undefined
                    }
                  | undefined
                index: () => number
                locale: (key: string) => any
                message: () => string
                muted: () => void
                occupy: (
                  order: number,
                  unique: string,
                  text: string,
                  userData: any
                ) => void
                order: () => number
                pause: () => void
                play: (
                  option: import('v3d-player').V3dPlayerOptions | undefined
                ) => void
                playRate: (rate: number, notify?: boolean | undefined) => number
                position: () => number
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
                userData: () => any
              },
              unknown,
              {},
              {},
              import('vue').ComponentOptionsMixin,
              import('vue').ComponentOptionsMixin,
              (
                | 'progress'
                | 'timeout'
                | 'loadeddata'
                | 'position'
                | 'forward'
                | 'fullscreen'
                | 'screenshot'
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
                | 'contextmenu_show'
                | 'contextmenu_hide'
                | 'notice_show'
                | 'notice_hide'
                | 'quality_start'
                | 'quality_end'
                | 'destroy'
                | 'resize'
                | 'fullscreen_cancel'
              )[],
              | 'progress'
              | 'timeout'
              | 'loadeddata'
              | 'position'
              | 'forward'
              | 'fullscreen'
              | 'screenshot'
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
              | 'contextmenu_show'
              | 'contextmenu_hide'
              | 'notice_show'
              | 'notice_hide'
              | 'quality_start'
              | 'quality_end'
              | 'destroy'
              | 'resize'
              | 'fullscreen_cancel',
              {
                fill: boolean
                timeout: number
                screenshot: boolean
                fullscreen: boolean
                forward: boolean
                allowPause: boolean
                border: boolean
                index: number
                controls: string
                lang: string
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
                  error: (_: {}) => any
                }
              })),
        msg: string
      ) => void
      snapshot: (index: number) => void
      splitView: (uCount: number) => void
      stop: () => void
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    ('refresh' | 'timeout' | 'loadeddata' | 'position' | 'forward')[],
    'refresh' | 'timeout' | 'loadeddata' | 'position' | 'forward',
    import('vue').VNodeProps &
      import('vue').AllowedComponentProps &
      import('vue').ComponentCustomProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        closeAfterViewChange: {
          type: BooleanConstructor
          default: boolean
        }
        closeTime: {
          type: NumberConstructor
          default: number
        }
        controlBar: {
          type: (BooleanConstructor | ObjectConstructor)[]
          default: boolean
        }
        count: {
          type: NumberConstructor
          default: number
        }
        drag: {
          type: BooleanConstructor
          default: boolean
        }
        duplicate: {
          type: BooleanConstructor
          default: boolean
        }
        focused: {
          type: BooleanConstructor
          default: boolean
        }
        fullscreen: {
          type: BooleanConstructor
          default: boolean
        }
        lang: {
          type: StringConstructor
          default(): string
        }
        forward: {
          type: BooleanConstructor
          default: boolean
        }
        /**
         * 常驻工具栏
         */
        lockControls: {
          type: StringConstructor
          default: string
        }
        loopCreate: {
          type: BooleanConstructor
          default: boolean
        }
        screenshot: {
          type: BooleanConstructor
          default: boolean
        }
        timeout: {
          type: NumberConstructor
          default: number
        }
        theme: {
          type: StringConstructor
          default: string
        }
      }>
    > & {
      onLoadeddata?: ((...args: any[]) => any) | undefined
      onRefresh?: ((...args: any[]) => any) | undefined
      onTimeout?: ((...args: any[]) => any) | undefined
      onPosition?: ((...args: any[]) => any) | undefined
      onForward?: ((...args: any[]) => any) | undefined
    },
    {
      timeout: number
      forward: boolean
      closeAfterViewChange: boolean
      closeTime: number
      controlBar: boolean | Record<string, any>
      count: number
      drag: boolean
      duplicate: boolean
      focused: boolean
      fullscreen: boolean
      lang: string
      lockControls: string
      loopCreate: boolean
      screenshot: boolean
      theme: string
    }
  >,
  {
    ready: (_: {}) => any
    empty: (_: {}) => any
    loading: (_: {}) => any
    logo: (_: {}) => any
  }
>
export default V3dMonitor
