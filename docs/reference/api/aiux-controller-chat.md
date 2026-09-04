# `@servicenow/aiux-controller-chat`

> Generated from `public-api-manifest.json` in `@servicenow/aiux@22.42.3`. Do not edit by hand; see [tools/api-reference](../../../tools/api-reference/README.md). [Back to the index](README.md).

**Import:** `@servicenow/aiux/aiux-controller-chat`

Declares 4 functions, 2 constants, 1 class.

## Functions

```ts
_getChatController(): ChatController
_registerChatController(controller: ChatController): void
prefetchDeploymentDetails(_loaderCtx: object, appConfig: object, experienceConfig: object): Promise<Readonly<{ enabled: false; deploymentDocumentId: null; nowAssistDeploymentId: null; deploymentDocumentTable: null; resolved: false; }>>
resolveDeploymentDetailsCSR(): Promise<Readonly<{ enabled: false; deploymentDocumentId: null; nowAssistDeploymentId: null; deploymentDocumentTable: null; resolved: false; }> | undefined>
```

## Constants

```ts
const AIEX_MODES: {
  CHAT: string;
  CHAT_AND_IV: string;
  POPOVER: string;
}
```

```ts
const CHAT_MODES: {
  AIEX_HIDDEN: string;
  DEFAULT: string;
  OMNI: string;
}
```

## Classes

<details>
<summary><code>class ChatController</code> (42 members)</summary>

```ts
class ChatController {
  _cleanupEventListeners(): void;
  _closeInteractiveView(): void;
  _dispatchChatModeChange(): void;
  _getDeploymentMetadata(): { deploymentDocumentId: any; deploymentDocumentTable: any; enabled: any; nowAssistDeploymentId: any };
  _initializeConversationServerHost(): void;
  _isHomePageChatEvent(event: any): any;
  _registerLinkHandlers(): void;
  _resolveBranding(): void;
  _retrieveChatModeFromHash(fallbackMode: string): void;
  _setupEventListeners(): void;
  cleanup(): void;
  closeChat(): void;
  deferIfResponding(action: () => void): void;
  getAiexMode(): string;
  handleChatEvent: (event: any) => void;
  handleChatVisibilityChange: (event: any) => void;
  handleCloseChat: () => void;
  handleCloseInteractiveView: (event: any) => void;
  handleOmnibarVisibilityChange: (event: any) => void;
  handleOpenChat: (event: any) => void;
  handleRequestSkillExecution: (event: any) => void;
  handleShowInteractiveView: (event: any) => void;
  handleSidePanelChange(open: any): void;
  hostConnected(): Promise<void>;
  hostDisconnected(): void;
  initialize(): Promise<void>;
  isReady(): boolean;
  navigateToChat(conversationId: any): void;
  navigateToChatOnClick(): void;
  onNavigate(path: any): void;
  openChat(__0: [object Object]): void;
  overrideChatNavigation(): void;
  remountChat(): void;
  renderChat(): DirectiveResult<{ new (_partInfo: PartInfo): Keyed<TemplateResult<1>>; prototype: Keyed<any>; }>;
  renderChatContainer(): TemplateResult<1>;
  requestSkillExecution(__0: object): void;
  setEventTarget(element: any): void;
  setExperienceConfig(config: any): void;
  shouldHideAIEX(): boolean;
  shouldHideChat(): boolean;
  switchLBFMode(mode: string): void;
  switchMode(newMode: any): void;
}
```

</details>


