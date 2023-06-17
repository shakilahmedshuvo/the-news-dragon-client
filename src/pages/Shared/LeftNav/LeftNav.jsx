import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    // backend server url
    useEffect(() => {
        fetch('https://the-news-dragon-server-tau-nine.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h4>
                All Category
            </h4>
            <div className='ps-4 mt-4 fs-5 fw-bold'>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link
                            to={`/category/${category.id}`}
                            className='text-secondary text-decoration-none'>
                            {category.name}
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;