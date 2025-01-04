import { CiSearch } from "react-icons/ci";



const Searchbox = () => {
    return (
        <div className="header-center">
            {/* Search Bar */}
            <div className="headersearch">
                <input type="text" placeholder="Search for products..." />
                <button>
                    <CiSearch />
                </button>
            </div>
        </div>
    )
}

export default Searchbox;