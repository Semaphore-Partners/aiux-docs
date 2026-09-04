# `@servicenow/aiux-components-help-assistant`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-components-help-assistant`

Declares 6 elements, 4 functions, 74 constants, 7 classes.

## Elements

### `<aiux-help-assistant>`

Class `HelpAssistant`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `enableHelpAssistant` | `boolean` | yes | no | yes |
| `enableTranscript` | `boolean` | yes | no | yes |
| `traceId` | `string` | yes | no | yes |

| Event | `detail` |
|---|---|
| `ha:feedback-submit-failed` | `{ error: any; }` |
| `help-assistant:dg-ended` | — |
| `help-assistant:dg-started` | — |
| `help-assistant:error` | `{ text: any; }` |

### `<ha-alerts>`

Class `HaAlerts`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `items` | `Array<any>` | yes | no | yes |

| Event | `detail` |
|---|---|
| `ha-alerts:dismiss` | `{ id: any; }` |

### `<ha-feedback>`

Class `HaFeedback`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `traceId` | `string` | yes | no | yes |

### `<ha-modeless-dialog>`

Class `HaModelessDialog`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `content` | `string` | yes | no | yes |
| `defaultPosition` | `string` | yes | no | yes |
| `enableTranscript` | `boolean` | yes | no | yes |
| `isAiSpeaking` | `boolean` | yes | no | yes |
| `isPaused` | `boolean` | yes | no | yes |
| `isVoiceActive` | `boolean` | yes | no | yes |
| `lastUpdateType` | `string` | yes | no | yes |
| `micVolume` | `number` | yes | no | yes |
| `userAvatarUrl` | `string` | yes | no | yes |
| `userDisplayName` | `string` | yes | no | yes |

### `<ha-user-consent-modal>`

Class `HaUserConsentModal`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `opened` | `boolean` | yes | yes | yes |

### `<ha-voice-wave>`

Class `HaVoiceWave`.

| Property | Type | Attribute | Reflects | Has default |
|---|---|---|---|---|
| `isAiSpeaking` | `boolean` | yes | no | yes |
| `isPaused` | `boolean` | yes | no | yes |
| `isVoiceActive` | `boolean` | yes | no | yes |
| `micVolume` | `number` | yes | no | yes |

## Functions

```ts
generateRandomId(): string
getSysPropFromContext(context: any, propName: any): any
isBrowser(browserName: any): boolean
isScreenShareSupported(): boolean
```

## Constants

