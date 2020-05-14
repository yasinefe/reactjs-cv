import cv from "./data/cv.json"

class CvDataService {

    get() {
        return JSON.parse(JSON.stringify(cv));
    }

    find(search) {
        let newCv = this.get();
        if (search) {
            newCv.profile = this.filterItems(newCv.profile, search);
            this.filterCompositeItems(newCv.technicalSkills, search);
            this.filterCompositeItems(newCv.careerHistory, search);
        }
        return newCv;
    }

    filterCompositeItems(compositeContainer, search) {
        if (compositeContainer.items) {
            for (let i = 0; i < compositeContainer.items.length; i++) {
                compositeContainer.items[i] = this.filterItems(compositeContainer.items[i], search);
                if (compositeContainer.items[i].projectItems) {
                    compositeContainer.items[i].projectItems = null;
                }
            }
            compositeContainer.items = compositeContainer.items
                .filter((item) => item.items && item.items.length > 0);
            compositeContainer.expanded = compositeContainer.items.length > 0;
        }
        return compositeContainer;
    }

    filterItems(container, search) {
        if (container.items) {
            container.items = container.items
                .filter((item) => item.toUpperCase().includes(search.toUpperCase()))
                .map(item => item.replace(new RegExp(search, 'gi'), "<mark>" + search + "</mark>"));
            container.expanded = container.items.length > 0;
        }
        return container;
    }
}

export default new CvDataService()