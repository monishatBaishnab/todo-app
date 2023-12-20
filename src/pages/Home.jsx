import ProductsContainer from "../components/Home/ProductsContainer";

const Home = () => {
    return (
        <div className="">
            <div className="container grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="">
                    <div>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <ProductsContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;