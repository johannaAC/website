let sortNameAsc = true;
let sortSkillAsc = true;
const btnSortName = '#btnSortName';
const btnSortSkill = '#btnSortSkill';
const btnFilterCubi = '#btnFilterCubi';
const btnFilterScratch = '#btnFilterScratch';

REOrganizer.init('.level');

let reoSettings = {
    sort: 'difficulty',
    reverse: false,
    filter: 'none'
}

function applySortAndFilter() {
    REOrganizer.organize(reoSettings.sort, reoSettings.reverse, reoSettings.filter);
}

applySortAndFilter();

function sortName(asc) {
    reoSettings.sort = 'title';
    reoSettings.reverse = !asc;
    applySortAndFilter();
}

function sortSkill(asc) {
    reoSettings.sort = 'difficulty';
    reoSettings.reverse = !asc;
    applySortAndFilter();
}

function filterApp(filter) {
    reoSettings.filter = filter;
    applySortAndFilter();
}

$('#BSelectSort').on('changed.bs.select', function (e, clickedIndex) {
    switch (clickedIndex) {
        case 0:
            sortSkill(true);
            break;
        case 1:
            sortSkill(false);
            break;
        case 2:
            sortName(true);
            break;
        case 3:
            sortName(false);
            break;
    }
});

$('#BSelectFilter').on('changed.bs.select', function (e, clickedIndex) {
    switch (clickedIndex) {
        case 0:
            filterApp('none');
            break;
        case 1:
            filterApp('cubi');
            break;
        case 2:
            filterApp('scratch');
            break;
    }
});