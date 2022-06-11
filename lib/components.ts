import React from 'react';
import ReactNative from 'react-native';

const { components } = window.enmity;

/**
 * React Native Alert
 * @see {@link https://reactnative.dev/docs/alert}
 */
export const Alert: typeof ReactNative.Alert = components.Alert;

/**
 * React Native Button
 * @see {@link https://reactnative.dev/docs/button}
 */
export const Button: typeof ReactNative.Button = components.Button;

/**
 * React Native FlatList
 * @see {@link https://reactnative.dev/docs/flatlist}
 */
export const FlatList: typeof ReactNative.FlatList = components.FlatList;

/**
 * React Native Image
 * @see {@link https://reactnative.dev/docs/image}
 */
export const Image: typeof ReactNative.Image = components.Image;

/**
 * React Native ImageBackground
 * @see {@link https://reactnative.dev/docs/imagebackground}
 */
export const ImageBackground: typeof ReactNative.ImageBackground = components.ImageBackground;

/**
 * React Native KeyboardAvoidingView
 * @see {@link https://reactnative.dev/docs/keyboardavoidingview}
 */
export const KeyboardAvoidingView: typeof ReactNative.KeyboardAvoidingView = components.KeyboardAvoidingView;

/**
 * React Native Modal
 * @see {@link https://reactnative.dev/docs/modal}
 */
export const Modal: typeof ReactNative.Modal = components.Modal;

/**
 * React Native Pressable
 * @see {@link https://reactnative.dev/docs/pressable}
 */
export const Pressable: typeof ReactNative.Pressable = components.Pressable;

/**
 * React Native RefreshControl
 * @see {@link https://reactnative.dev/docs/pressable}
 */
export const RefreshControl: typeof ReactNative.RefreshControl = components.RefreshControl;

/**
 * React Native ScrollView
 * @see {@link https://reactnative.dev/docs/scrollview}
 */
export const ScrollView: typeof ReactNative.ScrollView = components.ScrollView;

/**
 * React Native SectionList
 * @see {@link https://reactnative.dev/docs/sectionlist}
 */
export const SectionList: typeof ReactNative.SectionList = components.SectionList;

/**
 * React Native StatusBar
 * @see {@link https://reactnative.dev/docs/statusbar}
 */
export const StatusBar: typeof ReactNative.StatusBar = components.StatusBar;

/**
 * React Native Stylesheet
 * @see {@link https://reactnative.dev/docs/stylesheet}
 */
export const StyleSheet: typeof ReactNative.StyleSheet = components.StyleSheet;

/**
 * React Native Switch
 * @see {@link https://reactnative.dev/docs/switch}
 */
export const Switch: typeof ReactNative.StyleSheet = components.Switch;

/**
 * React Native Text
 * @see {@link https://reactnative.dev/docs/text}
 */
export const Text: typeof ReactNative.Text = components.Text;

/**
 * React Native TextInput
 * @see {@link https://reactnative.dev/docs/textinput}
 */
export const TextInput: typeof ReactNative.TextInput = components.TextInput;

/**
 * React Native TouchableHighlight
 * @see {@link https://reactnative.dev/docs/TouchableHighlight}
 */
export const TouchableHighlight: typeof ReactNative.TouchableHighlight = components.TouchableHighlight;

/**
 * React Native TouchableOpacity
 * @see {@link https://reactnative.dev/docs/TouchableOpacity}
 */
export const TouchableOpacity: typeof ReactNative.TouchableOpacity = components.TouchableOpacity;

/**
 * React Native TouchableWithoutFeedback
 * @see {@link https://reactnative.dev/docs/TouchableWithoutFeedback}
 */
export const TouchableWithoutFeedback: typeof ReactNative.TouchableWithoutFeedback = components.TouchableWithoutFeedback;

/**
 * React Native Touchable
 * @see {@link https://reactnative.dev/docs/Touchable}
 */
export const Touchable: typeof ReactNative.Touchable = components.Touchable;

/**
 * React Native View
 * @see {@link https://reactnative.dev/docs/View}
 */
export const View: typeof ReactNative.View = components.View;

/**
 * React Native VirtualizedList
 * @see {@link https://reactnative.dev/docs/VirtualizedList}
 */
export const VirtualizedList: typeof ReactNative.VirtualizedList = components.VirtualizedList;

/**
 * Discord Form
 */
export const Form: React.ForwardRefExoticComponent<any> = components.Form;

/**
 * Discord FormArrow
 */
export const FormArrow: React.ComponentType = components.FormArrow;

/**
 * Discord FormCTA
 */
export const FormCTA: React.ComponentType = components.FormCTA;

/**
 * Discord FormCTAButton
 */
export const FormCTAButton: React.ComponentType = components.FormCTAButton;

/**
 * Discord FormCardSection
 */
export const FormCardSection: React.ComponentType = components.FormCardSection;

/**
 * Discord FormCheckbox
 */
export const FormCheckbox: React.ComponentType = components.FormCheckbox;

/**
 * Discord FormDivider
 */
export const FormDivider: React.ComponentType = components.FormDivider;

/**
 * Discord FormHint
 */
export const FormHint: React.ComponentType = components.FormHint;

/**
 * Discord FormIcon
 */
export const FormIcon: React.ComponentType = components.FormIcon;

/**
 * Discord FormInput
 */
export const FormInput: React.ForwardRefExoticComponent<any> = components.FormInput;

/**
 * Discord FormLabel
 */
export const FormLabel: React.ComponentType = components.FormLabel;

/**
 * Discord FormRadio
 */
export const FormRadio: React.ComponentType = components.FormRadio;

/**
 * Discord FormRow
 */
export const FormRow: React.ComponentType & {
   Arrow: typeof FormArrow;
   Label: typeof FormLabel;
   SubLabel: typeof FormSubLabel;
   Radio: typeof FormRadio;
   Switch: typeof FormSwitch;
   Checkbox: typeof FormCheckbox;
   Checkmark: React.ComponentType;
   Icon: typeof FormIcon;
} = components.FormRow;

/**
 * Discord FormSection
 */
export const FormSection: React.ComponentType = components.FormSection;

/**
 * Discord FormSelect
 */
export const FormSelect: React.ComponentType = components.FormSelect;

/**
 * Discord FormSubLabel
 */
export const FormSubLabel: React.ComponentType = components.FormSubLabel;

/**
 * Discord FormSwitch
 */
export const FormSwitch: React.ComponentType = components.FormSwitch;

/**
 * Discord FormTernaryCheckBox
 */
export const FormTernaryCheckBox: React.ComponentType = components.FormTernaryCheckBox;

/**
 * Discord FormText
 */
export const FormText: React.ForwardRefExoticComponent<{}> = components.FormText;

/**
 * Discord FormTextColors
 */
export const FormTextColors: Record<string, { color: string; }> = components.FormTextColors;

/**
 * Discord FormTextSizes
 */
export const FormTextSizes: Record<string, { fontSize: number; lineHeight: number; }> = components.FormTextSizes;
