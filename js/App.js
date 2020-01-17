/* Categories, products and category ID */
let categories = [
    { cid: 1, parent: [], weight: 1 },
    { cid: 2, parent: [], weight: 2 },
    { cid: 3, parent: [1], weight: 3 },
    { cid: 4, parent: [2], weight: 0 },
    { cid: 5, parent: [1], weight: 2 },
    { cid: 6, parent: [1], weight: 1 },
    { cid: 7, parent: [1], weight: 0 },
    { cid: 8, parent: [2], weight: 3 }
];
let products = [
    { pid: 1, category: [3] },
    { pid: 2, category: [4] },
    { pid: 3, category: [8] },
    { pid: 4, category: [3] },
    { pid: 5, category: [2] },
    { pid: 6, category: [8, 6] },
    { pid: 7, category: [7] },
    { pid: 8, category: [5] }
];
let categoryId = 1;

/* Javascript function to get the products beloning to correct parent category,
    grouped by category and sorted by weight of category */
function getProducts() {
    let result = [];

    /* Creates an array "cats" of categories with parent 1 sorted by category weight */
    let cats = categories
        .filter(cat => {
            return cat.parent == categoryId;
        })
        .sort((a, b) => {
            return a.weight - b.weight;
        });

    /* Loop through "cats" array, adding current "cid" to new object, 
        filtering out correct products and adding them to new object as well
        before adding new object to array "result" */
    for (i in cats) {
        /* Create new object */
        let prods = [];
        let obj = new Object();

        /* Sets "cid" property of "obj" to current "cid" value from "cats" */
        obj[Object.keys(cats[i])[0]] = cats[i].cid;

        /* Filters out products from current "cats" category and adds them to "prods*/
        prods = products.filter(prod => {
            return prod.category.includes(cats[i].cid);
        });

        /* Add current products in "prods" to new property "products" in Object "obj" */
        obj['products'] = prods;

        /* Adds new Object "obj", containing "cid" and associated products, to array "result" */
        result.push(obj);
    }

    console.log('Result', result);
}
