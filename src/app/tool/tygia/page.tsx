
import SeoMeta from '@/partials/SeoMeta'
import axios from 'axios';
import xml2js from 'xml2js'

const getMiHongData = async () => {
    const res = await fetch('https://www.mihong.vn/api/v1/gold/prices/current')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
const getSjcData: any = async () => {

}

const TyGia = async () => {
    // SJC 
    let tygiaSJCNow_SJC: any;
    let tygiaSJCNow_9999: any;
    const response = await axios.get('https://sjc.com.vn/xml/tygiavang.xml');
    const xmlData = response.data;
    let parser = new xml2js.Parser()
    parser.parseString(xmlData, (err: any, result: any) => {
        tygiaSJCNow_SJC = result?.root?.ratelist[0].city[0].item[0];
        tygiaSJCNow_9999 = result?.root?.ratelist[0].city[0].item[1];
    });
    // Mi hong
    const tygiaMiHong = await getMiHongData()
    const tygiaMiHongNow_SJC = tygiaMiHong.data[0];


    //


    return (
        <>

            <SeoMeta title='Giá Vàng Hôm Nay' description='Cập nhật giá vàng mới nhất hôm nay' />

            <div className='content'>
            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <GridItem  >
                        <TableContainer >
                            <Table variant='simple'>
                                <TableCaption>Giá vàng SJC</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Tiệm vàng</Th>
                                        <Th>Giá mua</Th>
                                        <Th>Giá bán</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Vàng Mi Hồng</Td>
                                        <Td>{tygiaMiHongNow_SJC.buyingPrice}</Td>
                                        <Td>{tygiaMiHongNow_SJC.sellingPrice}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Công ty Vàng SJC</Td>
                                        <Td>{tygiaSJCNow_SJC.$.buy}.000</Td>
                                        <Td>{tygiaSJCNow_SJC.$.sell}.000</Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </GridItem>
                    <GridItem >
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>Giá vàng nhẫn 9999</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Tiệm vàng</Th>
                                        <Th>Giá mua</Th>
                                        <Th>Giá bán</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Vàng Mi Hồng</Td>
                                        <Td>{tygiaMiHongNow_SJC.buyingPrice}</Td>
                                        <Td>{tygiaMiHongNow_SJC.sellingPrice}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Công ty Vàng SJC</Td>
                                        <Td>{tygiaSJCNow_9999.$.buy}.000</Td>
                                        <Td>{tygiaSJCNow_9999.$.sell}.000</Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </GridItem>
                </SimpleGrid> */}



            </div>
        </>
    )
}
export default TyGia
