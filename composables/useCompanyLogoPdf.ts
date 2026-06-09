import type { Companies } from "@/interfaces/Company.interface"
import { companyStore } from "@/store/company"

export const useCompanyLogoUrl = (logo: string | null | undefined): string | null => {
    if (!logo) return null;
    if (logo.startsWith("http://") || logo.startsWith("https://")) return logo;
    const apiURL = useCookie("apiURL");
    return `${apiURL.value}${logo}`;
};

export const useCompanyLogoPdf = async (): Promise<{ image: string; width: number; alignment: string; margin: number[] } | null> => {
    const companyState = companyStore().$state;
    const logo = companyState.companies?.logo;
    if (!logo) return null;

    const logoUrl = useCompanyLogoUrl(logo);
    if (!logoUrl) return null;

    try {
        const response = await fetch(logoUrl);
        if (!response.ok) return null;

        const blob = await response.blob();
        const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });

        return { image: base64, width: 120, alignment: "left", margin: [0, 0, 0, 10] };
    } catch {
        return null;
    }
};

export const syncCompanyState = (company: Companies["companies"]) => {
    const store = companyStore();
    store.$state.companies = { ...store.$state.companies, ...company };
    const companyCookie = useCookie("company");
    companyCookie.value = store.$state.companies as any;
};
