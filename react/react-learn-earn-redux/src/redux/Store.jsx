import { configureStore } from "@reduxjs/toolkit";
import { FooterSlice } from "./slice/FooterSlice";
import { PrivacySlice } from "./slice/PrivacySlice";
import { TermSlice } from "./slice/TermSlice";
import { ServicesSlice } from "./slice/ServicesSlice";
import { TeamSlice } from "./slice/TeamSlice";
import { PricingSlice } from "./slice/PricingSlice";
import { AboutusSlice } from "./slice/AboutusSlice";
import { BlogSlice } from "./slice/BlogSlice";
import { CategorySlice } from "./slice/CategorySlice";
import { HomeSlice } from "./slice/HomeSlice";
import { ContactSlice } from "./slice/ContactSlice";

export const Store = configureStore({
    reducer: {
        footerSlice: FooterSlice.reducer,
        privacySlice: PrivacySlice.reducer,
        termSlice: TermSlice.reducer,
        servicesSlice: ServicesSlice.reducer,
        teamSlice: TeamSlice.reducer,
        pricingSlice: PricingSlice.reducer,
        aboutusSlice: AboutusSlice.reducer,
        blogSlice: BlogSlice.reducer,
        categorySlice: CategorySlice.reducer,
        homeSlice: HomeSlice.reducer,
        contactSlice: ContactSlice.reducer,
    }
});
