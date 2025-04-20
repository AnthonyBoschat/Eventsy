export default async function callBackend(endpoint, method="GET", payload=null){
    if(!endpoint) return null
    if(method === "GET" && payload) return null
    if(method === "POST" && !payload) return null
    
    if(method === "GET"){
        const response = await fetch(endpoint)
        if(!response.ok) return null
        const data = await response.json()
        return data
    }else{
        const response = await fetch(endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if(!response.ok) return null
        const data = await response.json()
        return data
    }
}