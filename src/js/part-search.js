// SHOW More
// remove full path in get fetch
// Error handeling

import "whatwg-fetch";
import find from "lodash/find";

//const API_HOST = PRODUCTION ? '' : 'http://localhost:9000';
const URLprefix = "http://0.0.0.0:9000";

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const scrollTo = (element, to, duration) => {
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

const isCacheExpired = cacheDate => {
  const cache = new Date(cacheDate).getTime();
  const today = new Date().getTime();
  //const thirtyDays = 2592000000;
  const eightHours = 28800000;

  if (today - cache > eightHours) {
    return false;
  } else {
    return true;
  }
};

//????
const getNewData = async (url, localStorageKey) => {
  try {
    const rawData = await fetch(url).then(response => {
      return response.json();
    });
    const localStorageData = { content: rawData.data, timestamp: new Date() };
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
    return rawData.data;
  } catch (err) {
    console.error("there is a problem getting new dropdown data", err);
  }
};

/* Adobe Launch digital datalayer object */
const setDigitalDataLayer = dataPackage => {
  if (dataPackage) {
    window.digitalData = window.digitalData || {};
    digitalData.storeSearch = {
      cityZip: dataPackage.zipOrCity,
      country: dataPackage.country,
      state: dataPackage.state,
      type: dataPackage.products
    };
  }
};

//Toggle SUBMIT button
const handleSubmitButtonDisabledState = () => {
  if (!partNumber.value) {
    //submitButton.setAttribute("disabled", "disabled");
  } else {
    //submitButton.removeAttribute("disabled");
  }
};

const handleInputChange = e => {
  //e.target.parentNode.children[0].classList.remove("has-error");
  //e.target.parentNode.children[0].classList.add("has-error");
  const value = e.target.value;
  //handleSubmitButtonDisabledState();
  console.log("CHANGED, value: " + value);
};

const partNumberInput = document.getElementById("partNumber");
const partsSubmit = document.getElementById("partsSearchSubmit");

partNumberInput.addEventListener("input", handleInputChange);

const toQueryString = data => {
  return Object.keys(data)
    .map(key =>
      data[key]
        ? `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        : ""
    )
    .filter(value => !!value)
    .join("&");
};

//STEP 1; Setup submit click listener
if (document.getElementsByClassName("part-search-form").length) {
  document.addEventListener("DOMContentLoaded", async function(event) {
    try {
      if (partsSubmit) {
        partsSubmit.addEventListener("click", submitSearch);
      } else {
        console.error("the proper elements do not exist on the page");
      }
    } catch (err) {
      console.error(
        "there was a problem bootstrapping the part search page. please see error for details: ",
        err
      );
    }
  });
}

//PART 2: handle SEARCH submission
const submitSearch = async e => {
  console.log("in if YES");
  try {
    e.preventDefault();
    const els = e.target.form.elements;

    let partNumberEl = find(els, { id: "partNumber" });
    // remove any existing errors for a fresh check
    //e.target.parentNode.children[1].classList.remove("has-error");

    const partNumber = partNumberEl.value;
    console.log("partNumber:" + partNumber);

    if (!partNumber) {
      //if (!dataPackage.partNumber) {
      console.log("No part number on form found");
    }
    document.getElementById("partNumber").setAttribute("placeholder", "");
    if (partNumber.length < 4) {
      partNumberEl.parentNode.children[0].classList.add("has-error");
      partNumberEl.parentNode.children[1].classList.add("has-error");
      partNumberEl.parentNode.children[2].classList.add("has-error");
    } else {
      setDigitalDataLayer(partNumber);

      // build query string and remove empty values
      const getUrl = `${URLprefix}/search/by_supplier?snumber=${partNumber}`;
      // get results in variable
      const partsData = await fetch(getUrl).then(response => {
        return response.json();
      });
      // add IDs to each result
      console.log("returned parts: ", partsData);
      if (partsData.success === "true") {
        partsData.data.parts.forEach((part, idx) => {
          part.id = idx + 1;
        });
        // call function to build result markup
        await populateSearchResults(partsData.data);
        partNumberEl.parentNode.children[0].classList.add("black");
        partNumberEl.parentNode.children[1].classList.remove("has-error");
        partNumberEl.parentNode.children[2].classList.remove("has-error");
      } else {
        setAPIFailureError(e.target);
        throw new Error("the server API is currently not functioning properly");
      }
    }
  } catch (err) {
    console.error("error with the search call", err);
  }
};

//PART 3: Populate the results
let markers = [];

const setAPIFailureError = eventTarget => {
  //eventTarget.parentNode.children[1].classList.add('has-error');
};

const populateSearchResults = async resultData => {
  let { qty, parts } = resultData;
  console.log("qty, parts:" + qty + ", " + parts);

  let resultsContainer = document.getElementsByClassName("results-display")[0]; //list-view-wrap
  let heading = document.getElementById("resultsHeader");

  const mediaQuery = window.matchMedia("(min-width: 1024px)");

  if (typeof qty === undefined) {
    qty = 0;
  }
  if (parseInt(qty) === 0) {
    heading.innerText = "Sorry, no results found";
    resultsContainer.innerHTML = "";
  } else {
    if (!mediaQuery.matches) {
      let resultContainer = document.getElementsByClassName(
        "where-to-buy-results"
      )[0];
      console.log("resultContainer offsetTop: ", resultContainer.offsetTop);
      resultContainer.scrollIntoView();
    }
    heading.innerText = qty + " Results Found";
    /*if (parseInt(qty) >= 150) {
            const tooManyMessage = document.createElement('span');
            //tooManyMessage.classList.add('small-text');
            tooManyMessage.innerText = ' (To limit results message)';
            heading.appendChild(tooManyMessage);
        }*/

    resultsContainer.innerHTML = "";

    parts.forEach((part, index) => {
      resultsContainer.appendChild(
        buildIndividualSearchResultItem(part, index)
      );
    });
  }
};

//STEP 4: build out HTML
const buildIndividualSearchResultItem = (partinfo, index) => {
  console.log("part:" + partinfo);
  console.log("index:" + index);
  const { part, suppliers } = partinfo;

  var supplierList = "";
  var partCount = 0;
  suppliers.forEach(name => {
    if (name.part) {
      partCount += 1;
    }
  });

  const numSuppliers = suppliers.length;
  var supplierList = `<p class="parts-head">${partCount} Matching Part from ${numSuppliers} Supplier(s)</p></div>
    <div class="flex-table">
                <h5>Supplier Name</h5>
                <h5>Supplier Part #</h5>
                <div class="gutters item-numb flex-table">`;

  suppliers.forEach((name, index) => {
    //var theSupName =  name;
    console.log("numSuppliers: " + numSuppliers);
    console.log("index: " + index);

    supplierList += `
                <h6>${name.name}</h6>
                <h6>${name.part}</h6>
            `;
  });
  //if (numSuppliers > 1){
  //        supplierList += '<button class="toggle">View More</button>'
  //};

  console.log("part2:" + partinfo);
  //console.log("suppliersList:" + supplierList);
  let container = document.createElement("div");
  let imagePath =
    "https://ix-qa.firestoneip.com/content/dam/fsip/assets/cross-reference-technigrams/";

  container.className = "product-card";
  var imageFullPathName = imagePath + part + ".png";
  console.log("image path: " + imageFullPathName);

  var tester = new Image();
  //tester.onload=imageFound;
  tester.onerror = imageNotFound;
  tester.src = imageFullPathName;

  //function imageFound() {
  //console.log('That image is found and loaded');
  //}

  function imageNotFound() {
    console.log("That image is NOT found");
    imageFullPathName =
      "http://bsro-int.icrossing.com:4702/assetdetails.html/content/dam/fsip/assets/cross-reference-technigrams/fst-no-image.png";
  }
  console.log("imageFullPathName: " + imageFullPathName);
  var cardResults = `<div class="gutters"> 
                <p>Firestone Part #</p>
                <h2>${part}</h2>
                <div class="horiz-rule"></div>
                <div class="image-card">
                    <picture>
                        <source srcset="${imageFullPathName}" media="(min-width:756px)">
                        <img src="${imageFullPathName}"/>
                    </picture>
                    <button class="zoom">zoom</button>
                </div>
                <div class="horiz-rule"></div>
                <div class="btn-wrap">
                    <a class="btn">Where to Buy</a>
                </div>
                <div class="horiz-rule"></div>
                    ${supplierList}
                    </div>
                    </div>`;
  if (numSuppliers > 1) {
    cardResults += '<button class="toggle">View More</button>';
  }
  container.innerHTML = cardResults;
  return container;
};
