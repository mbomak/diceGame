import { createSelector } from 'reselect';

const selectMenu = state => state;

const selectTitles = createSelector(selectMenu, menu => {
        let titlesArr = [];

        menu.menu.forEach(item => {
           titlesArr.push(item.title); 
        });

        return titlesArr;
    }
);

export default {
  selectMenu,
  selectTitles
};
