import NewsCard from "../Card/NewsCard";
import Container from "../Share/Container";
import Header from "../Share/Header";

const LatestNews = () => {
    return (
        <div className="my-[150px]">
            <Container>
                <Header className='text-[#0E1D52] ' middle='justify-center' text='latest news'></Header>
                <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NewsCard></NewsCard>
                </div>
            </Container>
            
        </div>
    );
};

export default LatestNews;