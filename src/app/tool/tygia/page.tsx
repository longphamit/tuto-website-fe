const TyGia = async () => {
    const getData = async () => {
        const res = await fetch('https://www.mihong.vn/api/v1/gold/prices/current')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }

        return res.json()
    }
    const tygia = await getData()
    console.log(tygia)
    return (
        <>
            <div>
                
            </div>
        </>
    )
}
export default TyGia
