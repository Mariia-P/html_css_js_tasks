const appRoot = document.getElementById('app-root');

/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Counteries Search';
headerTitle.classList.add('title-header');
appRoot.after(headerTitle);

const formWrapper = document.createElement('div');
headerTitle.after(formWrapper);

const form = document.createElement('form');
formWrapper.append(form);
formWrapper.classList.add('form-wr');

const radioWrapper = document.createElement('div');
form.prepend(radioWrapper);
radioWrapper.classList.add('radio-wr');

const radioP = document.createElement('p');
radioP.textContent = 'Please choose type of search';
radioP.classList.add('radio-p');
radioWrapper.prepend(radioP);

const inputWrapper = document.createElement('div');
radioWrapper.append(inputWrapper);
inputWrapper.classList.add('input-wr');

const regionWrapper = document.createElement('div');
inputWrapper.append(regionWrapper);

const radioInputRegion = document.createElement('input');
radioInputRegion.setAttribute('type', 'radio');
radioInputRegion.setAttribute('id', 'region');
radioInputRegion.setAttribute('value', 'region');
radioInputRegion.setAttribute('name', 'type');
regionWrapper.append(radioInputRegion);

const labelRegion = document.createElement('label');
labelRegion.textContent = 'By region';
labelRegion.setAttribute('for', 'region');
radioInputRegion.after(labelRegion);

const languageWrapper = document.createElement('div');
inputWrapper.prepend(languageWrapper);

const radioInputLanguage = document.createElement('input');
radioInputLanguage.setAttribute('type', 'radio');
radioInputLanguage.setAttribute('id', 'language');
radioInputLanguage.setAttribute('value', 'language');
radioInputLanguage.setAttribute('name', 'type');
languageWrapper.append(radioInputLanguage);

const labelLanguage = document.createElement('label');
labelLanguage.textContent = 'By language';
labelLanguage.setAttribute('for', 'language');
radioInputLanguage.after(labelLanguage);

// =====================================================
const serchWrapper = document.createElement('div');
form.append(serchWrapper);
serchWrapper.classList.add('serch-wr');

const serchP = document.createElement('p');
serchP.textContent = 'Please choose search query';
serchP.classList.add('serch-p');
serchWrapper.prepend(serchP);

const selectSearch = document.createElement('select');
selectSearch.setAttribute('id', 'select-search');
selectSearch.setAttribute('required', 'true');

const optionSelected = document.createElement('option');
optionSelected.setAttribute('disabled', 'true');
optionSelected.setAttribute('selected', 'true');
optionSelected.setAttribute('value', '');
optionSelected.textContent = 'Select value';
selectSearch.append(optionSelected);

serchWrapper.append(selectSearch);

const tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-wrapper');
formWrapper.after(tableWrapper);
// =======================================
const table = document.createElement('table');
table.classList.add('table');
tableWrapper.append(table);

const regionsList = externalService.getRegionsList();
const languagesList = externalService.getLanguagesList();

class CounteriesSearch {
  constructor(regionsList, languagesList) {
    this.regionsList = regionsList;
    this.languagesList = languagesList;
    this.region;
    this.language;
    this.type;
    this.setRegionCountries = [];
    this.setLanguagesCountries = [];
  }

  addOptionsToSelect() {
    const regionInput = document.getElementById('region');
    const languageInput = document.getElementById('language');
    const select = document.querySelector('select');

    regionInput.addEventListener('click', () => {
      this.type = regionInput.getAttribute('value');
      if (select.options.length > 1) {
        select.options.length = 1;
      }
      this.regionsList.forEach((region) => {
        select.options[select.options.length] = new Option(region);
      });
      this.chooseSearchQuery();
    });

    languageInput.addEventListener('click', () => {
      this.type = languageInput.getAttribute('value');
    
      if (select.options.length > 1) {
        select.options.length = 1;
      }
      this.languagesList.forEach((language) => {
        select.options[select.options.length] = new Option(language);
      });
      this.chooseSearchQuery();
    });
  }
  chooseSearchQuery() {
    const select = document.querySelector('select');
    select.addEventListener('change', () => {
      if (this.type === 'region') {
        this.setRegionCountries = externalService.getCountryListByRegion(
          select.value
        );
        this.createTable(this.setRegionCountries);
        
      }
      if (this.type === 'language') {
        this.setLanguagesCountries = externalService.getCountryListByLanguage(
          select.value
        );
        this.createTable(this.setLanguagesCountries);
      }
    });
  }

  createTable(setContries) {
    const thead = document.querySelector('thead');
    const table = document.querySelector('table');

    if (!!thead) {
      table.innerHTML = '';
    }
    table.innerHTML = `<thead class = "table-head">
        <tr>
         <td> <button  class="table_but" id="country">Country name<i class="fas fa-long-arrow-alt-up"></i>
         </button>  </td>
         <td> Capital </td>
         <td> World region </td>
         <td> Languages </td>
         <td> <button  class="table_but" id="area">Area<i class="fas fa-arrows-alt-v"></i>
         </button>  </td>
         <td> Flag </td>
        </tr>
       </thead>
       <tbody></tbody>`;

      const lengsKeys= Object.keys(setContries[0]).length;
      
    const tableCells = setContries.map(function () {
     
      const tr = document.createElement('tr');
      for (let i =0; i<lengsKeys; i++) {
        tr.innerHTML += `<td></td>`;  
      }
      return tr;
    });

    this.fullTable(tableCells, setContries);

  }

