import createRestaurantHomePage from './Rest';
import createSections from './section';

function startingLoad() {
    createSections()
    createRestaurantHomePage();
}

export default startingLoad;