| Name | Type |
|---|---|
| `APP_CLIENT_ID` | `"1316dcd44b7a43c2b6c73e5c98b43d45"` |
| `APP_REDIRECT_URI` | `"/api/sn_help_assistant/dynamic_guidance/oauth/authorize"` |
| `BASE_ACTION` | `"SN_HELP_ASSISTANT#"` |
| `BASE_URL` | `"/api/sn_help_assistant/dynamic_guidance"` |
| `CANVAS_GLOBAL_ERROR` | `"CANVAS_GLOBAL_ERROR"` |
| `CLIENT_ID` | `"client_id"` |
| `CODE` | `"code"` |
| `CODE_VERIFIER` | `"code_verifier"` |
| `DG_PREFIX` | `"DYNAMIC_GUIDANCE_"` |
| `DYNAMIC_GUIDANCE_ENABLED_SYS_PROP` | `"com.glide.dynamic_guidance.enabled"` |
| `DYNAMIC_GUIDANCE_WEBSOCKET_URL_SYS_PROP` | `"com.glide.dynamic_guidance.websocket_url"` |
| `getTimeRangeBucket` | `(secondsString: any) => "Less than 30 seconds" \| "30 seconds - 1 minute" \| "1 - 3 minutes" \| "3 - 5 minutes" \| "5 - 10 minutes" \| "More than 10 minutes"` |
| `GRANT_TYPE` | `"grant_type"` |
| `GRANT_TYPE_AUTH_CODE` | `"authorization_code"` |
| `GREETINGS` | `"Hi ServiceNow."` |
| `HA_ALERTS_DISMISS` | `"ha-alerts:dismiss"` |
| `HA_CLIENT_AUDIO_RESPONSE` | `"HA_CLIENT_AUDIO_RESPONSE"` |
| `HA_CLIENT_INTERRUPTED` | `"HA_CLIENT_INTERRUPTED"` |
| `HA_ERROR_TRACK` | `"SN_HELP_ASSISTANT#HA_ERROR_TRACK"` |
| `HA_FEEDBACK_CLOSED` | `"ha-feedback:closed"` |
| `HA_FEEDBACK_THUMBS_DOWN` | `"ha-feedback:thumbs-down"` |
| `HA_FEEDBACK_THUMBS_UP` | `"ha-feedback:thumbs-up"` |
| `HA_FETCH_RAG_API` | `"HA_FETCH_RAG_API"` |
| `HA_LIVE_CLIENT_ERROR` | `"HA_LIVE_CLIENT_ERROR"` |
| `HA_MODELESS_DIALOG_END` | `"ha-modeless-dialog:end-clicked"` |
| `HA_MODELESS_DIALOG_PAUSE` | `"ha-modeless-dialog:pause-clicked"` |
| `HA_MODELESS_DIALOG_TRANSCRIPT` | `"ha-modeless-dialog:transcript-clicked"` |
| `HA_MODELESS_DIALOG_TRIM` | `"ha-modeless-dialog:trim-transcript"` |
| `HA_NETWORK_ERROR` | `"SN_HELP_ASSISTANT#network.error"` |
| `HA_OFFLINE` | `"offline"` |
| `HA_RESET_STATE` | `"SN_HELP_ASSISTANT#RESET_STATE"` |
| `HA_SESSION_LIMIT_REACHED` | `"HA_SESSION_LIMIT_REACHED"` |
| `HA_UPDATE_TOOL_CALL_ID` | `"HA_UPDATE_TOOL_CALL_ID"` |
| `HA_USER_CONSENT_ACCEPTED` | `"ha-user-consent-modal:accepted"` |
| `HA_USER_CONSENT_CANCELLED` | `"ha-user-consent-modal:cancelled"` |
| `HA_USER_CONSENT_GUIDANCE_REQUESTED` | `"ha-user-consent-modal:guidance-requested"` |
| `HA_USER_CONSENT_MODAL_CLOSED` | `"ha-user-consent-modal:closed"` |
| `hasPropertyOfType` | `(value: any, expectedType: any) => boolean` |
| `INPUT_TRANSCRIPTION` | `"INPUT_TRANSCRIPTION"` |
| `ISS_INSTANCE_URL` | `"iss_instance_url"` |
| `LANGUAGE_PROMPT` | `"Please respond in language:"` |
| `LC_SCREENSHOT_INTERVAL_MS` | `5000` |
| `MAX_DELAYED_BUFFER_COUNT` | `10` |
| `MAX_DELAYED_LATENCY_ALLOWED_IN_MS` | `-1000` |
| `MAX_TRANSCRIPT_DISPLAY_CHARS` | `250` |
| `messageQueue` | `any` |
| `MIC_AUDIO_CONTEXT_ID` | `"mic-audio-context-id"` |
| `OAUTH_ACCESS_TOKEN_KEY` | `"DYNAMIC_GUIDANCE__ACCESS_TOKEN"` |
| `OAUTH_AUTH_URI` | `"/oauth_auth.do"` |
| `OUTPUT_TRANSCRIPTION` | `"OUTPUT_TRANSCRIPTION"` |
| `PKCE_CODE_CHALLENGE_METHOD` | `"S256"` |
| `PKCE_STATE_KEY` | `"DYNAMIC_GUIDANCE_PKCE_STATE"` |
| `PKCE_VERIFIER_KEY` | `"DYNAMIC_GUIDANCE_PKCE_CODE_VERIFIER"` |
| `REDIRECT_URI` | `"redirect_uri"` |
| `SCREENSHOT_INTERVAL_MS` | `2000` |
| `UPDATE_MODELESS_DIALOG_CONTENT` | `"SN_HELP_ASSISTANT#UPDATE_MODELESS_DIALOG_CONTENT"` |

```ts
const alertActions: {
  HA_NOTIFICATION_CLEAR_REQUESTED: string;
  HA_NOTIFICATION_REQUESTED: string;
}
```

```ts
const alertTypes: {
  ERROR: string;
  POSITIVE: string;
}
```