  fullTable(cells, setCountries) {
    const tbody = document.querySelector('tbody');
    const newCountriesSet = [];
    const item = {
      name: null,
      capital: null,
      region: null,
      languages: {},
      area: null,
      flagURL: null,
    };
    
    setCountries.forEach(function (country, idx) {
      newCountriesSet[idx] = Object.assign({}, item);
      for (const key in country) {
        newCountriesSet[idx][key] = country[key];
      }
    });
    

    cells.forEach((cell) => {
      tbody.prepend(cell);
    });
    const sortedCountriesSet = this.sortedCountriesByString(
      newCountriesSet,
      'name'
    );
    this.fullCelesText(sortedCountriesSet);
    this.listenerHead(sortedCountriesSet);
  }

  fullCelesText(sortedCountriesSet) {
    const tds = document.querySelectorAll('tbody td');
    const tdsArray = [...tds];

    let i = 0;

    sortedCountriesSet.forEach(function (contry) {
      for (const key in contry) {
        if (key === 'flagURL') {
          tdsArray[i].innerHTML = `<img src= ${contry[key]}>`;
          i++;
        } else if (typeof contry[key] === 'object') {
          const lan = contry[key];
          
          let td = '';
          for (const nextKey in lan) {
            td += ` ${lan[nextKey]} `;
          }
          tdsArray[i].innerHTML = `${td}`;
          i++;
        } else {
          tdsArray[i].innerHTML = `${contry[key]}`;
          i++;
        }
      }
    });
    
  }
  
  sortCountriesByNumbers(setCountries, prop, flag) {
    setCountries.sort(function (a, b) {
      if (flag) {
 return b[prop] - a[prop]; 
}
      return a[prop] - b[prop];
    });

    return setCountries;
  }

  sortedCountriesByString(setCountries, prop, flag) {
    setCountries.sort(function (a, b) {
      let nameA = a[prop].toLowerCase(),
        nameB = b[prop].toLowerCase();
      if (flag) {
        if (nameA < nameB) {
 return 1; 
}
        if (nameA > nameB) {
 return -1; 
}
        return 0;
      } else {
        if (nameA < nameB) {
 return -1; 
}
        if (nameA > nameB) {
 return 1; 
}
        return 0;
      }
    });

    return setCountries;
  }

  listenerHead(setCountries) {
    const headerTable = document.querySelector('thead');
    headerTable.addEventListener('click', (e) => {
     

      if (e.target.id === 'country') {
        let button = e.target;
        let icon = button.childNodes[1];
        if (icon.classList.contains('fa-long-arrow-alt-up')) {
          const setSortCountries = setCountries.reverse();
          icon.classList.remove('fa-long-arrow-alt-up');
          icon.classList.add('fa-long-arrow-alt-down');
          this.fullCelesText(setSortCountries);
        } else if (icon.classList.contains('fa-long-arrow-alt-down')) {
          const setSortCountries = setCountries.reverse();
          icon.classList.remove('fa-long-arrow-alt-down');
          icon.classList.add('fa-long-arrow-alt-up');
          this.fullCelesText(setSortCountries);
        } else if (icon.classList.contains('fa-arrows-alt-v')) {
          const countrieButton = document.getElementById('area');
          const countrieIcon = countrieButton.childNodes[1];
          countrieIcon.classList.remove(`fa-long-arrow-alt-up`);
          countrieIcon.classList.remove(`fa-long-arrow-alt-down`);
          countrieIcon.classList.add('fa-arrows-alt-v');

          const setSortCountries = this.sortedCountriesByString(
            setCountries,
            'name'
          );
          icon.classList.remove('fa-arrows-alt-v');
          icon.classList.add('fa-long-arrow-alt-up');
          this.fullCelesText(setSortCountries);
        }
      } else if (e.target.id === 'area') {
        let button = e.target;
        let icon = button.childNodes[1];
        if (icon.classList.contains('fa-arrows-alt-v')) {
          const countrieButton = document.getElementById('country');
          const countrieIcon = countrieButton.childNodes[1];
          countrieIcon.classList.remove(`fa-long-arrow-alt-up`);
          countrieIcon.classList.remove(`fa-long-arrow-alt-down`);
          countrieIcon.classList.add('fa-arrows-alt-v');

          const setSortCountries = this.sortCountriesByNumbers(
            setCountries,
            'area'
          );
          icon.classList.remove('fa-arrows-alt-v');
          icon.classList.add('fa-long-arrow-alt-up');
          this.fullCelesText(setSortCountries);
        } else if (icon.classList.contains('fa-long-arrow-alt-up')) {
          const setSortCountries = this.sortCountriesByNumbers(
            setCountries,
            'area',
            'f'
          );
          icon.classList.remove('fa-long-arrow-alt-up');
          icon.classList.add('fa-long-arrow-alt-down');
          this.fullCelesText(setSortCountries);
        } else if (icon.classList.contains('fa-long-arrow-alt-down')) {
          icon.classList.remove('fa-long-arrow-alt-down');
          icon.classList.add('fa-long-arrow-alt-up');
          const setSortCountries = this.sortCountriesByNumbers(
            setCountries,
            'area'
          );
          this.fullCelesText(setSortCountries);
        }
      }
    });
  }
}

const myCounteriesSearch = new CounteriesSearch(regionsList, languagesList);
myCounteriesSearch.addOptionsToSelect();
