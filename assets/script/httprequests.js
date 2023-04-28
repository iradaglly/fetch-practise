const base_URL = 'https://northwind.vercel.app/api';

// get all categories
export const getAllCategories = async () => {
    let globalData;
    await fetch(`${base_URL}/suppliers`)
        .then(resp => resp.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}


// categories by ID
export const getCategoriesByID = async (id) => {
    let globalData;
    await fetch(`${base_URL}/suppliers/${id}`)
        .then(resp => resp.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
};

// delete category by ID
export const deleteCategoryByID = async (id) => {
    let globalData;
    await fetch(`${base_URL}/suppliers/${id}`, {
        method: 'DELETE'
    })
    return globalData;
};


// post category
export const postCategory = async (suppliers) => {
    await fetch(`${base_URL}/suppliers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(suppliers)
    })
}

// put category by ID
export const editCAtegoryByID = async (id, supplier) => {
    await fetch(`${base_URL}/suppliers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplier)
    })
} 