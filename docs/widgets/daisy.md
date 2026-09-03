# Daisy

sn_aiux ships with a styling system based on **Tailwind CSS** and **DaisyUI**, bundled and prefixed under `aiux-`. You have two distinct surfaces to work with: pre-built `<aiux-*>` web components for high-level pieces (dialog, alert, accordion, etc.), and Tailwind/DaisyUI utility classes (e.g. `aiux-card`, `aiux-table-zebra`, `aiux-badge-primary`) for everything else.

Pick whichever fits the task. The web components give you semantics, accessibility, slotting, and configurable behavior in one tag. The utility classes give you fine-grained composition without writing CSS. Most real widgets use both.

---

## Pre-built `<aiux-*>` components

All registered globally — just use the tag. Where a side-effect import is needed, it looks like `import '@servicenow/aiux-components-core/aiux-alert-message'`.

Attribute vs property: lowercase kebab-case names like `is-modal` are HTML attributes. Names prefixed with `.` (e.g. `.items`) are Lit JS property bindings — used when the value is a non-string (an array, object, etc.).

### `<aiux-accordion-group>`

Collapsible sections with `arrow` or `plus` icons.

| Attr/Property | Type | Description |
|---|---|---|
| .items | Array | {title, content, open?} |
| multiple | boolean | Allow multiple open items |
| icon | string | "arrow" \| "plus" |
| bordered | boolean | Show item borders |
| onchange | string | Callback code; detail {index, title, open} |

### `<aiux-alert-message>`

Inline alert / banner.

| Attr/Property | Type | Description |
|---|---|---|
| type | string | "info" \| "success" \| "warning" \| "error" \| "primary" \| "accent" |
| message | string | Body text |
| alert-title | string | Optional title |
| dismissible | boolean | Show dismiss button |
| icon | string | Custom icon name (overrides default) |
| duration | number | Auto-dismiss ms (0 = none) |
| autofocus-controls | boolean | Autofocus dismiss button |

### `<aiux-calendar-component>`

Month-view calendar with selectable date.

| Attr/Property | Type | Description |
|---|---|---|
| .currentDate | Object | Displayed month {month, year} |
| .selectedDate | Object | Selected date |

### `<aiux-carousel-slider>`

Slideshow with optional autoplay, dot indicators, and navigation buttons.

| Attr/Property | Type | Description |
|---|---|---|
| .items | Array | Slide content items |
| show-navigation | boolean | Prev/next buttons |
| show-indicators | boolean | Dot indicators |
| autoplay | number | Autoplay interval ms (0 = off) |
| alignment | string | Slide alignment |
| vertical | boolean | Vertical orientation |
| onchange | string | Callback; detail {index, previousIndex} |

### `<aiux-dialog>`

Modal or non-modal dialog with header, body, and footer slots.

| Attr/Property | Type | Description |
|---|---|---|
| open | boolean | Dialog is open |
| size | string | "sm" \| "md" \| "lg" \| "xl" \| "fullscreen" |
| is-modal | boolean | Render as modal |
| show-close-button | boolean | Show close button |
| close-on-escape | boolean | Close on Escape |
| close-on-backdrop-click | boolean | Close on backdrop click |
| prevent-scroll | boolean | Prevent body scroll when modal open |
| resizable | boolean | Drag-to-resize |
| hide-padding | boolean | Remove header/body/footer padding |
| dialog-label | string | aria-label |
| .customSize | Object | {width, height} |

### `<aiux-icon>`

Inline icon rendered from the framework's icon library.

| Attr/Property | Type | Description |
|---|---|---|
| name | string | Icon name in kebab-case (e.g. "play-fill") |
| size | string | "xs" \| "sm" \| "md" \| "lg" \| "xl" |
| .configAria | Object | {role, label} |

### `<aiux-live-region>`

ARIA live region for accessibility announcements.

| Attr/Property | Type | Description |
|---|---|---|
| mode | string | "polite" \| "assertive" \| "off" |
| atomic | boolean | aria-atomic |
| relevant | string | aria-relevant |
| visually-hidden | boolean | Invisible but still announced |
| region-role | string | Override role |

### `<aiux-loader>`

Spinner / loading indicator.