```ts
const assistantServiceActions: {
  HA_LIVE_CLIENT_PAUSE: string;
  HA_LIVE_CLIENT_RESUME: string;
  HA_LIVE_CLIENT_START: string;
  HA_LIVE_CLIENT_STOP: string;
}
```

```ts
const BROADCAST_ACTIONS: {
  DYNAMIC_GUIDANCE_PAUSED: string;
  DYNAMIC_GUIDANCE_REQUESTED: string;
  DYNAMIC_GUIDANCE_RESUMED: string;
  DYNAMIC_TRANSCRIPT_UPDATED: string;
  DYNAMIC_VOICE_STARTED: string;
  DYNAMIC_VOICE_STOPPED: string;
  HEARTBEAT: string;
  MODELESS_DIALOG_CLOSED: string;
  PRIMARY_TAB_ESTABLISHED: string;
  STATE_QUERY: string;
  STATE_RESPONSE: string;
  TAB_CLOSED: string;
}
```

```ts
const CONSENT_AUTH_ERRORS: {
  CONSENT_FAILED: string;
  CONSENT_SUBMISSION_FAILURE: string;
  NO_SEARCH_SOURCE_CONFIGURED: string;
  OAUTH_FAILURE: string;
  PKCE_FAILURE: string;
  TOKEN_FAILURE: string;
}
```

```ts
const dataHandlerActions: {
  HA_FETCH_AUTH_CODE: string;
  HA_FETCH_AUTH_TOKEN: string;
  HA_FETCH_AUTH_TOKEN_FAILED: string;
  HA_FETCH_AUTH_TOKEN_SUCCEEDED: string;
  HA_FETCH_CONFIG: string;
  HA_FETCH_CONFIG_FAILED: string;
  HA_FETCH_CONFIG_SUCCEEDED: string;
  HA_FETCH_RAG_API: string;
  HA_FETCH_RAG_API_FAILED: string;
  HA_FETCH_RAG_API_SUCCEEDED: string;
  HA_SUBMIT_FEEDBACK: string;
  HA_UPDATE_TOOL_CALL_ID: string;
}
```

```ts
const dataHandlerURLs: {
  CONFIG: string;
  FEEDBACK: string;
  OAUTH_CODE: string;
  OAUTH_TOKEN: string;
  RAG_API: string;
  USER_CONSENT: string;
  WEB_SOCKET_ENDPOINT: string;
}
```

```ts
const ERRORS: {
  CLIENT_RECONNECTION_FAILED: string;
  SERVER_INTERNAL_ERROR: string;
}
```

```ts
const HA_ACTIONS: {
  DYNAMIC_GUIDANCE_ENDED: string;
  DYNAMIC_GUIDANCE_PAUSED: string;
  DYNAMIC_GUIDANCE_RESUMED: string;
  DYNAMIC_GUIDANCE_STARTED: string;
  PAUSE_DYNAMIC_GUIDANCE: string;
  RESUME_DYNAMIC_GUIDANCE: string;
  START_DYNAMIC_GUIDANCE: string;
  STOP_DYNAMIC_GUIDANCE: string;
}
```

```ts
const liveTranscriptionActions: {
  CONTENT_RESET: string;
  INPUT_TRANSCRIPTION: string;
  OUTPUT_TRANSCRIPTION: string;
  TRIM_TRANSCRIPT: string;
}
```

```ts
const mediaTypes: {
  AUDIO: string;
  SCREEN: string;
  TEXT: string;
}
```

```ts
const observable: {
  getInstance: () => any;
}
```

```ts
const TELEMETRY_ERROR_PAYLOAD: {
  CLIENT_INITIALIZATION_FAIL: string;
  FETCH_CONFIG_FAIL: string;
  INVALID_SECRET_KEY: string;
  MISSING_WEB_SOCKET_URL_OR_EPHEMERAL_TOKEN: string;
  POOR_NETWORK_CONNECTION: string;
  PROVIDER_CONNECTION_ERROR: string;
  WEB_SOCKET_CONNECTION_ERROR: string;
}
```

```ts
const TELEMETRY_ERROR_PAYLOAD_LC: {
  CLIENT_INITIALIZATION_FAIL: string;
  PROVIDER_CONNECTION_ERROR: string;
  WEB_SOCKET_CONNECTION_ERROR: string;
}
```

