/// <reference types="react" />
/// <reference types="react" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
/// <reference types="lodash" />
import * as ReactNative from 'react-native';
import { Asset } from 'lib/api/assets';
import { Message } from 'lib/common';
export interface Common {
    Constants: any;
    Clipboard: {
        getString: () => string;
        setString: () => void;
    };
    Assets: {
        registerAsset: () => number;
        getAssetByID: () => Asset | null;
    };
    Messages: {
        receiveMessage: (...args: any) => void;
        sendBotMessage: (...args: any) => void;
        sendClydeError: (...args: any) => void;
        truncateMessages: (...args: any) => void;
        clearChannel: (...args: any) => void;
        jumpToPresent: (...args: any) => void;
        trackJump: (...args: any) => void;
        jumpToMessage: (...args: any) => void;
        fetchMessages: (...args: any) => void;
        _tryFetchMessagesCached: (...args: any) => void;
        sendMessage: (...args: any) => void;
        getSendMessageOptionsForReply: (...args: any) => void;
        sendInvite: (...args: any) => void;
        sendVoiceChannelInvite: (...args: any) => void;
        sendStickers: (...args: any) => void;
        sendGreetMessage: (...args: any) => void;
        _sendMessage: (...args: any) => void;
        startEditMessage: (...args: any) => void;
        updateEditMessage: (...args: any) => void;
        endEditMessage: (...args: any) => void;
        editMessage: (...args: any) => void;
        suppressEmbeds: (...args: any) => void;
        patchMessageAttachments: (...args: any) => void;
        deleteMessage: (...args: any) => void;
        dismissAutomatedMessage: (...args: any) => void;
        revealMessage: (...args: any) => void;
        crosspostMessage: (...args: any) => void;
        trackInvite: (...args: any) => void;
    };
    Clyde: {
        createBotMessage: (...args: any) => Message;
        default: (...args: any) => Message;
        userRecordToServer: (...args: any) => {
            id: number | undefined;
            username: string | undefined;
            avatar: string | undefined;
            discriminator: string | number | undefined;
            bot: any;
        };
    };
    Avatars: {
        DEFAULT_AVATARS: number[];
        DEFAULT_GROUP_DM_AVATARS: number[];
        BOT_AVATARS: {
            clyde: number;
            ENMITY: string;
        };
        DEFAULT_CHANNEL_ICON: number;
        ensureAvatarSource: () => boolean;
        getDefaultUserAvatarURL: (...args: any) => string | undefined;
        canUseWebp: () => boolean;
    };
    Native: {
        BundleUpdaterManager: Record<string, any>;
        InfoDictionaryManager: Record<string, any>;
        DCDDeviceManager: Record<string, any>;
        [key: string]: any;
    };
    React: typeof import('react');
    Dispatcher: {
        _subscriptions: Record<string, any>;
        _waitQueue: any[];
        _processingWaitQueue: boolean;
        _currentDispatchActionType: null | string;
        _orderedActionHandlers: Record<string, any>;
        _orderedCallbackTokens: number[];
        _lastID: number;
        _dependencyGraph: any;
    };
    Storage: {
        _getRequests: any[];
        _getKeys: any[];
        _immediate: any;
        getItem: (key: any) => Promise<any>;
        setItem: (key: string, item: any) => Promise<void>;
        removeItem: (key: string) => Promise<void>;
        mergeItem: (...args: any) => any;
        clear: (...args: any) => Promise<void>;
        getAllKeys: string[];
        flushGetRequests: (...args: any) => any;
        multiGet: (...args: any) => any;
        multiSet: (...args: any) => any;
        multiRemove: (...args: any) => any;
        multiMerge: (...args: any) => any;
    };
    Toasts: {
        close: () => void;
        open: (...args: any) => void;
    };
    Dialog: {
        open: (...args: any) => any;
        openLazy: (...args: any) => any;
        close: (...args: any) => any;
        show: (...args: any) => any;
    };
    Token: {
        init: (...args: any) => any;
        getToken: (...args: any) => any;
        setToken: (...args: any) => any;
        hideToken: (...args: any) => any;
        showToken: (...args: any) => any;
        removeToken: (...args: any) => any;
        encryptAndStoreTokens: (...args: any) => any;
    };
    REST: {
        get: (...args: any) => any;
        post: (...args: any) => any;
        put: (...args: any) => any;
        patch: (...args: any) => any;
        delete: (...args: any) => any;
        getAPIBaseURL: (...args: any) => any;
        V6OrEarlierAPIError: (...args: any) => any;
        V8APIError: (...args: any) => any;
    };
    Settings: {
        _settings: Record<string, any>;
        get: (...args: any) => any;
        set: (...args: any) => any;
        watchKeys: (...args: any) => any;
        clearWatch: (...args: any) => any;
        _sendObservations: (...args: any) => any;
    };
    Users: {
        getUser: (...args: any) => any;
        getUsers: (...args: any) => any;
        forEach: (...args: any) => any;
        findByTag: (...args: any) => any;
        filter: (...args: any) => any;
        getCurrentUser: (...args: any) => any;
    };
    Navigation: any;
    NavigationNative: any;
    NavigationStack: any;
    Theme: {
        loadedFromRemote: boolean;
        getAllSettings: (...args: any) => any;
        theme: any;
        locale: any;
        restrictedGuilds: any;
        friendSourceFlags: any;
        friendDiscoveryFlags: any;
        isGuildRestricted: any;
        guildPositions: any;
        guildFolders: any;
        status: any;
        defaultGuildsRestricted: any;
        timezoneOffset: any;
        customStatus: any;
        contactSyncUpsellShown: any;
    };
    Linking: {
        openURL: (...args: any) => any;
        canOpenURL: (...args: any) => any;
        getInitialURL: (...args: any) => any;
        openSettings: (...args: any) => any;
        sendIntent: (...args: any) => any;
        addListener: (...args: any) => any;
        removeListeners: (...args: any) => any;
        getConstants: (...args: any) => any;
    };
    StyleSheet: {
        ThemeColorMap: Record<string, any>;
        createThemedStyleSheet: (...args: any) => any;
        getThemedStylesheet: (...args: any) => any;
    };
    ColorMap: Record<string, any>;
    Lodash: typeof import('lodash');
    Components: {
        Forms: {
            AutoCapitalizeModes: React.ComponentType;
            ClearButtonVisibility: React.ComponentType;
            Form: React.ComponentType;
            FormArrow: React.ComponentType;
            FormCTA: React.ComponentType;
            FormCTAButton: React.ComponentType;
            FormCardSection: React.ComponentType;
            FormCheckbox: React.ComponentType;
            FormCheckmark: React.ComponentType;
            FormDivider: React.ComponentType;
            FormHint: React.ComponentType;
            FormIcon: React.ComponentType;
            FormInput: React.ComponentType;
            FormLabel: React.ComponentType;
            FormRadio: React.ComponentType;
            FormRow: React.ComponentType;
            FormSection: React.ComponentType;
            FormSelect: React.ComponentType;
            FormSubLabel: React.ComponentType;
            FormSwitch: React.ComponentType;
            FormSwitchRow: React.ComponentType;
            FormTernaryCheckBox: React.ComponentType;
            FormText: React.ComponentType;
            FormTextColors: React.ComponentType;
            FormTextSizes: React.ComponentType;
            FormTitle: React.ComponentType;
            KeyboardTypes: React.ComponentType;
            TernaryCheckBoxStates: React.ComponentType;
        };
        General: {
            Alert: typeof ReactNative.Alert;
            Button: typeof ReactNative.Button;
            FlatList: typeof ReactNative.FlatList;
            Image: typeof ReactNative.Image;
            ImageBackground: typeof ReactNative.ImageBackground;
            KeyboardAvoidingView: typeof ReactNative.KeyboardAvoidingView;
            Modal: typeof ReactNative.Modal;
            Pressable: typeof ReactNative.Pressable;
            RefreshControl: typeof ReactNative.RefreshControl;
            ScrollView: typeof ReactNative.ScrollView;
            SectionList: typeof ReactNative.SectionList;
            StatusBar: typeof ReactNative.StatusBar;
            StyleSheet: typeof ReactNative.StyleSheet;
            Switch: typeof ReactNative.StyleSheet;
            Text: typeof ReactNative.Text;
            TextInput: typeof ReactNative.TextInput;
            TouchableHighlight: typeof ReactNative.TouchableHighlight;
            TouchableOpacity: typeof ReactNative.TouchableOpacity;
            TouchableWithoutFeedback: typeof ReactNative.TouchableWithoutFeedback;
            Touchable: typeof ReactNative.Touchable;
            View: typeof ReactNative.View;
            VirtualizedList: typeof ReactNative.VirtualizedList;
        };
    };
    Locale: {
        _events: Record<string, any>;
        _eventsCount: number;
        _maxListeners: number | undefined;
        loadPromise: Promise<void>;
        _languages: Record<string, {
            name: string;
            englishName: string;
            code: string;
            postgresLang: string;
            enabled: string;
        }>[];
        _chosenLocale: string;
        _getParsedMessages: (...args: any) => any;
        _handleNewListener: (...args: any) => any;
        _provider: Record<string, any>;
        Messages: Record<string, any>;
        _getMessages: (...args: any) => any;
        _requestedLocale: string;
    };
    Profiles: {
        connectAndOpen: (...args: any) => any;
        connectOrLurkStage: (...args: any) => any;
        connectToStage: (...args: any) => any;
        navigateToStage: (...args: any) => any;
        showUserProfile: (...args: any) => any;
    };
    Logger: any;
    Flux: {
        Store: any;
        Dispatcher: any;
        BatchedStoreListener: any;
        ActionHandlers: any;
        ActionBase: any;
        default: {
            Store: any;
            PersistedStore: any;
            DeviceSettingsStore: (...args: any) => any;
            OfflineCacheStore: (...args: any) => any;
            connectStores: (...args: any) => any;
            initialize: (...args: any) => any;
            initialized: boolean;
            destroy: (...args: any) => any;
        };
        connectStores: (stores: any[], propsCallback: (...args: any) => any) => any;
        useStateFromStoresObject: (...args: any) => any;
        useStateFromStoresArray: (...args: any) => any;
        useStateFromStores: (...args: any) => any;
    };
    SVG: {
        Circle: React.ComponentType;
        ClipPath: React.ComponentType;
        Defs: React.ComponentType;
        Ellipse: React.ComponentType;
        G: React.ComponentType;
        Image: React.ComponentType;
        Line: React.ComponentType;
        LinearGradient: React.ComponentType;
        Mask: React.ComponentType;
        Path: React.ComponentType;
        Pattern: React.ComponentType;
        Polygon: React.ComponentType;
        Polyline: React.ComponentType;
        RadialGradient: React.ComponentType;
        Rect: React.ComponentType;
        Stop: React.ComponentType;
        Svg: React.ComponentType;
        Symbol: React.ComponentType;
        TSpan: React.ComponentType;
        Text: React.ComponentType;
        TextPath: React.ComponentType;
        Use: React.ComponentType;
        default: React.ComponentType;
    };
    Scenes: {
        default: (...args: any) => any;
    };
}
export declare const Constants: any;
export declare const Clipboard: {
    getString: () => string;
    setString: () => void;
};
export declare const Assets: {
    registerAsset: () => number;
    getAssetByID: () => Asset | null;
};
export declare const Messages: {
    receiveMessage: (...args: any) => void;
    sendBotMessage: (...args: any) => void;
    sendClydeError: (...args: any) => void;
    truncateMessages: (...args: any) => void;
    clearChannel: (...args: any) => void;
    jumpToPresent: (...args: any) => void;
    trackJump: (...args: any) => void;
    jumpToMessage: (...args: any) => void;
    fetchMessages: (...args: any) => void;
    _tryFetchMessagesCached: (...args: any) => void;
    sendMessage: (...args: any) => void;
    getSendMessageOptionsForReply: (...args: any) => void;
    sendInvite: (...args: any) => void;
    sendVoiceChannelInvite: (...args: any) => void;
    sendStickers: (...args: any) => void;
    sendGreetMessage: (...args: any) => void;
    _sendMessage: (...args: any) => void;
    startEditMessage: (...args: any) => void;
    updateEditMessage: (...args: any) => void;
    endEditMessage: (...args: any) => void;
    editMessage: (...args: any) => void;
    suppressEmbeds: (...args: any) => void;
    patchMessageAttachments: (...args: any) => void;
    deleteMessage: (...args: any) => void;
    dismissAutomatedMessage: (...args: any) => void;
    revealMessage: (...args: any) => void;
    crosspostMessage: (...args: any) => void;
    trackInvite: (...args: any) => void;
};
export declare const Clyde: {
    createBotMessage: (...args: any) => Message;
    default: (...args: any) => Message;
    userRecordToServer: (...args: any) => {
        id: number | undefined;
        username: string | undefined;
        avatar: string | undefined;
        discriminator: string | number | undefined;
        bot: any;
    };
};
export declare const Avatars: {
    DEFAULT_AVATARS: number[];
    DEFAULT_GROUP_DM_AVATARS: number[];
    BOT_AVATARS: {
        clyde: number;
        ENMITY: string;
    };
    DEFAULT_CHANNEL_ICON: number;
    ensureAvatarSource: () => boolean;
    getDefaultUserAvatarURL: (...args: any) => string | undefined;
    canUseWebp: () => boolean;
};
export declare const Native: {
    [key: string]: any;
    BundleUpdaterManager: Record<string, any>;
    InfoDictionaryManager: Record<string, any>;
    DCDDeviceManager: Record<string, any>;
};
export declare const React: typeof import("react");
export declare const Dispatcher: {
    _subscriptions: Record<string, any>;
    _waitQueue: any[];
    _processingWaitQueue: boolean;
    _currentDispatchActionType: null | string;
    _orderedActionHandlers: Record<string, any>;
    _orderedCallbackTokens: number[];
    _lastID: number;
    _dependencyGraph: any;
};
export declare const Storage: {
    _getRequests: any[];
    _getKeys: any[];
    _immediate: any;
    getItem: (key: any) => Promise<any>;
    setItem: (key: string, item: any) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
    mergeItem: (...args: any) => any;
    clear: (...args: any) => Promise<void>;
    getAllKeys: string[];
    flushGetRequests: (...args: any) => any;
    multiGet: (...args: any) => any;
    multiSet: (...args: any) => any;
    multiRemove: (...args: any) => any;
    multiMerge: (...args: any) => any;
};
export declare const Toasts: {
    close: () => void;
    open: (...args: any) => void;
};
export declare const Dialog: {
    open: (...args: any) => any;
    openLazy: (...args: any) => any;
    close: (...args: any) => any;
    show: (...args: any) => any;
};
export declare const Token: {
    init: (...args: any) => any;
    getToken: (...args: any) => any;
    setToken: (...args: any) => any;
    hideToken: (...args: any) => any;
    showToken: (...args: any) => any;
    removeToken: (...args: any) => any;
    encryptAndStoreTokens: (...args: any) => any;
};
export declare const REST: {
    get: (...args: any) => any;
    post: (...args: any) => any;
    put: (...args: any) => any;
    patch: (...args: any) => any;
    delete: (...args: any) => any;
    getAPIBaseURL: (...args: any) => any;
    V6OrEarlierAPIError: (...args: any) => any;
    V8APIError: (...args: any) => any;
};
export declare const Settings: {
    _settings: Record<string, any>;
    get: (...args: any) => any;
    set: (...args: any) => any;
    watchKeys: (...args: any) => any;
    clearWatch: (...args: any) => any;
    _sendObservations: (...args: any) => any;
};
export declare const Users: {
    getUser: (...args: any) => any;
    getUsers: (...args: any) => any;
    forEach: (...args: any) => any;
    findByTag: (...args: any) => any;
    filter: (...args: any) => any;
    getCurrentUser: (...args: any) => any;
};
export declare const Navigation: any;
export declare const NavigationNative: any;
export declare const NavigationStack: any;
export declare const Theme: {
    loadedFromRemote: boolean;
    getAllSettings: (...args: any) => any;
    theme: any;
    locale: any;
    restrictedGuilds: any;
    friendSourceFlags: any;
    friendDiscoveryFlags: any;
    isGuildRestricted: any;
    guildPositions: any;
    guildFolders: any;
    status: any;
    defaultGuildsRestricted: any;
    timezoneOffset: any;
    customStatus: any;
    contactSyncUpsellShown: any;
};
export declare const Linking: {
    openURL: (...args: any) => any;
    canOpenURL: (...args: any) => any;
    getInitialURL: (...args: any) => any;
    openSettings: (...args: any) => any;
    sendIntent: (...args: any) => any;
    addListener: (...args: any) => any;
    removeListeners: (...args: any) => any;
    getConstants: (...args: any) => any;
};
export declare const StyleSheet: {
    ThemeColorMap: Record<string, any>;
    createThemedStyleSheet: (...args: any) => any;
    getThemedStylesheet: (...args: any) => any;
};
export declare const ColorMap: Record<string, any>;
export declare const Components: {
    Forms: {
        AutoCapitalizeModes: React.ComponentType;
        ClearButtonVisibility: React.ComponentType;
        Form: React.ComponentType;
        FormArrow: React.ComponentType;
        FormCTA: React.ComponentType;
        FormCTAButton: React.ComponentType;
        FormCardSection: React.ComponentType;
        FormCheckbox: React.ComponentType;
        FormCheckmark: React.ComponentType;
        FormDivider: React.ComponentType;
        FormHint: React.ComponentType;
        FormIcon: React.ComponentType;
        FormInput: React.ComponentType;
        FormLabel: React.ComponentType;
        FormRadio: React.ComponentType;
        FormRow: React.ComponentType;
        FormSection: React.ComponentType;
        FormSelect: React.ComponentType;
        FormSubLabel: React.ComponentType;
        FormSwitch: React.ComponentType;
        FormSwitchRow: React.ComponentType;
        FormTernaryCheckBox: React.ComponentType;
        FormText: React.ComponentType;
        FormTextColors: React.ComponentType;
        FormTextSizes: React.ComponentType;
        FormTitle: React.ComponentType;
        KeyboardTypes: React.ComponentType;
        TernaryCheckBoxStates: React.ComponentType;
    };
    General: {
        Alert: typeof ReactNative.Alert;
        Button: typeof ReactNative.Button;
        FlatList: typeof ReactNative.FlatList;
        Image: typeof ReactNative.Image;
        ImageBackground: typeof ReactNative.ImageBackground;
        KeyboardAvoidingView: typeof ReactNative.KeyboardAvoidingView;
        Modal: typeof ReactNative.Modal;
        Pressable: typeof ReactNative.Pressable;
        RefreshControl: typeof ReactNative.RefreshControl;
        ScrollView: typeof ReactNative.ScrollView;
        SectionList: typeof ReactNative.SectionList;
        StatusBar: typeof ReactNative.StatusBar;
        StyleSheet: typeof ReactNative.StyleSheet;
        Switch: typeof ReactNative.StyleSheet;
        Text: typeof ReactNative.Text;
        TextInput: typeof ReactNative.TextInput;
        TouchableHighlight: typeof ReactNative.TouchableHighlight;
        TouchableOpacity: typeof ReactNative.TouchableOpacity;
        TouchableWithoutFeedback: typeof ReactNative.TouchableWithoutFeedback;
        Touchable: typeof ReactNative.Touchable;
        View: typeof ReactNative.View;
        VirtualizedList: typeof ReactNative.VirtualizedList;
    };
};
export declare const Locale: {
    _events: Record<string, any>;
    _eventsCount: number;
    _maxListeners: number | undefined;
    loadPromise: Promise<void>;
    _languages: Record<string, {
        name: string;
        englishName: string;
        code: string;
        postgresLang: string;
        enabled: string;
    }>[];
    _chosenLocale: string;
    _getParsedMessages: (...args: any) => any;
    _handleNewListener: (...args: any) => any;
    _provider: Record<string, any>;
    Messages: Record<string, any>;
    _getMessages: (...args: any) => any;
    _requestedLocale: string;
};
export declare const Profiles: {
    connectAndOpen: (...args: any) => any;
    connectOrLurkStage: (...args: any) => any;
    connectToStage: (...args: any) => any;
    navigateToStage: (...args: any) => any;
    showUserProfile: (...args: any) => any;
};
export declare const Lodash: import("lodash").LoDashStatic;
export declare const Logger: any;
export declare const Flux: {
    Store: any;
    Dispatcher: any;
    BatchedStoreListener: any;
    ActionHandlers: any;
    ActionBase: any;
    default: {
        Store: any;
        PersistedStore: any;
        DeviceSettingsStore: (...args: any) => any;
        OfflineCacheStore: (...args: any) => any;
        connectStores: (...args: any) => any;
        initialize: (...args: any) => any;
        initialized: boolean;
        destroy: (...args: any) => any;
    };
    connectStores: (stores: any[], propsCallback: (...args: any) => any) => any;
    useStateFromStoresObject: (...args: any) => any;
    useStateFromStoresArray: (...args: any) => any;
    useStateFromStores: (...args: any) => any;
};
export declare const SVG: {
    Circle: React.ComponentType;
    ClipPath: React.ComponentType;
    Defs: React.ComponentType;
    Ellipse: React.ComponentType;
    G: React.ComponentType;
    Image: React.ComponentType;
    Line: React.ComponentType;
    LinearGradient: React.ComponentType;
    Mask: React.ComponentType;
    Path: React.ComponentType;
    Pattern: React.ComponentType;
    Polygon: React.ComponentType;
    Polyline: React.ComponentType;
    RadialGradient: React.ComponentType;
    Rect: React.ComponentType;
    Stop: React.ComponentType;
    Svg: React.ComponentType;
    Symbol: React.ComponentType;
    TSpan: React.ComponentType;
    Text: React.ComponentType;
    TextPath: React.ComponentType;
    Use: React.ComponentType;
    default: React.ComponentType;
};
export declare const Scenes: {
    default: (...args: any) => any;
};