| Attr/Property | Type | Description |
|---|---|---|
| size | string | "xs" \| "sm" \| "md" \| "lg" \| "xl" |
| label | string | Accessible loading label |
| .animationConfig | Object | Lottie config |
| show-footer | boolean | Show footer logo |

### `<aiux-pagination-nav>`

Page-number navigation control.

| Attr/Property | Type | Description |
|---|---|---|
| current-page | number | Active page (1-based) |
| total-pages | number | Total pages |
| max-buttons | number | Max page buttons |
| show-prev-next | boolean | Prev/next arrows |
| show-first-last | boolean | First/last arrows |
| size | string | "xs" \| "sm" \| "md" \| "lg" \| "xl" |
| onchange | string | Callback; detail {page, previousPage, totalPages} |

### `<aiux-tab-group>`

Tabbed sections.

| Attr/Property | Type | Description |
|---|---|---|
| .tabs | Array | {label, id, content?, disabled?} |
| active-tab | string | Active tab id |
| variant | string | "boxed" \| "bordered" \| "lifted" |
| placement | string | "top" \| "bottom" |
| size | string | "xs" \| "sm" \| "md" \| "lg" \| "xl" |
| name | string | Group name |
| stretch | boolean | Stretch to fill width |
| onchange | string | Callback; detail {id, label, index} |

### `<aiux-toast-notification>`

Stand-alone toast (the `notifications` service produces these — see [Component → Services](component.md#notifications--toast-notifications)).

| Attr/Property | Type | Description |
|---|---|---|
| type | string | "info" \| "success" \| "warning" \| "error" |
| message | string | Body text |
| position | string | Screen position |
| dismissible | boolean | Show dismiss button |
| icon | string | Custom icon name |
| duration | number | Auto-dismiss ms |
| visible | boolean | Show/hide |
| ondismiss | string | Callback on dismiss |

### `<aiux-time-selector>`

12/24-hour time input.

| Attr/Property | Type | Description |
|---|---|---|
| is-12-hour | boolean | 12-hour format with AM/PM toggle (default true) |
| value | string | Initial time in HH:MM (24-hour) |
| disabled | boolean | Disable all inputs |
| size | string | "sm" \| "md" \| "lg" |

---

## DaisyUI utility classes

Tailwind plus DaisyUI is bundled with sn_aiux, with every class prefixed `aiux-`. Common ones you'll reach for:

- **Cards:** `aiux-card`, `aiux-card-body`, `aiux-card-title`, `aiux-card-bordered`, `aiux-shadow-md`
- **Tables:** `aiux-table`, `aiux-table-zebra`, `aiux-table-sm`
- **Badges:** `aiux-badge`, `aiux-badge-primary`, `aiux-badge-outline`, `aiux-badge-ghost`
- **Buttons:** `aiux-btn`, `aiux-btn-primary`, `aiux-btn-dash`, `aiux-btn-ghost`
- **Alerts (utility variant):** `aiux-alert`, `aiux-alert-info`, `aiux-alert-error`
- **Modals (utility variant):** `aiux-modal`, `aiux-modal-open`, `aiux-modal-toggle`
- **Layout:** `aiux-bg-base-100`, `aiux-bg-base-200`, `aiux-divider`, `aiux-overflow-x-auto`
- **Typography:** `aiux-text-sm`, `aiux-text-xs`, `aiux-opacity-70`, `aiux-opacity-60`
- **Spacing:** `aiux-p-3`, `aiux-rounded`

When in doubt, search the bundled CSS file (`/sncapps/aix/assets/aiux-kit-*.css`) for the class name you want — every DaisyUI utility ships with the `aiux-` prefix applied.

### Picking between a component and a utility

- Use **`<aiux-alert-message>`** when you want a configurable, accessible, dismissible alert with a typed `type` attribute.
- Use **`aiux-alert aiux-alert-info`** classes when you just need a styled box around your own content.
- Use **`<aiux-dialog>`** when you want a real modal with focus trapping, escape handling, and a backdrop.
- Use **`aiux-modal`** utility classes when you want to style a custom overlay that doesn't behave like a true modal.

The pattern generalizes: pre-built component for behavior + accessibility, utility classes for composition.