```ts
const TELEMETRY_METRIC: {
  DYNAMIC_GUIDANCE_CONNECTION_ERROR: string;
  DYNAMIC_GUIDANCE_START: string;
  DYNAMIC_GUIDANCE_STOP: string;
  DYNAMIC_GUIDANCE_THUMBS_DOWN: string;
  DYNAMIC_GUIDANCE_THUMBS_UP: string;
}
```

```ts
const TOOL_NAMES: {
  SEARCH_KNOWLEDGE_BASE: string;
}
```

```ts
const userConsentActions: {
  HA_FETCH_USER_CONSENT: string;
  HA_FETCH_USER_CONSENT_FAILED: string;
  HA_FETCH_USER_CONSENT_SUCCEEDED: string;
  HA_SUBMIT_USER_CONSENT: string;
  HA_SUBMIT_USER_CONSENT_FAILED: string;
  HA_SUBMIT_USER_CONSENT_SUCCEEDED: string;
}
```

```ts
const userRoles: {
  ADMIN: string;
  DYNAMIC_GUIDANCE_USER: string;
}
```

## Classes

```ts
class AlertsController {
  _emit(): void;
  clear(id: any): void;
  hostDisconnected(): void;
  request(message: any): string;
  setHandler(onChange: any): void;
  setItems(items: any): void;
}
```

```ts
class AudioController {
  _handleDestroy(): void;
  _handleInitiate(): Promise<void>;
  _handlePause(): void;
  _handlePlay(payload: any): void;
  _handlePlayStop(): void;
  _handleResume(): void;
  _handleStop(): void;
  hostDisconnected(): void;
  initiate(): Promise<void>;
  pause(): void;
  play(payload: any): void;
  playStop(): void;
  resume(): void;
  stop(): void;
}
```

```ts
class ConsentAuthController {
  _emitError(type: any): void;
  _fetchAuthCode(): Promise<void>;
  _fetchAuthToken(data: any): Promise<void>;
  _handleConsentFetchSucceeded(result: any): void;
  _submitUserConsentSucceeded(result: any): Promise<void>;
  acceptConsent(): Promise<void>;
  closeConsentModal(): void;
  hostConnected(): void;
  hostDisconnected(): void;
  reset(): void;
  setHandlers(__0: {}): void;
  setHost(host: any): void;
  start(__0: {}): Promise<void>;
}
```

```ts
class CrossTabController {
  _cleanup(): void;
  _emit(type: any, payload: any): void;
  broadcast(type: any, payload: null): void;
  establishAsPrimaryTab(): void;
  getTabId(): any;
  hostConnected(): void;
  hostDisconnected(): void;
  initialize(): void;
  isPrimaryTabActive(): any;
  isSecondaryTabActive(): any;
  releasePrimaryTab(): void;
  setHandler(onEvent: any): void;
}
```

```ts
class LiveClientController {
  _dispatch(type: any, payload: any): void;
  connect(): Promise<any>;
  hostConnected(): void;
  hostDisconnected(): void;
  pause(): void;
  resume(): void;
  sendAudio(data: any): void;
  sendScreen(data: any): void;
  sendToolResponse(response: any): void;
  setAiSpeaking(value: any): void;
  setAuth(auth: any, isFirstTimeUser: boolean): void;
  setDispatch(fn: any): void;
  start(__0: [object Object]): void;
  stop(): void;
  updateMicrophoneVolume(volume: any, __1: {}): "user-start" | "user-stop" | null;
}
```

```ts
class ModalsController {
  _commit(patch: any): void;
  closeFeedbackModal(): void;
  closeModelessDialog(): void;
  closeUserConsentModal(): void;
  hostDisconnected(): void;
  openFeedbackModal(): void;
  openModelessDialog(): void;
  openUserConsentModal(): void;
  reset(): void;
  setContent(content: any): void;
  setHandler(onChange: any): void;
  setPaused(isPaused: any): void;
  togglePause(): void;
  toggleTranscript(): void;
}
```

```ts
class ScreenController {
  _capture(): void;
  _error(): void;
  hostDisconnected(): void;
  isActive(): boolean;
  isPaused(): boolean;
  pause(): void;
  resume(): void;
  setHandlers(__0: {}): void;
  start(options: {}): Promise<void>;
  stop(): void;
}
```


