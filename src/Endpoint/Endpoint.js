const endpoint = "http://147.182.177.124/Productos"

export const getProducts = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const getProduct = async (id) => {
    const res = await fetch(`${API}/${id}`)
    return await res.json()
}

export const saveProduct = async (nuevoProd) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { Accept: 'application/json', "Content-Type": 'application/json' },
        body: JSON.stringify(nuevoProd)
    })
    return await res.json()
}

export const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, {
        method: "DELETE",
    })
}

export const updateProduct = async (id, newProduct) => {
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { Accept: 'application/json', "Content-Type": 'application/json' },
        body: JSON.stringify(newProduct)
    })
    return res;
}