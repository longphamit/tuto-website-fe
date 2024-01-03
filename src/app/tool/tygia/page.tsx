
import SeoMeta from '@/partials/SeoMeta'
import axios from 'axios';
import xml2js from 'xml2js'
import Grid from '@mui/material/Grid';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { RegularPage } from "@/types";
import { getListPage } from "@/lib/contentParser";
const getMiHongData = async () => {
    const res = await fetch('https://www.mihong.vn/api/v1/gold/prices/current',{next:{revalidate:3600}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
const formatToCurrency = (number: any): string => {
    return number.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.');
};

const TyGia = async () => {
    // SEO
    const dataSEO: RegularPage = getListPage("seo/tygia.md");
    const { frontmatter } = dataSEO;
    const { title, description } = frontmatter;


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
    const tygiaMiHongNow_9999 = tygiaMiHong.data[1];

    //
   

    return (
        <>

            <SeoMeta title={title} description={description} />
            <div className='container'>
   
                <div className=' content' style={{ padding: 20, height: '100vh' }}>
                    <Box >
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <h2>Giá vàng SJC</h2>
                                <Table sx={{ width: "100%", display: "table", tableLayout: "fixed" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='mb-8'><h5>Tiệm vàng</h5></TableCell>
                                            <TableCell align="right"><h5>Giá mua</h5></TableCell>
                                            <TableCell align="right"><h5>Giá bán</h5></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell ><h6>Mi Hồng</h6></TableCell>
                                            <TableCell align="right"><h6>{formatToCurrency(tygiaMiHongNow_SJC.buyingPrice * 10)}</h6></TableCell>
                                            <TableCell align="right"><h6>{formatToCurrency(tygiaMiHongNow_SJC.sellingPrice * 10)}</h6></TableCell>

                                        </TableRow>
                                        <TableRow

                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell><h6>Công ty SJC</h6></TableCell>
                                            <TableCell align="right"><h6>{tygiaSJCNow_SJC.$.buy}.000</h6></TableCell>
                                            <TableCell align="right"><h6>{tygiaSJCNow_SJC.$.sell}.000</h6></TableCell>

                                        </TableRow>
                                    </TableBody>
                                </Table>

                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <h2>Giá vàng nhẫn 9999</h2>
                                <Table sx={{ width: "100%", display: "table", tableLayout: "fixed" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><h5>Tiệm vàng</h5></TableCell>
                                            <TableCell align="right"><h5>Giá mua </h5></TableCell>
                                            <TableCell align="right"><h5>Giá bán</h5></TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell ><h6>Mi Hồng</h6></TableCell>
                                            <TableCell align="right"><h6>{formatToCurrency(tygiaMiHongNow_9999.buyingPrice * 10)}</h6></TableCell>
                                            <TableCell align="right"><h6>{formatToCurrency(tygiaMiHongNow_9999.sellingPrice * 10)}</h6></TableCell>

                                        </TableRow>
                                        <TableRow

                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell><h6>Công ty SJC</h6></TableCell>
                                            <TableCell align="right" ><h6>{tygiaSJCNow_9999.$.buy}.000</h6></TableCell>
                                            <TableCell align="right"><h6>{tygiaSJCNow_9999.$.sell}.000</h6></TableCell>

                                        </TableRow>
                                    </TableBody>
                                </Table>

                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>

        </>
    )
}
export default TyGia
