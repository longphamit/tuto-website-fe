'use client'
import SeoMeta from '@/partials/SeoMeta'
import { useSearchParams } from 'next/navigation'


import { RegularPage } from "@/types";
import { getListPage } from "@/lib/contentParser";
import { useEffect } from 'react';
import { Box, Card, TextField } from '@mui/material';
import { CommentEmbed } from 'disqus-react';


const Survey = async () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(() => {
        console.log(id)
    }, [])
    return (
        <>

            <SeoMeta title={"Khảo sát"} description={""} />
            <div className='container'>

                <div className=' content' style={{ padding: 20, height: '100vh',textAlign:"center" }}>
                    <h2>Khảo sát đánh giá cảm quan</h2>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                          <TextField/>
                          <TextField/>
                        
                        </div>
                        <div>
                            <Card >
                                Bạn có thường xuyên sử dụng sữa rửa mặt không ?
                            </Card>
                        </div>
                        <div>
                            
                        </div>
                        
        
                    </Box>
                </div>
            </div>

        </>
    )
}
export default Survey
