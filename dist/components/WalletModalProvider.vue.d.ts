import type { Wallet } from "@/types";
import { WalletName } from "@solana/wallet-adapter-base";
import { Ref } from "vue";
type WalletModalProviderRawBindings = WalletModelProviderScope & {
    scope: WalletModelProviderScope;
};
type WalletModelProviderScope = {
    dark: Ref<boolean>;
    logo: Ref<string | undefined>;
    hasLogo: Ref<boolean>;
    featured: Ref<number>;
    container: Ref<string>;
    modalPanel: Ref<HTMLElement | null>;
    modalOpened: Ref<boolean>;
    openModal: () => void;
    closeModal: () => void;
    expandedWallets: Ref<boolean>;
    walletsToDisplay: Ref<Wallet[]>;
    featuredWallets: Ref<Wallet[]>;
    hiddenWallets: Ref<Wallet[]>;
    selectWallet: (name: WalletName) => void;
};
declare const _default: import("vue").DefineComponent<{
    featured: {
        type: NumberConstructor;
        default: number;
    };
    container: {
        type: StringConstructor;
        default: string;
    };
    logo: StringConstructor;
    dark: BooleanConstructor;
}, WalletModalProviderRawBindings, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    featured: {
        type: NumberConstructor;
        default: number;
    };
    container: {
        type: StringConstructor;
        default: string;
    };
    logo: StringConstructor;
    dark: BooleanConstructor;
}>>, {
    featured: number;
    container: string;
    dark: boolean;
}>;
export default _default;
