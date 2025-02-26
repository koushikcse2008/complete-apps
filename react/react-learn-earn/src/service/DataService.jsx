import http from './http-common';

class DataService {
    getHome() {
        return http.get("/home");
    }

    getAboutUs() {
        return http.get("/about-us");
    }

    getTeam() {
        return http.get("/teams");
    }

    getServices() {
        return http.get("/services");
    }

    getPricing() {
        return http.get("/pricing");
    }

    getBlog() {
        return http.get("/blogs");
    }

    getBlogById(id) {
        return http.get(`/blogs/${id}`);
    }

    createContact(data) {
        return http.post("/contacts", data);
    } 

    getFooter() {
        return http.get("/footer");
    }

    createNewsletter(data) {
        return http.post("/newsletter", data);
    } 

    getTerms() {
        return http.get("/terms-conditions");
    }

    getPrivacyPolicy() {
        return http.get("/privacy-policy");
    }

}

export default new DataService();