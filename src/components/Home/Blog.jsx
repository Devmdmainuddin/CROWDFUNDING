
import BlogCard from "../Card/BlogCard";
import Header from "../Share/Header";
import Container from "../Share/Container";


const Blog = () => {
    return (
        <div className="my-[150px]">
            <Container>
                <Header className='text-[#0E1D52] ' text='Proyectos ITH ahora…'></Header>
                <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogCard></BlogCard>
                </div>
            </Container>

        </div>
    );
};

export default Blog;