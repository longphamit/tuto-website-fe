import SeoMeta from '@/partials/SeoMeta'
import { RegularPage } from "@/types";
import { getListPage } from "@/lib/contentParser";
import { useParams } from 'next/navigation';



const SurveyProcess = async () => {
    // SEO
    const dataSEO: RegularPage = getListPage("seo/survey.md");
    const { frontmatter } = dataSEO;
    const { title, description } = frontmatter;
    const {id}=useParams()

    return (
        <>

            <SeoMeta title={title} description={description} />
            <div className='container'>

                <div className=' content' style={{ padding: 20, height: '100vh' }}>
                    {id}
                </div>
            </div>

        </>
    )
}
export default SurveyProcess
