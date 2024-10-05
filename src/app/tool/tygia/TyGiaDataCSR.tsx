import {Box, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Grid from "@mui/material/Grid";

const formatToCurrency = (number: any): string => {
    return number.toLocaleString('en-US', {useGrouping: true}).replace(/,/g, '.');
};
const TyGiaDataCSR = (tygiaSJCNow_SJC: any,
                      tygiaMiHongNow_SJC: any,
                      tygiaMiHongNow_9999: any,
                      tygiaSJCNow_9999: any
) => {
    return (<div className='container'>
        <div className=' content' style={{padding: 20, height: '100vh'}}>
            <Box>
                <Grid container spacing={{xs: 2, md: 3}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <h2>Giá vàng SJC</h2>
                        <Table sx={{width: "100%", display: "table", tableLayout: "fixed"}}
                               aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='mb-8'><h5>Tiệm vàng</h5></TableCell>
                                    <TableCell align="right"><h5>Giá mua</h5></TableCell>
                                    <TableCell align="right"><h5>Giá bán</h5></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell><h6>Mi Hồng</h6></TableCell>
                                    <TableCell align="right">
                                        <h6>{formatToCurrency(tygiaMiHongNow_SJC?.buyingPrice * 10)}</h6>
                                    </TableCell>
                                    <TableCell align="right">
                                        <h6>{formatToCurrency(tygiaMiHongNow_SJC?.sellingPrice * 10)}</h6>
                                    </TableCell>

                                </TableRow>
                                <TableRow

                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell><h6>Công ty SJC</h6></TableCell>
                                    <TableCell align="right"><h6>{tygiaSJCNow_SJC?.$?.buy}.000</h6></TableCell>
                                    <TableCell align="right"><h6>{tygiaSJCNow_SJC?.$?.sell}.000</h6></TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <h2>Giá vàng nhẫn 9999</h2>
                        <Table sx={{width: "100%", display: "table", tableLayout: "fixed"}}
                               aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><h5>Tiệm vàng</h5></TableCell>
                                    <TableCell align="right"><h5>Giá mua </h5></TableCell>
                                    <TableCell align="right"><h5>Giá bán</h5></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell><h6>Mi Hồng</h6></TableCell>
                                    <TableCell align="right">
                                        <h6>{formatToCurrency(tygiaMiHongNow_9999?.buyingPrice * 10)}</h6>
                                    </TableCell>
                                    <TableCell align="right">
                                        <h6>{formatToCurrency(tygiaMiHongNow_9999?.sellingPrice * 10)}</h6>
                                    </TableCell>

                                </TableRow>
                                <TableRow

                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell><h6>Công ty SJC</h6></TableCell>
                                    <TableCell align="right"><h6>{tygiaSJCNow_9999?.$?.buy}.000</h6></TableCell>
                                    <TableCell align="right"><h6>{tygiaSJCNow_9999?.$?.sell}.000</h6></TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>

                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>)
}
export default TyGiaDataCSR;