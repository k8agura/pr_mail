/* __placeholder__ */
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_componentsOption = {};
let __VLS_name!: 'Modal';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'QDialog', typeof __VLS_localComponents, "QDialog", "qDialog", "q-dialog"> &
__VLS_WithComponent<'QCard', typeof __VLS_localComponents, "QCard", "qCard", "q-card"> &
__VLS_WithComponent<'QBar', typeof __VLS_localComponents, "QBar", "qBar", "q-bar"> &
__VLS_WithComponent<'QSpace', typeof __VLS_localComponents, "QSpace", "qSpace", "q-space"> &
__VLS_WithComponent<'QBtn', typeof __VLS_localComponents, "QBtn", "qBtn", "q-btn"> &
__VLS_WithComponent<'QTooltip', typeof __VLS_localComponents, "QTooltip", "qTooltip", "q-tooltip"> &
__VLS_WithComponent<'QCardSection', typeof __VLS_localComponents, "QCardSection", "qCardSection", "q-card-section">;
__VLS_components.QDialog; __VLS_components.QDialog; __VLS_components.qDialog; __VLS_components.qDialog; __VLS_components["q-dialog"]; __VLS_components["q-dialog"];
// @ts-ignore
[QDialog, QDialog,];
__VLS_components.QCard; __VLS_components.QCard; __VLS_components.qCard; __VLS_components.qCard; __VLS_components["q-card"]; __VLS_components["q-card"];
// @ts-ignore
[QCard, QCard,];
__VLS_components.QBar; __VLS_components.QBar; __VLS_components.qBar; __VLS_components.qBar; __VLS_components["q-bar"]; __VLS_components["q-bar"];
// @ts-ignore
[QBar, QBar,];
__VLS_components.QSpace; __VLS_components.qSpace; __VLS_components["q-space"];
// @ts-ignore
[QSpace,];
__VLS_components.QBtn; __VLS_components.QBtn; __VLS_components.QBtn; __VLS_components.QBtn; __VLS_components.QBtn; __VLS_components.QBtn; __VLS_components.qBtn; __VLS_components.qBtn; __VLS_components.qBtn; __VLS_components.qBtn; __VLS_components.qBtn; __VLS_components.qBtn; __VLS_components["q-btn"]; __VLS_components["q-btn"]; __VLS_components["q-btn"]; __VLS_components["q-btn"]; __VLS_components["q-btn"]; __VLS_components["q-btn"];
// @ts-ignore
[QBtn, QBtn, QBtn, QBtn, QBtn, QBtn,];
__VLS_components.QTooltip; __VLS_components.QTooltip; __VLS_components.QTooltip; __VLS_components.QTooltip; __VLS_components.QTooltip; __VLS_components.QTooltip; __VLS_components.qTooltip; __VLS_components.qTooltip; __VLS_components.qTooltip; __VLS_components.qTooltip; __VLS_components.qTooltip; __VLS_components.qTooltip; __VLS_components["q-tooltip"]; __VLS_components["q-tooltip"]; __VLS_components["q-tooltip"]; __VLS_components["q-tooltip"]; __VLS_components["q-tooltip"]; __VLS_components["q-tooltip"];
// @ts-ignore
[QTooltip, QTooltip, QTooltip, QTooltip, QTooltip, QTooltip,];
__VLS_components.QCardSection; __VLS_components.QCardSection; __VLS_components.QCardSection; __VLS_components.QCardSection; __VLS_components.qCardSection; __VLS_components.qCardSection; __VLS_components.qCardSection; __VLS_components.qCardSection; __VLS_components["q-card-section"]; __VLS_components["q-card-section"]; __VLS_components["q-card-section"]; __VLS_components["q-card-section"];
// @ts-ignore
[QCardSection, QCardSection, QCardSection, QCardSection,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
{
const __VLS_0 = ({} as 'QDialog' extends keyof typeof __VLS_ctx ? { 'QDialog': typeof __VLS_ctx.QDialog; } : 'qDialog' extends keyof typeof __VLS_ctx ? { 'QDialog': typeof __VLS_ctx.qDialog; } : 'q-dialog' extends keyof typeof __VLS_ctx ? { 'QDialog': (typeof __VLS_ctx)["q-dialog"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QDialog;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, persistent: (true), maximized: ((__VLS_ctx.maximizedToggle)), transitionShow: ("slide-up"), transitionHide: ("slide-down"), }));
({} as { QDialog: typeof __VLS_0; }).QDialog;
({} as { QDialog: typeof __VLS_0; }).QDialog;
const __VLS_2 = __VLS_1({ ...{}, persistent: (true), maximized: ((__VLS_ctx.maximizedToggle)), transitionShow: ("slide-up"), transitionHide: ("slide-down"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, persistent: (true), maximized: ((__VLS_ctx.maximizedToggle)), transitionShow: ("slide-up"), transitionHide: ("slide-down"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'QCard' extends keyof typeof __VLS_ctx ? { 'QCard': typeof __VLS_ctx.QCard; } : 'qCard' extends keyof typeof __VLS_ctx ? { 'QCard': typeof __VLS_ctx.qCard; } : 'q-card' extends keyof typeof __VLS_ctx ? { 'QCard': (typeof __VLS_ctx)["q-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QCard;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, class: ("bg-white text-dark"), }));
({} as { QCard: typeof __VLS_5; }).QCard;
({} as { QCard: typeof __VLS_5; }).QCard;
const __VLS_7 = __VLS_6({ ...{}, class: ("bg-white text-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white text-dark"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'QBar' extends keyof typeof __VLS_ctx ? { 'QBar': typeof __VLS_ctx.QBar; } : 'qBar' extends keyof typeof __VLS_ctx ? { 'QBar': typeof __VLS_ctx.qBar; } : 'q-bar' extends keyof typeof __VLS_ctx ? { 'QBar': (typeof __VLS_ctx)["q-bar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QBar;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { QBar: typeof __VLS_10; }).QBar;
({} as { QBar: typeof __VLS_10; }).QBar;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'QSpace' extends keyof typeof __VLS_ctx ? { 'QSpace': typeof __VLS_ctx.QSpace; } : 'qSpace' extends keyof typeof __VLS_ctx ? { 'QSpace': typeof __VLS_ctx.qSpace; } : 'q-space' extends keyof typeof __VLS_ctx ? { 'QSpace': (typeof __VLS_ctx)["q-space"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QSpace;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { QSpace: typeof __VLS_15; }).QSpace;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
{
const __VLS_20 = ({} as 'QBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.QBtn; } : 'qBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.qBtn; } : 'q-btn' extends keyof typeof __VLS_ctx ? { 'QBtn': (typeof __VLS_ctx)["q-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QBtn;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ onClick: {} as any, }, dense: (true), flat: (true), icon: ("minimize"), disable: ((!__VLS_ctx.maximizedToggle)), }));
({} as { QBtn: typeof __VLS_20; }).QBtn;
({} as { QBtn: typeof __VLS_20; }).QBtn;
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, dense: (true), flat: (true), icon: ("minimize"), disable: ((!__VLS_ctx.maximizedToggle)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, dense: (true), flat: (true), icon: ("minimize"), disable: ((!__VLS_ctx.maximizedToggle)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
let __VLS_25 = { 'click': __VLS_pickEvent(__VLS_24['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_22>).onClick) };
__VLS_25 = {
click: $event => {
__VLS_ctx.maximizedToggle = false;
// @ts-ignore
[maximizedToggle, maximizedToggle, maximizedToggle, maximizedToggle, maximizedToggle, maximizedToggle, maximizedToggle,];
}
};
if (__VLS_ctx.maximizedToggle) {
{
const __VLS_26 = ({} as 'QTooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': typeof __VLS_ctx.QTooltip; } : 'qTooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': typeof __VLS_ctx.qTooltip; } : 'q-tooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': (typeof __VLS_ctx)["q-tooltip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QTooltip;
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{}, class: ("bg-dark text-white"), }));
({} as { QTooltip: typeof __VLS_26; }).QTooltip;
({} as { QTooltip: typeof __VLS_26; }).QTooltip;
const __VLS_28 = __VLS_27({ ...{}, class: ("bg-dark text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("bg-dark text-white"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
(__VLS_29.slots!).default;
}
// @ts-ignore
[maximizedToggle,];
}
(__VLS_23.slots!).default;
}
{
const __VLS_31 = ({} as 'QBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.QBtn; } : 'qBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.qBtn; } : 'q-btn' extends keyof typeof __VLS_ctx ? { 'QBtn': (typeof __VLS_ctx)["q-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QBtn;
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ onClick: {} as any, }, dense: (true), flat: (true), icon: ("crop_square"), disable: ((__VLS_ctx.maximizedToggle)), }));
({} as { QBtn: typeof __VLS_31; }).QBtn;
({} as { QBtn: typeof __VLS_31; }).QBtn;
const __VLS_33 = __VLS_32({ ...{ onClick: {} as any, }, dense: (true), flat: (true), icon: ("crop_square"), disable: ((__VLS_ctx.maximizedToggle)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, dense: (true), flat: (true), icon: ("crop_square"), disable: ((__VLS_ctx.maximizedToggle)), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
let __VLS_36 = { 'click': __VLS_pickEvent(__VLS_35['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_33>).onClick) };
__VLS_36 = {
click: $event => {
__VLS_ctx.maximizedToggle = true;
// @ts-ignore
[maximizedToggle, maximizedToggle, maximizedToggle, maximizedToggle,];
}
};
if (!__VLS_ctx.maximizedToggle) {
{
const __VLS_37 = ({} as 'QTooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': typeof __VLS_ctx.QTooltip; } : 'qTooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': typeof __VLS_ctx.qTooltip; } : 'q-tooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': (typeof __VLS_ctx)["q-tooltip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QTooltip;
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, class: ("bg-dark text-white"), }));
({} as { QTooltip: typeof __VLS_37; }).QTooltip;
({} as { QTooltip: typeof __VLS_37; }).QTooltip;
const __VLS_39 = __VLS_38({ ...{}, class: ("bg-dark text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_37, typeof __VLS_39> & Record<string, unknown>) => void)({ ...{}, class: ("bg-dark text-white"), });
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
let __VLS_41!: __VLS_NormalizeEmits<typeof __VLS_40.emit>;
(__VLS_40.slots!).default;
}
// @ts-ignore
[maximizedToggle,];
}
(__VLS_34.slots!).default;
}
{
const __VLS_42 = ({} as 'QBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.QBtn; } : 'qBtn' extends keyof typeof __VLS_ctx ? { 'QBtn': typeof __VLS_ctx.qBtn; } : 'q-btn' extends keyof typeof __VLS_ctx ? { 'QBtn': (typeof __VLS_ctx)["q-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QBtn;
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{}, dense: (true), flat: (true), icon: ("close"), }));
({} as { QBtn: typeof __VLS_42; }).QBtn;
({} as { QBtn: typeof __VLS_42; }).QBtn;
const __VLS_44 = __VLS_43({ ...{}, dense: (true), flat: (true), icon: ("close"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_42, typeof __VLS_44> & Record<string, unknown>) => void)({ ...{}, dense: (true), flat: (true), icon: ("close"), });
const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!;
let __VLS_46!: __VLS_NormalizeEmits<typeof __VLS_45.emit>;
__VLS_directiveFunction(__VLS_ctx.vClosePopup)(undefined);
{
const __VLS_47 = ({} as 'QTooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': typeof __VLS_ctx.QTooltip; } : 'qTooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': typeof __VLS_ctx.qTooltip; } : 'q-tooltip' extends keyof typeof __VLS_ctx ? { 'QTooltip': (typeof __VLS_ctx)["q-tooltip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QTooltip;
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{ onClick: {} as any, }, class: ("bg-dark text-white"), }));
({} as { QTooltip: typeof __VLS_47; }).QTooltip;
({} as { QTooltip: typeof __VLS_47; }).QTooltip;
const __VLS_49 = __VLS_48({ ...{ onClick: {} as any, }, class: ("bg-dark text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_49> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("bg-dark text-white"), });
const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49)!;
let __VLS_51!: __VLS_NormalizeEmits<typeof __VLS_50.emit>;
let __VLS_52 = { 'click': __VLS_pickEvent(__VLS_51['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_49>).onClick) };
__VLS_52 = { click: (__VLS_ctx.closeDialog) };
(__VLS_50.slots!).default;
}
(__VLS_45.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_53 = ({} as 'QCardSection' extends keyof typeof __VLS_ctx ? { 'QCardSection': typeof __VLS_ctx.QCardSection; } : 'qCardSection' extends keyof typeof __VLS_ctx ? { 'QCardSection': typeof __VLS_ctx.qCardSection; } : 'q-card-section' extends keyof typeof __VLS_ctx ? { 'QCardSection': (typeof __VLS_ctx)["q-card-section"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QCardSection;
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ ...{}, }));
({} as { QCardSection: typeof __VLS_53; }).QCardSection;
({} as { QCardSection: typeof __VLS_53; }).QCardSection;
const __VLS_55 = __VLS_54({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_54));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_53, typeof __VLS_55> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
let __VLS_57!: __VLS_NormalizeEmits<typeof __VLS_56.emit>;
{
const __VLS_58 = __VLS_intrinsicElements["div"];
const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
const __VLS_60 = __VLS_59({ ...{}, class: ("text-h6"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_58, typeof __VLS_60> & Record<string, unknown>) => void)({ ...{}, class: ("text-h6"), });
const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60)!;
let __VLS_62!: __VLS_NormalizeEmits<typeof __VLS_61.emit>;
}
(__VLS_56.slots!).default;
}
{
const __VLS_63 = ({} as 'QCardSection' extends keyof typeof __VLS_ctx ? { 'QCardSection': typeof __VLS_ctx.QCardSection; } : 'qCardSection' extends keyof typeof __VLS_ctx ? { 'QCardSection': typeof __VLS_ctx.qCardSection; } : 'q-card-section' extends keyof typeof __VLS_ctx ? { 'QCardSection': (typeof __VLS_ctx)["q-card-section"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).QCardSection;
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{}, class: ("q-pt-none"), }));
({} as { QCardSection: typeof __VLS_63; }).QCardSection;
({} as { QCardSection: typeof __VLS_63; }).QCardSection;
const __VLS_65 = __VLS_64({ ...{}, class: ("q-pt-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_63, typeof __VLS_65> & Record<string, unknown>) => void)({ ...{}, class: ("q-pt-none"), });
const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65)!;
let __VLS_67!: __VLS_NormalizeEmits<typeof __VLS_66.emit>;
(__VLS_66.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[closeDialog,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
